import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
  return (
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
  );
};

export default SelectedPlayers;
