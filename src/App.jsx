import "./App.css";
import Hero from "./components/Hero";
import Price from "./components/Price";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="main-content">
        <article className="price-card">
            <Hero />
            <Price />
            <About />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
