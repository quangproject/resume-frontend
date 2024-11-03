import { Link } from "react-router-dom";
import "./Header.css";
import { ErrorResponse, User } from "../../type";
import { useEffect, useState } from "react";
import UserApi from "../../apis/UserApi";
import handleError from "../../services/HandleError";

const Header = () => {
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await UserApi.getById(import.meta.env.VITE_USER_ID);

        setUser(user.data);
      } catch (error) {
        console.log("🚀 ~ fetchData ~ error:", error);
        handleError.showError(error as ErrorResponse);
      }
    };

    fetchData();
  }, []);

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container px-5">
        <Link className="navbar-brand" to="/">
          <span className="fw-bolder text-primary">{user?.firstName} {user?.lastName}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
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
            <li className="nav-item text-center">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
