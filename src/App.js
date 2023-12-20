import "./App.css";
import Grid from "./components/Grid/Grid";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <Grid />
      <Footer />
    </>
  );
}

export default App;