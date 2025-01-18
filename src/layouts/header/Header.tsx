import { Link } from "react-router-dom";
import "./Header.css";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Header = () => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <header className="bg-white">
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container>
          <Link className="navbar-brand" to="/">
            <span className="badge fw-bolder bg-gradient-primary-to-secondary">{user ? user.about.title : "Resume"}</span>
          </Link>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                {user?.about?.title || "Resume"}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-0 pe-lg-3 ms-auto mb-2 mb-lg-0 small">
                <li className="nav-item text-center">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link className="nav-link" to="/resume">
                    Resume
                  </Link>
                </li>
                <li className="nav-item text-center">
                  <Link className="nav-link" to="/project">
                    Projects
                  </Link>
                </li>
              </ul>
              <div className="d-flex justify-content-center">
                <Link to="/contact" className="btn btn-primary">
                  Contact
                </Link>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
