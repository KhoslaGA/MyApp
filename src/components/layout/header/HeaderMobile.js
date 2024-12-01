import Image from "next/image";
import logoImage1 from "@/assets/img/logo/Logo_1.png";
import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { useHeaderContex } from "@/providers/HeaderContex";

const HeaderMobile = () => {
  const { style } = useHeaderContex();
  return (
    <div className="mob_menu_wrapper container-fluid">
      <div className="d-flex justify-content-between align-items-center">
        <div className="offcanvas__header--menu__open">
          <Link
            className="offcanvas__header--menu__open--btn"
            href="#"
            data-offcanvas
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon offcanvas__header--menu__open--svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M80 160h352M80 256h352M80 352h352"
              />
            </svg>
            <span className="visually-hidden">Offcanvas Menu Open</span>
          </Link>
        </div>
        <div className="mobile__log">
          <div className="mobile__log--title">
            {/* Uncomment and modify as needed
            <Link className="mobile__log--link" href="/home-17">
              <Image
                placeholder="blur"
                className="mobile__log--img"
                src={logoImage1}
                alt="logo-img"
                href="/home-17"
              />
            </Link> */}
          </div>
        </div>

        <div className="headerarea__component mobile__component__right">
          <div className="headerarea__right">
            <div className="headerarea__button">
              <ButtonPrimary
                text="QUOTE"
                path="#"
                button={!style || style === 3 ? "" : "white"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
