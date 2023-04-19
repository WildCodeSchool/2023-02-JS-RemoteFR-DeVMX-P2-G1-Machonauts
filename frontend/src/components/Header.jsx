import logo from "../assets/logo-spacemx1.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="../pages/Home">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
}
export default Header;
