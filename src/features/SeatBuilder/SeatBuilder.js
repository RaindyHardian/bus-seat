import React, { useState } from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import "./seatbuilder.css";
import SeatBuilderItem from "../../components/SeatBuilder/SeatBuilderItem";

const SeatBuilder = () => {
  const [col, setCol] = useState(3);
  const [row, setRow] = useState(4);
  const [disabledSeat, setDisabledSeat] = useState([]);
  const item = row * col;

  const grid = {
    gridTemplateColumns: `repeat(${col}, 50px)`,
  };

  const changeCol = (value) => {
    setCol(value);
    setDisabledSeat([]);
  };

  const changeRow = (value) => {
    setRow(value);
    setDisabledSeat([]);
  };

  const clickSeat = (seatKey) => {
    if (disabledSeat.includes(seatKey)) {
      setDisabledSeat((prev) => {
        return [...prev.filter((element) => element !== seatKey)];
      });
    } else {
      setDisabledSeat((prev) => {
        return [...prev, seatKey];
      });
    }
  };

  return (
    <div className="seatbuilder">
      <div className="seatbuilder__title_continaer">
        <h1 className="seatbuilder__title">Seat Builder</h1>
      </div>
      <div className="seatbuilder__description">
        <p>
          Change the <b>column</b> and <b>row</b> number below to configure the
          bus seat setup.
        </p>
        <p>
          Click the <b>seat tile</b> to <b>activate or deactivate</b> a seat for the bus seat
          layout.
        </p>
      </div>
      <div className="seatbuilder__content">
        <form className="seatbuilder__form">
          <label>Column</label>
          <NumberInput defaultValue={col} min={0} onChange={changeCol}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <label>Row</label>
          <NumberInput defaultValue={row} min={0} onChange={changeRow}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </form>

        <div className="seatbuilder__grid_container" style={grid}>
          {Array.apply(null, Array(item)).map((e, i) => (
            <SeatBuilderItem
              key={i}
              seatKey={i}
              clickSeat={clickSeat}
              disabled={disabledSeat.includes(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeatBuilder;
