"use client";
import { useEffect, useRef } from "react";
import styles from "./LogoGlobe.module.css";

/**
 * The Webhub4U globe mark as a living 3D object:
 *  - azure wireframe sphere (matches the logo's globe)
 *  - two tilted orbit rings echoing the logo swoosh
 *  - an orange comet tracing the orbit (ties the brand azure to the site accent)
 *  - slow rotation + cursor parallax
 * Perf-guarded like HeroCanvas: DPR cap, off-screen pause, reduced-motion skip.
 */
const LogoGlobe = ({ size = 460 }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let running = true;
    let raf;
    let cleanup = () => {};

    import("three")
      .then((THREE) => {
        if (disposed) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60);
        camera.position.set(0, 0.4, 7.2);

        let renderer;
        try {
          renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        } catch {
          return;
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        const AZURE = 0x1fb1e6;
        const AZURE_DIM = 0x14719a;
        const ORANGE = 0xff4d1c;

        const globe = new THREE.Group();
        scene.add(globe);

        // --- Wireframe sphere: latitude + longitude lines ---
        const R = 2.15;
        const latMat = new THREE.LineBasicMaterial({
          color: AZURE_DIM,
          transparent: true,
          opacity: 0.55,
        });
        const lonMat = new THREE.LineBasicMaterial({
          color: AZURE,
          transparent: true,
          opacity: 0.5,
        });

        const circlePoints = (r, segments = 96) => {
          const pts = [];
          for (let s = 0; s <= segments; s++) {
            const a = (s / segments) * Math.PI * 2;
            pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r));
          }
          return pts;
        };

        // latitudes
        for (let i = -3; i <= 3; i++) {
          const phi = (i / 4) * (Math.PI / 2);
          const r = R * Math.cos(phi);
          const y = R * Math.sin(phi);
          const geo = new THREE.BufferGeometry().setFromPoints(circlePoints(r));
          const line = new THREE.Line(geo, latMat);
          line.position.y = y;
          globe.add(line);
        }
        // longitudes
        for (let i = 0; i < 8; i++) {
          const geo = new THREE.BufferGeometry().setFromPoints(circlePoints(R));
          const line = new THREE.Line(geo, lonMat);
          line.rotation.z = Math.PI / 2;
          line.rotation.y = (i / 8) * Math.PI;
          globe.add(line);
        }

        // --- Node points at intersections (subtle) ---
        const nodeGeo = new THREE.BufferGeometry();
        const nodePos = [];
        for (let i = -2; i <= 2; i++) {
          const phi = (i / 4) * (Math.PI / 2);
          for (let j = 0; j < 16; j++) {
            const theta = (j / 16) * Math.PI * 2;
            nodePos.push(
              R * Math.cos(phi) * Math.cos(theta),
              R * Math.sin(phi),
              R * Math.cos(phi) * Math.sin(theta)
            );
          }
        }
        nodeGeo.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(nodePos, 3)
        );
        const nodes = new THREE.Points(
          nodeGeo,
          new THREE.PointsMaterial({
            color: AZURE,
            size: 0.045,
            transparent: true,
            opacity: 0.9,
          })
        );
        globe.add(nodes);

        // --- Swoosh rings (echoing the logo) ---
        const ringGroup = new THREE.Group();
        scene.add(ringGroup);
        const mkRing = (radius, tilt, color, opacity) => {
          const geo = new THREE.BufferGeometry().setFromPoints(
            circlePoints(radius, 128)
          );
          const ring = new THREE.Line(
            geo,
            new THREE.LineBasicMaterial({ color, transparent: true, opacity })
          );
          ring.rotation.x = tilt;
          ringGroup.add(ring);
          return ring;
        };
        mkRing(R * 1.35, Math.PI / 2.4, AZURE, 0.8);
        mkRing(R * 1.5, Math.PI / 2.15, AZURE_DIM, 0.4);

        // --- Orange comet on the main ring ---
        const comet = new THREE.Mesh(
          new THREE.SphereGeometry(0.075, 16, 16),
          new THREE.MeshBasicMaterial({ color: ORANGE })
        );
        scene.add(comet);
        // comet trail
        const TRAIL = 22;
        const trailGeo = new THREE.BufferGeometry();
        trailGeo.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(new Float32Array(TRAIL * 3), 3)
        );
        const trail = new THREE.Points(
          trailGeo,
          new THREE.PointsMaterial({
            color: ORANGE,
            size: 0.06,
            transparent: true,
            opacity: 0.5,
          })
        );
        scene.add(trail);
        const trailPts = [];

        // --- Cursor parallax ---
        const target = { x: 0, y: 0 };
        const onMove = (e) => {
          const r = mount.getBoundingClientRect();
          target.x = ((e.clientX - r.left) / r.width - 0.5) * 0.5;
          target.y = ((e.clientY - r.top) / r.height - 0.5) * 0.35;
        };
        const onLeave = () => {
          target.x = 0;
          target.y = 0;
        };
        mount.addEventListener("pointermove", onMove);
        mount.addEventListener("pointerleave", onLeave);

        const io = new IntersectionObserver(
          ([entry]) => {
            running = entry.isIntersecting;
            if (running) animate();
          },
          { threshold: 0.05 }
        );
        io.observe(mount);

        const onResize = () => {
          const s = Math.min(mount.clientWidth, mount.clientHeight);
          renderer.setSize(mount.clientWidth, mount.clientHeight);
          camera.aspect = mount.clientWidth / mount.clientHeight;
          camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", onResize);
        onResize();

        const clock = new THREE.Clock();
        function animate() {
          if (!running || disposed) return;
          raf = requestAnimationFrame(animate);
          const t = clock.getElapsedTime();

          globe.rotation.y = t * 0.18;
          globe.rotation.x += (target.y - globe.rotation.x) * 0.05;
          ringGroup.rotation.y = -t * 0.1;
          ringGroup.rotation.x += (target.y * 0.6 - ringGroup.rotation.x) * 0.04;

          scene.rotation.y += (target.x - scene.rotation.y) * 0.05;

          // comet along tilted orbit
          const a = t * 0.9;
          const r = R * 1.35;
          const p = new THREE.Vector3(
            Math.cos(a) * r,
            0,
            Math.sin(a) * r
          ).applyAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2.4);
          comet.position.copy(p);

          trailPts.unshift(p.clone());
          if (trailPts.length > TRAIL) trailPts.pop();
          const tp = trailGeo.attributes.position.array;
          for (let i = 0; i < TRAIL; i++) {
            const v = trailPts[i] || p;
            tp[i * 3] = v.x;
            tp[i * 3 + 1] = v.y;
            tp[i * 3 + 2] = v.z;
          }
          trailGeo.attributes.position.needsUpdate = true;

          renderer.render(scene, camera);
        }
        animate();

        cleanup = () => {
          cancelAnimationFrame(raf);
          io.disconnect();
          window.removeEventListener("resize", onResize);
          mount.removeEventListener("pointermove", onMove);
          mount.removeEventListener("pointerleave", onLeave);
          renderer.dispose();
          if (renderer.domElement.parentNode === mount)
            mount.removeChild(renderer.domElement);
        };
      })
      .catch(() => {});

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={styles.globe}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
};

export default LogoGlobe;
