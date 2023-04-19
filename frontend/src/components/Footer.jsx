import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="../a-propos"> A propos </Link>
      <Link to="../contact"> Contact </Link>
    </footer>
  );
}

export default Footer;
