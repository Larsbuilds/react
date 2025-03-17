const Nav = () => {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <ul className="nav-list">
        <li><a href="#home" className="nav-link" aria-current="page">Home</a></li>
        <li><a href="#services" className="nav-link">Services</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
