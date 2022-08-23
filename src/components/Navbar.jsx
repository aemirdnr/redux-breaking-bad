import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="d-flex bg-dark justify-content-center justify-content-md-start p-3 gap-3">
      <Link to="characters">
        <button className="navbar__button">Characters</button>
      </Link>
      <Link to="quotes">
        <button className="navbar__button">Quotes</button>
      </Link>
    </div>
  );
}

export default Navbar;
