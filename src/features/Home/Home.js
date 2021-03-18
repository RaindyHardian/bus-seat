import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__title_container">
        <div className="home__title">Home Page</div>
      </div>
      <div className="home__description">
        <p>
          This is a bus seat web application playground for my{" "}
          <Link to="#" className="home__regular_link">
            bus-ticketing-system
          </Link>{" "}
          app that i've created before.
        </p>
        <p className="home__bold">
          Here's the link for each of features in this playground:
        </p>
      </div>
      <ul className="home__route">
        <Link to="/seat-builder" className="home__link">
          <li>/seat-builder</li>
        </Link>
        <Link to="/seat-picker" className="home__link">
          <li>/seat-picker</li>
        </Link>
      </ul>
    </div>
  );
};

export default Home;
