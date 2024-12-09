import React from "react";

const RideCard = ({ from, to, price, time, image }) => {
  return (
    <div className="ride-card">
      <img src={image || ""} alt="Ride" />
      <h3>{from} to {to}</h3>
      <p>Price: {price}</p>
      <p>Time: {time}</p>
    </div>
  );
};

export default RideCard;
