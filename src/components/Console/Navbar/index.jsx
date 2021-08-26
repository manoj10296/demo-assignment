import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                onClick={() => history.push("/console")}
              >
                Home
              </a>
            </li>
          </ul>
          <i
            className="fas fa-2x fa-cog mx-2"
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/console/settings")}
          ></i>
          <i
            style={{ cursor: "pointer" }}
            onClick={() => history.push("/signin")}
            className="fas fa-2x fa-sign-out-alt"
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
