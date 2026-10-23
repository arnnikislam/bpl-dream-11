import { Flag, User } from "lucide-react";

const AvailablePlayer = ({ playerData }) => {
  const {
    image,
    name,
    price,
    country,
    role,
    rating,
    battingStyle,
    bowlingStyle,
  } = playerData;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} className="rounded-xl h-50 w-75" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <User color="#000000" />
          {name}
        </h2>
        <div className="flex justify-between">
          <p className="flex justify-start gap-2 items-center text-lg text-[#131313]">
            <Flag color="#131313" /> <span>{country}</span>
          </p>
          <button className="btn btn-soft">{role}</button>
        </div>
        <div className="divider"></div>
        <div>
          <div className="text-lg flex justify-between ">
            <h3 className="font-bold">Rating</h3>
            <span>{rating}</span>
          </div>
          <div className="text-lg flex justify-between ">
            <h3 className="font-bold">Batting Style</h3>
            <span>{battingStyle}</span>
          </div>
          <div className="text-lg flex justify-between ">
            <h3 className="font-bold">Bowling Style</h3>
            <span>{bowlingStyle}</span>
          </div>
          <div className="text-lg flex justify-between mt-2 ">
            <h3 className="font-bold">Price: {price}$</h3>
            <button className="btn btn-outline">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
