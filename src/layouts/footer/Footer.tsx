import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentUrl = new URL(window.location.href);

  return (
    <footer className="bg-white py-4 mt-auto">
      <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
          <div className="col-auto">
            <div className="small m-0">Copyright &copy; {currentUrl.hostname} {currentYear}</div>
          </div>
          <div className="col-auto">
            <Link className="small" to="/">
              Home
            </Link>
            <span className="mx-1">&middot;</span>
            <Link className="small" to="/resume">
              Resume
            </Link>
            <span className="mx-1">&middot;</span>
            <Link className="small" to="/project">
              Project
            </Link>
            <span className="mx-1">&middot;</span>
            <Link className="small" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
