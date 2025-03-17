import Nav from "./nav";

const Header = ({ className }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={className}>
      <div className="header-content">
        <h1 
          onClick={scrollToTop} 
          className="logo-text"
          title="Click me! I promise I'll take you home... eventually 🏠"
        >
          Your Logo
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
