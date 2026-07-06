"use client";
import { useEffect, useRef } from "react";
import styles from "./HeroCanvas.module.css";

/**
 * WebGL particle ocean — a flowing 3D wave field that ripples away from the
 * cursor. Navy/orange palette. Performance-guarded:
 *  - pixel ratio capped at 1.5
 *  - rendering pauses when the hero is off-screen
 *  - skipped entirely for reduced-motion users or if WebGL is unavailable
 */
const HeroCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer, scene, camera, points, raf;
    let disposed = false;
    let running = true;

    let cleanup = () => {};

    import("three")
      .then((THREE) => {
        if (disposed) return;

        // --- Scene setup ---
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0b0e17, 0.055);

        camera = new THREE.PerspectiveCamera(
          58,
          mount.clientWidth / mount.clientHeight,
          0.1,
          100
        );
        camera.position.set(0, 4.6, 9);
        camera.lookAt(0, 0, 0);

        try {
          renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          });
        } catch {
          return; // no WebGL — the CSS glow remains as fallback
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // --- Particle grid ---
        const COLS = 130;
        const ROWS = 60;
        const SPACING = 0.28;
        const COUNT = COLS * ROWS;

        const positions = new Float32Array(COUNT * 3);
        const colors = new Float32Array(COUNT * 3);
        const base = new Float32Array(COUNT * 2); // x,z base coords

        const cNear = new THREE.Color(0xff4d1c); // accent
        const cFar = new THREE.Color(0x2c3550); // steel navy

        let i = 0;
        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            const x = (c - COLS / 2) * SPACING;
            const z = (r - ROWS / 2) * SPACING;
            positions[i * 3] = x;
            positions[i * 3 + 1] = 0;
            positions[i * 3 + 2] = z;
            base[i * 2] = x;
            base[i * 2 + 1] = z;

            // color: accent hotspot toward the right-front, fading to navy
            const t = Math.min(
              1,
              Math.hypot((x - 6) / 14, (z - 2) / 8)
            );
            const col = cNear.clone().lerp(cFar, t);
            colors[i * 3] = col.r;
            colors[i * 3 + 1] = col.g;
            colors[i * 3 + 2] = col.b;
            i++;
          }
        }

        const geo = new THREE.BufferGeometry();
        geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
          size: 0.05,
          vertexColors: true,
          transparent: true,
          opacity: 0.85,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        });

        points = new THREE.Points(geo, mat);
        scene.add(points);

        // --- Mouse ripple ---
        const mouse = { x: 999, z: 999, tx: 999, tz: 999 };
        const ndc = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();
        const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
        const hit = new THREE.Vector3();

        const onMove = (e) => {
          const rect = mount.getBoundingClientRect();
          ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
          ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
          raycaster.setFromCamera(ndc, camera);
          if (raycaster.ray.intersectPlane(plane, hit)) {
            mouse.tx = hit.x;
            mouse.tz = hit.z;
          }
        };
        const onLeave = () => {
          mouse.tx = 999;
          mouse.tz = 999;
        };
        mount.addEventListener("pointermove", onMove);
        mount.addEventListener("pointerleave", onLeave);

        // --- Visibility pause ---
        const io = new IntersectionObserver(
          ([entry]) => {
            running = entry.isIntersecting;
            if (running) animate();
          },
          { threshold: 0.02 }
        );
        io.observe(mount);

        // --- Resize ---
        const onResize = () => {
          const w = mount.clientWidth;
          const h = mount.clientHeight;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        };
        window.addEventListener("resize", onResize);

        // --- Animate ---
        const clock = new THREE.Clock();
        const pos = geo.attributes.position;

        function animate() {
          if (!running || disposed) return;
          raf = requestAnimationFrame(animate);
          const t = clock.getElapsedTime();

          // ease mouse
          mouse.x += (mouse.tx - mouse.x) * 0.08;
          mouse.z += (mouse.tz - mouse.z) * 0.08;

          for (let p = 0; p < COUNT; p++) {
            const bx = base[p * 2];
            const bz = base[p * 2 + 1];

            // layered waves
            let y =
              Math.sin(bx * 0.55 + t * 0.9) * 0.32 +
              Math.sin(bz * 0.75 + t * 0.65) * 0.26 +
              Math.sin((bx + bz) * 0.32 + t * 0.45) * 0.18;

            // cursor ripple: push particles up around the pointer
            const dx = bx - mouse.x;
            const dz = bz - mouse.z;
            const d2 = dx * dx + dz * dz;
            if (d2 < 6.5) {
              const f = 1 - d2 / 6.5;
              y += Math.sin(t * 4 - Math.sqrt(d2) * 2.2) * f * 0.55 + f * 0.35;
            }

            pos.array[p * 3 + 1] = y;
          }
          pos.needsUpdate = true;

          points.rotation.y = Math.sin(t * 0.05) * 0.04;
          renderer.render(scene, camera);
        }
        animate();

        cleanup = () => {
          cancelAnimationFrame(raf);
          io.disconnect();
          window.removeEventListener("resize", onResize);
          mount.removeEventListener("pointermove", onMove);
          mount.removeEventListener("pointerleave", onLeave);
          geo.dispose();
          mat.dispose();
          renderer.dispose();
          if (renderer.domElement.parentNode === mount) {
            mount.removeChild(renderer.domElement);
          }
        };
      })
      .catch(() => {});

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={mountRef} className={styles.canvas} aria-hidden="true" />;
};

export default HeroCanvas;
