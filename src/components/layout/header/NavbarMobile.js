import Link from "next/link";
import ItemMobile from "./ItemMobile";
import { useHeaderContex } from "@/providers/HeaderContex";

const NavbarMobile = () => {
  // const { isOnepage, style, headerType, isCollection, home } =
  //   useHeaderContex();
  const mobileItems = [
    {
      name: "HOME",
      icon: false,
      path: "/",
      dropdown: null,
    },
    {
      name: "SERVICES",
      icon: false,
      path: "/services",
      dropdown: null,
    },
    {
      name: "ABOUT",
      icon: false,
      path: "/about",
      dropdown: null,
    },
    {
      name: "BLOG",
      icon: false,
      path: "/blogs",
      dropdown: null,
    },
    {
      name: "CONTACT",
      icon: false,
      path: "/contact",
    },
    {
      name: "OUR WORK",
      icon: false,
      path: "/projects",
    },
  ];
  return (
    <nav className="offcanvas__menu">
      <ul className="offcanvas__menu_ul">
        {mobileItems?.map((item, idx) =>
          !item?.name ? "" : <ItemMobile key={idx} item={item} />
        )}
      </ul>
      <div className="offcanvas__account--items">
        <Link
          className="offcanvas__account--items__btn d-flex align-items-center"
          href="/login"
        >
          <span className="offcanvas__account--items__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.51"
              height="19.443"
              viewBox="0 0 512 512"
            >
              <path
                d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
              />
              <path
                d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                fill="none"
                stroke="currentColor"
                strokeMiterlimit="10"
                strokeWidth="32"
              />
            </svg>
          </span>
          <span className="offcanvas__account--items__label">
            Login / Register
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarMobile;
