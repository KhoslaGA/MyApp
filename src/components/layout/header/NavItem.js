import Link from "next/link";

const NavItem = ({ item }) => {
  const { name, path } = item;

  return (
    <li className="nav__item">
      <Link href={path} className="nav__link">
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
