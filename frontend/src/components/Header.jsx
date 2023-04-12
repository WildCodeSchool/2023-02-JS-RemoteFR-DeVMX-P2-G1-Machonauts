import logo from "../assets/logo-spacemx1.svg";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
}
export default Header;
