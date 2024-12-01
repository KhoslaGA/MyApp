import Image from "next/image";
import Link from "next/link";
import logoImag1 from "@/assets/img/logo/Logo_3.png";
import logoImag2 from "@/assets/img/logo/Logo_4.png";

const LogoFooter = ({ style }) => {
  return (
    <div
      className={`col-xl-4 ${!style ? "col-lg-6" : "col-lg-4"} col-md-6`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        className="footer__widget footer__left position-relative "
        // style={{ zIndex: 10 }}
      >
        <div className="footer__logo">
          {style === 2 ? (
            <>
              <Image src={logoImag1} alt="" className="logo-image1" />
              <Image src={logoImag2} alt="" className="logo-image2" />
            </>
          ) : (
            <Image src={logoImag1} alt="" />
          )}
        </div>
        <div className="footer__text">
          <p>
            At WebHub4U, we specialize in crafting tailored digital solutions
            that drive business growth. From stunning web designs to robust
            development and innovative marketing strategies, our team is
            committed to bringing your vision to life
          </p>
        </div>
        <div className="footer__icon">
          <ul>
            <li>
              <Link href="https://www.facebook.com">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="https://x.com">
                <i className="icofont-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.skype.com">
                <i className="icofont-skype"></i>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com">
                <i className="icofont-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoFooter;
