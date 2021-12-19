import React from "react";
import "./Cards.scss";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h2 className="cards__titlle">Our Projects</h2>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/image-1.jpg"
              text="Open  AI is the future. Let us exlore how it is?"
              label="Sep 26, 2021"
              path="/page/project"
              alt="sience1"
            />
            <CardItem
              src="images/image-2.png"
              text="Open  AI is the future. Let us exlore how it is?"
              label="Sep 26, 2021"
              path="/page/project"
              alt="sience2"
            />
            <CardItem
              src="images/image-3.png"
              text="Open  AI is the future. Let us exlore how it is?"
              label="Sep 26, 2021"
              path="/page/project"
              alt="sience3"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/image-4.png"
              text="Open  AI is the future. Let us exlore how it is?"
              label="Sep 26, 2021"
              path="/page/project"
              alt="sience4"
            />
            <CardItem
              src="images/image-2.png"
              text="Open  AI is the future. Let us exlore how it is?"
              label="Sep 26, 2021"
              path="/page/project"
              alt="sience5"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/image-5.png"
              text="Open  AI is the future. Let us exlore how it is?"
              label="Sep 26, 2021"
              path="/page/project"
              alt="sience6"
            />
            <CardItem
              src="images/image-1.jpg"
              text="Open  AI is the future. Let us exlore how it is?"
              label="Sep 26, 2021"
              path="/page/project"
              alt="sience7"
            />
            <CardItem
              src="images/image-2.png"
              text="Open  AI is the future. Let us exlore how it is?"
              label="Sep 26, 2021"
              path="/page/project"
              alt="sience8"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
