import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TODO</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-icon">Add</div>
      <div className="cart-icon">User</div>
    </nav>
  );
};

export default Navbar;
