import { Trash } from "lucide-react";

const SelectedPlayer = ({ selectedPlayer }) => {
  return (
    <div className=" flex my-6 justify-between items-center w-[80%] mx-auto border border-base-300 p-6 rounded-2xl">
      <div className="flex justify-start items-center gap-3.5">
        <img className="h-20 w-25 rounded-2xl" src={selectedPlayer.image} />
        <div>
          <h2 className="font-bold text-xl">{selectedPlayer.name}</h2>
          <p className="text-lg">{selectedPlayer.role}</p>
        </div>
      </div>
      <button className="btn btn-circle">
        <Trash color="red" />
      </button>
    </div>
  );
};

export default SelectedPlayer;
