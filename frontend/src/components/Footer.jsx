import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="../pages/AboutUs"> About Us </Link>
      <Link to="../pages/Contact"> Contact Us </Link>
    </footer>
  );
}

export default Footer;
