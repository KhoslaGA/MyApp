import NavItem from "./NavItem";

const Navbar = () => {
  // Simplified navigation items
  const navItems = [
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
    <div className="headerarea__component">
      <div className="headerarea__main__menu">
        <nav>
          <ul className="nav__list">
            {navItems.map((navItem, idx) => (
              <li key={idx} className="nav__item">
                <a href={navItem.path} className="nav__link">
                  {navItem.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
