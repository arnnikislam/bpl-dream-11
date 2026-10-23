import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import AvailablePlayers from "./components/Players/AvailablePlayers/AvailablePlayers";
import axios from "axios";
import { ToastContainer } from "react-toastify";

const playersDataRes = await axios.get("/playersData.json");
function App() {
  const [coin, setCoin] = useState(9999);
  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Hero></Hero>

      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <AvailablePlayers
          playersDataRes={playersDataRes}
          coin={coin}
          setCoin={setCoin}
        ></AvailablePlayers>
      </Suspense>

      {/* react toastify */}
      <ToastContainer />
    </>
  );
}

export default App;
