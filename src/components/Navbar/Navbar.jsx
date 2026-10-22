import NavLinks from "./NavLinks";
import logoImg from "../../assets/logo.png";
import currencyLogo from "../../assets/Currency.png";

const Navbar = () => {
  const navLinks = [
    { id: 1, label: "Home", path: "/" },
    { id: 2, label: "Fixture", path: "/fixture" },
    { id: 3, label: "Teams", path: "/teams" },
    { id: 4, label: "Schedules", path: "/schedules" },
  ];
  const link = navLinks.map((link) => (
    <NavLinks key={link.id} link={link}></NavLinks>
  ));
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <a href="/">
            <img className="h-15 w-15" src={logoImg} alt="logo" />
          </a>
        </div>
        <div className="navbar-end space-x-8">
          <ol className="md:flex hidden gap-6">{link}</ol>
          <a className="btn font-bold">
            0 Coin <img src={currencyLogo} alt="currency" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
