import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "10px", background: "#222" }}>
    <Link to="/" style={{ color: "#fff", marginRight: "15px" }}>Home</Link>
    <Link to="/add" style={{ color: "#fff" }}>Add User</Link>
  </nav>
);

export default Navbar;
