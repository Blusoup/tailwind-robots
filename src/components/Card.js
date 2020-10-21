import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="bg-gradient-to-bl bg-gray-700 border-gray-800 from-yellow-400 inline-block m-2 p-2 rounded-lg rounded-md shadow-2xl to-purple-800 via-pink-500 transform scale-95 hover:scale-100 duration-200 transition-transform">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
