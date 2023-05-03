import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="../a-propos" className="animate-text">
        A propos
      </Link>
      <Link to="../contact" className="animate-text">
        Contact
      </Link>
    </footer>
  );
}

export default Footer;
