import Nav from "./nav";

const Header = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={className} role="banner">
      <div className="header-content">
        <h1>
          <button 
            onClick={scrollToTop} 
            className="logo-text"
            aria-label="Return to top of page"
            title="Click me! I promise I'll take you home... eventually 🏠"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              margin: 0,
              cursor: 'pointer'
            }}
          >
            Lars Builds React
          </button>
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
