import React, { useEffect, useState } from "react";
import SeatPickerItem from "../../components/SeatPicker/SeatPickerItem";
import busData from "./../../data/busData";
import seatData from "./../../data/seatData";
import "./seatpicker.css";

const SeatPicker = () => {
  const [bus, setBus] = useState({});
  const [seat, setSeat] = useState([]);
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBus(busData);
    setSeat(seatData);
    setLoading(false);
  }, []);

  const handleClick = (seatId, seatKey) => {
    // check if the seat is already selected
    if (selected.some((element) => element.seat_id === seatId)) {
      setSelected((prev) => {
        // delete array element that have the matched seat ID
        return [...prev.filter((element) => element.seat_id !== seatId)];
      });
    } else {
      setSelected((prev) => {
        return [
          ...prev,
          {
            person_name: "",
            seat_id: seatId,
            seat_key: seatKey,
          },
        ];
      });
    }
  };

  let item = bus.row * bus.col;
  let grid = {
    gridTemplateColumns: `repeat(${bus.col}, 50px)`,
  };

  return (
    <div className="seatpicker">
      <div className="seatpicker__title_container">
        <h1 className="seatpicker__title">Seat Picker</h1>
      </div>
      <div className="seatpicker__description">
        <p>This is a seat layout sample with 5 columns and 10 rows.</p>
        <p>Click the seat below to buy a ticket for the specific seat.</p>
      </div>

      {loading ? (
        <div className="seatpicker__loading">Please wait...</div>
      ) : (
        <div className="seatpicker__content">
          <div className="seatpicker__grid_container" style={grid}>
            {Array.apply(null, Array(item)).map((e, i) => (
              <SeatPickerItem
                key={i}
                seatId={seat[i].seat_id}
                seatKey={i}
                disabled={seat[i].disable === 1}
                ticket_id={seat[i].ticket_id}
                selected={selected.some(
                  (element) => element.seat_id === seat[i].seat_id
                )}
                handleClick={handleClick}
              />
            ))}
          </div>
          <div className="seatpicker__selected">
            <div className="seatpicker__selected_title">Seat Selected</div>
            <ul className="seatpicker__selected_list">
              {selected.map((item) => (
                <li
                  key={item.seat_key}
                  className="seatpicker__selected_list_item"
                >
                  {item.seat_key + 1}
                </li>
              ))}
            </ul>
            <button
              className="seatpicker__selected_order"
              disabled={selected.length === 0}
            >
              Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatPicker;
