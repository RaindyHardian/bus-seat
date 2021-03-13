import React from "react";
import "./seatbuilderitem.css";

const SeatBuilderItem = ({ disabled, seatKey, clickSeat }) => {
  const click = () => {
    clickSeat(seatKey);
  };

  if (disabled) {
    return <div className="seatbuilderitem__disabled" onClick={click}></div>;
  }
  return (
    <div className="seatbuilderitem" onClick={click}>
      {seatKey + 1}
    </div>
  );
};

export default SeatBuilderItem;
