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
  const [col, setCol] = useState(0);
  const [row, setRow] = useState(0);
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
      <h1>Seat Builder</h1>

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
  );
};

export default SeatBuilder;
