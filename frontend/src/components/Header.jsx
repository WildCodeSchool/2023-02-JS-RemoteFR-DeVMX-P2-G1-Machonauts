import { Link } from "react-router-dom";
import logo from "../assets/logo-spacemx1.svg";

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="../home">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
}
export default Header;
