import React, { useState } from "react";
import "./PileModal.css";

export default function PileModal({ isOpen }) {
  var arr = [...Array(20)]
    .fill()
    .map((_, index) => (
      <img
        key={index}
        className="pileCard"
        src={require("../assets/Cards/backside.png")}
      />
    ));
  return (
    <div className="modal">
      <div className="modalBackground" onClick={() => isOpen(false)} />
      <div className="modalContainer">{arr}</div>
    </div>
  );
}
