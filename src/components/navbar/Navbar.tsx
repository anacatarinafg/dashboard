import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="./logo.svg" alt="logo" className="navbar__image" />
        <span>AG dashboard</span>
      </div>
      <div className="navbar__icons">
        <img src="./search.svg" alt="" className="navbar__icon" />
        <img src="./app.svg" alt="" className="navbar__icon" />
        <img src="./expand.svg" alt="" className="navbar__icon" />
        <div className="navbar__notification">
        <img src="./notifications.svg" alt="" />
        <span>1</span>
        </div>
        <div className="navbar__user">
          <img src="./me.jpg" alt="" />
          <span>Ana</span>
        </div>
        <img src="./settings.svg" alt="" className="navbar__icon" />
      </div>
    </nav>
  );
};

export default Navbar;
