import "./Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return (
    <nav className="navbar">
      <div
        className="navbar-brand"
        onClick={() => navigate("/")}
        style={{ cursor: 'pointer' }}
      >
        StayEasy
      </div>
      <ul className="navbar-links">
        <li>Search for</li>
        <li>View search</li>
        <li>Explore</li>
      </ul>
      <div className="navbar-actions">
        <button className="search-btn" onClick={handleSearchClick}>
          Search
        </button>
        <button className="view-btn">View</button>
      </div>
    </nav>
  );
}
