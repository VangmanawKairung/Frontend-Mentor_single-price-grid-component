import "./App.css";
import Hero from "./components/Hero";
import Price from "./components/Price";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-wrapper">
      <main className="page-wrapper__main">
        <article className="price-card">
          <Hero />
          <Price />
          <About />
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default App;
