import { Trash } from "lucide-react";

const SelectedPlayer = ({ selectedPlayer }) => {
  return (
    <div className=" flex my-6 justify-between items-center w-[92%] md:w-[80%] mx-auto border border-base-300 p-3 md:p-6 rounded-2xl">
      <div className="flex justify-start items-center gap-3.5">
        <img className="h-12 w-12 md:h-20 md:w-25 rounded-2xl" src={selectedPlayer.image} />
        <div>
          <h2 className="font-bold text-sm md:text-xl">{selectedPlayer.name}</h2>
          <p className="md:text-lg">{selectedPlayer.role}</p>
        </div>
      </div>
      <button className="btn btn-circle">
        <Trash color="red" />
      </button>
    </div>
  );
};

export default SelectedPlayer;
