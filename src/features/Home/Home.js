import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Bus-Seat Playground Web App!</h1>
      <ul>
        <li>
          <h3>
            <Link to="/seat-builder">Seat Builder</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link to="/seat-picker">Seat Picker</Link>
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Home;
