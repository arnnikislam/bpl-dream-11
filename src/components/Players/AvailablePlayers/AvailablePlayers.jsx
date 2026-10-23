import { useState } from "react";
import AvailablePlayer from "./AvailablePlayer";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const AvailablePlayers = ({ playersDataRes, coin, setCoin }) => {
  const playersData = playersDataRes.data;
  const [selectedType, setSelectedType] = useState("available");
  // for selected tab data showing
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center max-w-5xl mx-auto ">
        {selectedType === "available" ? (
          <h2 className="font-bold md:text-xl">Available Players</h2>
        ) : (
          <h2 className="font-bold md:text-xl">
            Selected Player ({selectedPlayers.length}/{playersData.length})
          </h2>
        )}
        <div>
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : null} rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : null} rounded-l-none`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div
        className={`${selectedType === "selected" ? "block my-8" : "grid gap-8 grid-cols-[repeat(1,384px)] md:grid-cols-[repeat(2,384px)] lg:grid-cols-[repeat(3,384px)] my-8 justify-center"}`}
      >
        {selectedType === "available" ? (
          playersData.map((playerData) => (
            <AvailablePlayer
              key={playerData.id}
              playerData={playerData}
              coin={coin}
              setCoin={setCoin}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
            ></AvailablePlayer>
          ))
        ) : (
          <SelectedPlayers selectedPlayers={selectedPlayers}></SelectedPlayers>
        )}
      </div>
    </div>
  );
};

export default AvailablePlayers;
