import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers }) => {
  return (
    <div>
      {selectedPlayers.map((selectedPlayer, index) => (
        <SelectedPlayer
          key={index}
          selectedPlayer={selectedPlayer}
        ></SelectedPlayer>
      ))}
      <div className="w-[80%] mx-auto my-4">
        <button className="btn bg-[#E7FE29]">Add More Player</button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
