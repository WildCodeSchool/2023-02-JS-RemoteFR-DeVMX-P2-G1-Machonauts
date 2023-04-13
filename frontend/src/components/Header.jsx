import logo from "../assets/logo-spacemx1.svg";

function Header() {
  return (
    <header>
      <div className="header-container">
        <a href="/pages/Home">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </header>
  );
}
export default Header;
