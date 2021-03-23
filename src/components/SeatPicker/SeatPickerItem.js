import React from "react";
import "./seatpickeritem.css";

const SeatPickerItem = ({
  seatId,
  seatKey,
  disabled,
  ticket_id,
  selected,
  handleClick,
}) => {
  const click = () => {
    handleClick(seatId, seatKey);
  };

  if (disabled) {
    return <div className="seatpickeritem__disabled"></div>;
  }

  if (ticket_id) {
    return <div className="seatpickeritem__booked">{seatKey + 1}</div>;
  }

  if (selected) {
    return (
      <div className="seatpickeritem__selected" onClick={click}>
        {seatKey + 1}
      </div>
    );
  }

  return (
    <div className="seatpickeritem" onClick={click}>
      {seatKey + 1}
    </div>
  );
};

export default SeatPickerItem;
