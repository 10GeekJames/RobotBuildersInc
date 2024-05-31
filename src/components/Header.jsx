import { useState } from "react";

const MenuOptions = () => {
  const handleMenuItemClick = (e) => {
    e.preventDefault();
    console.log(e.target.parentElement.parentElement.parentElement);
    e.target.parentElement.parentElement.parentElement.removeAttribute("open");
    document.activeElement.blur();
    document.querySelectorAll("details").forEach((detail) => {
      if (detail !== e.target.parentElement) {
        detail.removeAttribute("open");
      }
    });
  };

  const handleNewMenuClick = (e) => {
    // e.preventDefault();
    console.log(document.activeElement);
    document.querySelectorAll("details").forEach((detail) => {
      if (detail !== e.target.parentElement) {
        detail.removeAttribute("open");
      }
    });
  };

  return (
    <>
      <li>
        <a onClick={handleMenuItemClick}>Home</a>
      </li>
      <li>
        <details>
          <summary onClick={handleNewMenuClick}>Services</summary>
          <ul className="p-2">
            <li>
              <a onClick={handleMenuItemClick}>Submenu 1</a>
            </li>
            <li>
              <a onClick={handleMenuItemClick}>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary onClick={handleNewMenuClick}>Portfolio</summary>
          <ul className="p-2">
            <li>
              <a onClick={handleMenuItemClick}>Submenu 1</a>
            </li>
            <li>
              <a onClick={handleMenuItemClick}>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a onClick={handleMenuItemClick}>About Us</a>
      </li>
      <li>
        <a onClick={handleMenuItemClick}>Contact</a>
      </li>
    </>
  );
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleMobileMenuClick = (e) => {
    // e.preventDefault();
    console.log(e.target.tagName);
    if (e.target.tagName !== "SUMMARY") {
      if (openDropdown) {
        document.activeElement.blur();
      }
      setOpenDropdown(!openDropdown);
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl ">RobotBuildersInc</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <MenuOptions />
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
      <div className="dropdown" onClick={handleMobileMenuClick}>
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 -translate-x-3/4 lg:-translate-x-full"
        >
          <MenuOptions />
        </ul>
      </div>
    </div>
  );
};

export default Header;
