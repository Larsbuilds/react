// You can work here or download the template
// Your components go here
import Header from "../components/header";
import Hero from "../components/hero";
import Service from "../components/service";
import About from "../components/about";
import Footer from "../components/footer";
import "./App.css";

const App = () => {
  return (
    <div className="app-container fade-in">
      <Header className="header" />
      <main>
        <div id="home">
          <Hero className="hero" />
        </div>
        <div id="services">
          <Service className="service" />
        </div>
        <div id="about">
          <About className="about" />
        </div>
      </main>
      <div id="contact">
        <Footer className="footer" />
      </div>
    </div>
  );
};

export default App;
