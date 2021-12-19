import React from "react";
import { Button } from "./Button";
import "./getstarted.scss";

function Getstarted() {
  return (
    <div className="getstarted-container">
      <video autoPlay loop muted src="./video/backgroung.mp4" />
      <div className="getstarted-inner">
        <h1 className="getstarted-title">Engineering the Future</h1>
        <p>What are you waiting for?</p>
        <div className="getstarted-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("Pastate video dont be a looser")}
          >
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Getstarted;
