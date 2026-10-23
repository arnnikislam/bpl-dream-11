import { Trash } from "lucide-react";
import { toast } from "react-toastify";

const SelectedPlayer = ({
  selectedPlayer,
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDeletedSelectedPlayers = (deletedSelectedPlayer) => {
    const filteredPlayers = selectedPlayers.filter(
      (selectedPlayerData) =>
        selectedPlayerData.id !== deletedSelectedPlayer.id,
    );
    const newCoin = coin + deletedSelectedPlayer.price;
    setCoin(newCoin);
    setSelectedPlayers(filteredPlayers);
    toast.warning(`${deletedSelectedPlayer.name} is deleted.`);
  };
  return (
    <div className=" flex my-6 justify-between items-center w-[92%] md:w-[80%] mx-auto border border-base-300 p-3 md:p-6 rounded-2xl">
      <div className="flex justify-start items-center gap-3.5">
        <img
          className="h-12 w-12 md:h-20 md:w-25 rounded-2xl"
          src={selectedPlayer.image}
        />
        <div>
          <h2 className="font-bold text-sm md:text-xl">
            {selectedPlayer.name}
          </h2>
          <p className="md:text-lg">{selectedPlayer.role}</p>
        </div>
      </div>
      <button
        onClick={() => handleDeletedSelectedPlayers(selectedPlayer)}
        className="btn btn-circle"
      >
        <Trash color="red" />
      </button>
    </div>
  );
};

export default SelectedPlayer;
