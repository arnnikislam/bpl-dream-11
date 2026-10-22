import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header className="container mx-auto">
        <Navbar></Navbar>
        <Hero></Hero>
      </header>
    </>
  );
}

export default App;
