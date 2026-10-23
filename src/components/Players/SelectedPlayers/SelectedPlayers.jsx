import SelectedPlayer from "./SelectedPlayer";
import warningPng from "../../../assets/warning.png";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  return (
    <div>
      {selectedPlayers.length === 0 ? (
        <div className="min-h-[40vh] flex flex-col gap-2 justify-center items-center bg-base-300 py-6">
          <img className="w-25" src={warningPng} alt="warning" />
          <h2 className="font-bold text-2xl text-center">No Data Available!</h2>
          <p className="text-lg text-center">You didn't select any player.</p>
        </div>
      ) : (
        <div>
          {selectedPlayers.map((selectedPlayer, index) => (
            <SelectedPlayer
              key={index}
              selectedPlayer={selectedPlayer}
              setSelectedPlayers={setSelectedPlayers}
              selectedPlayers={selectedPlayers}
              coin={coin}
              setCoin={setCoin}
            ></SelectedPlayer>
          ))}
          <div className="w-[80%] mx-auto my-4">
            <button className="btn bg-[#E7FE29]">Add More Player</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedPlayers;
