import { Link } from "react-router-dom";
import "./../style/nav.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src="sportlogo.png" alt="naslovna" className="naslovna" />
      </Link>

      <Link to="/vijesti" className="naslovna-bar">
        NOGOMET
      </Link>
      <Link to="/utakmice" className="naslovna-bar">
        UTAKMICE
      </Link>
      <Link to="/transferi" className="naslovna-bar">
        TRANSFERI
      </Link>
      <Link to="/hnl" className="naslovna-bar">
        HNL
      </Link>
    </nav>
  );
}

export default Navbar;
