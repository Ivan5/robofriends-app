import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow">
      <h1>RoboFriends</h1>
      <img src={`https://robohash.org/${id}?200x200`} alt="" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
