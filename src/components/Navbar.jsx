import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">StayEasy</div>
      <ul className="navbar-links">
        <li>Search for</li>
        <li>View search</li>
        <li>Explore</li>
      </ul>
      <div className="navbar-actions">
        <button className="search-btn">Search</button>
        <button className="view-btn">View</button>
      </div>
    </nav>
  );
}
