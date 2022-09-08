import React, { useState } from "react";
import "./PileModal.css";

export default function PileModal({ open, setOpen }) {
  const [card, setCard] = useState(null);

  var arr = [...Array(20)]
    .fill()
    .map((_, index) => (
      <img
        key={index}
        onClick={() => setCard("card")}
        className="pileCard"
        src={require("../assets/Cards/backside.png")}
        alt={"card in pile"}
      />
    ));
  return (
    <div className="modal">
      {card === null && open === true && (
        <div>
          <div className="modalBackground" onClick={() => setOpen(false)} />
          <div className="modalContainer">{arr}</div>
        </div>
      )}
      {card != null && (
        <div>
          <div
            className="modalBackground"
            styl={{ zIndex: 1001 }}
            onClick={() => setCard(null)}
          />
          <div className="cardContainer">
            <img
              className="cardView"
              src={require("../assets/Cards/backside.png")}
              alt={"Selected Card"}
            />
          </div>
        </div>
      )}
    </div>
  );
}
