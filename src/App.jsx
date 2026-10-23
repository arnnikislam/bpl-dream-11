import { Suspense } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/Players/AvailablePlayers/AvailablePlayers";
import axios from "axios";

const playersDataRes = await axios.get("/playersData.json");
function App() {
  return (
    <>
      <header className="container mx-auto">
        <Navbar></Navbar>
        <Hero></Hero>
      </header>

      <main className="container mx-auto">
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <AvailablePlayers playersDataRes={playersDataRes}></AvailablePlayers>
        </Suspense>
      </main>
    </>
  );
}

export default App;
