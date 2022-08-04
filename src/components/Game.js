import React, { useState } from "react";
import PileModal from "./PileModal";
import "./Game.css";

const DESCRIPTIONS = {
  property:
    "Place down to be used as a property, collecting rent, or making payments",
  money:
    "Place down to make payments or have money readily available for payments",
  rent: "Place down to make other players pay you based on properties listed on the card",
  action: "Place down to perform an action listed on the card",
};

const PROPERTIES = [
  {
    name: "Brown Property",
    type: "Property",
    image: "../Cards/Rent/prop_brown.png",
    value: 1,
    desc: DESCRIPTIONS.property,
    color1: "brown",
    color2: null,
    current: 1,
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "Blue Property",
    type: "Property",
    image: "../Cards/Rent/prop_blue.png",
    value: 4,
    desc: DESCRIPTIONS.property,
    color1: "blue",
    color2: null,
    current: 1,
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "Green Property",
    type: "Property",
    image: "../Cards/Rent/prop_green.png",
    value: 4,
    desc: DESCRIPTIONS.property,
    color1: "green",
    color2: null,
    current: 1,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "Light Blue Property",
    type: "Property",
    image: "../Cards/Rent/prop_lblue.png",
    value: 1,
    desc: DESCRIPTIONS.property,
    color1: "light blue",
    color2: null,
    current: 1,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "Orange Property",
    type: "Property",
    image: "../Cards/Rent/prop_orange.png",
    value: 2,
    desc: DESCRIPTIONS.property,
    color1: "orange",
    color2: null,
    current: 1,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "Pink Property",
    type: "Property",
    image: "../Cards/Rent/prop_pink.png",
    value: 2,
    desc: DESCRIPTIONS.property,
    color1: "pink",
    color2: null,
    current: 1,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "Black Property",
    type: "Property",
    image: "../Cards/Rent/prop_black.png",
    value: 2,
    desc: DESCRIPTIONS.property,
    color1: "black",
    color2: null,
    current: 1,
    duplicate: 4,
    max_duplicate: 4,
  },
  {
    name: "Red Property",
    type: "Property",
    image: "../Cards/Rent/prop_red.png",
    value: 3,
    desc: DESCRIPTIONS.property,
    color1: "red",
    color2: null,
    current: 1,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "Light Green Property",
    type: "Property",
    image: "../Cards/Rent/prop_lgreen.png",
    value: 2,
    desc: DESCRIPTIONS.property,
    color1: "light green",
    color2: null,
    current: 1,
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "Yellow Property",
    type: "Property",
    image: "../Cards/Rent/prop_yellow.png",
    value: 3,
    desc: DESCRIPTIONS.property,
    color1: "yellow",
    color2: null,
    current: 1,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "Blue/Green Property",
    type: "Property",
    image: "../Cards/Rent/prop_blue_green.png",
    value: 4,
    desc: DESCRIPTIONS.property,
    color1: "blue",
    color2: "green",
    current: 1,
    duplicate: 1,
    max_duplicate: 1,
  },
  {
    name: "Light Blue/Brown Property",
    type: "Property",
    image: "../Cards/Rent/prop_lblue_brown.png",
    value: 1,
    desc: DESCRIPTIONS.property,
    color1: "light blue",
    color2: "brown",
    current: 1,
    duplicate: 1,
    max_duplicate: 1,
  },
  {
    name: "Wild Card Property",
    type: "Property",
    image: "../Cards/Rent/prop_wild.png",
    value: 0,
    desc: DESCRIPTIONS.property,
    color1: null,
    color2: null,
    current: 1,
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "Orange/Pink Property",
    type: "Property",
    image: "../Cards/Rent/prop_orange_pink.png",
    value: 2,
    desc: DESCRIPTIONS.property,
    color1: "orange",
    color2: "pink",
    current: 1,
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "Green/Black Property",
    type: "Property",
    image: "../Cards/Rent/prop_green_black.png",
    value: 4,
    desc: DESCRIPTIONS.property,
    color1: "green",
    color2: "black",
    current: 1,
    duplicate: 1,
    max_duplicate: 1,
  },
  {
    name: "Light Blue/Black Property",
    type: "Property",
    image: "../Cards/Rent/prop_lblue_black.png",
    value: 4,
    desc: DESCRIPTIONS.property,
    color1: "light blue",
    color2: "black",
    current: 1,
    duplicate: 1,
    max_duplicate: 1,
  },
  {
    name: "Light Green/Black Property",
    type: "Property",
    image: "../Cards/Rent/prop_lgreen_black.png",
    value: 2,
    desc: DESCRIPTIONS.property,
    color1: "light green",
    color2: "black",
    current: 1,
    duplicate: 1,
    max_duplicate: 1,
  },
  {
    name: "Yellow/Red Property",
    type: "Property",
    image: "../Cards/Rent/prop_yellow_red.png",
    value: 3,
    desc: DESCRIPTIONS.property,
    color1: "yellow",
    color2: "red",
    current: 1,
    duplicate: 2,
    max_duplicate: 2,
  },
];

const MONEY = [
  {
    name: "1 Zenny",
    type: "Money",
    image: "../Cards/Rent/money_1.png",
    value: 1,
    desc: DESCRIPTIONS.money,
    duplicate: 6,
    max_duplicate: 6,
  },
  {
    name: "2 Zenny",
    type: "Money",
    image: "../Cards/Rent/money_2.png",
    value: 2,
    desc: DESCRIPTIONS.money,
    duplicate: 5,
    max_duplicate: 5,
  },
  {
    name: "3 Zenny",
    type: "Money",
    image: "../Cards/Rent/money_3.png",
    value: 3,
    desc: DESCRIPTIONS.money,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "4 Zenny",
    type: "Money",
    image: "../Cards/Rent/money_4.png",
    value: 4,
    desc: DESCRIPTIONS.money,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "5 Zenny",
    type: "Money",
    image: "../Cards/Rent/money_5.png",
    value: 5,
    desc: DESCRIPTIONS.money,
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "10 Zenny",
    type: "Money",
    image: "../Cards/Rent/money_10.png",
    value: 10,
    desc: DESCRIPTIONS.money,
    duplicate: 1,
    max_duplicate: 1,
  },
];

const RENT = [
  {
    name: "Wild Rent",
    type: "Rent",
    image: "../Cards/Rent/rent_wild.png",
    value: 3,
    desc: DESCRIPTIONS.rent,
    colors: [
      "brown",
      "light blue",
      "pink",
      "orange",
      "red",
      "yellow",
      "green",
      "blue",
      "black",
      "light green",
    ],
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "Green/Blue Rent",
    type: "Rent",
    image: "../Cards/Rent/rent_blue_green.png",
    value: 1,
    desc: DESCRIPTIONS.rent,
    colors: ["green", "blue"],
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "Brown/Light Blue Rent",
    type: "Rent",
    image: "../Cards/Rent/rent_brown_lblue.png",
    value: 1,
    desc: DESCRIPTIONS.rent,
    colors: ["brown", "light blue"],
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "Pink/Orange Rent",
    type: "Rent",
    image: "../Cards/Rent/rent_pink_orange.png",
    value: 1,
    desc: DESCRIPTIONS.rent,
    colors: ["pink", "orange"],
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "Black/Light Green Rent",
    type: "Rent",
    image: "../Cards/Rent/rent_black_lgreen.png",
    value: 1,
    desc: DESCRIPTIONS.rent,
    colors: ["black", "light green"],
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "Red/Yellow Rent",
    type: "Rent",
    image: "../Cards/Rent/rent_red_yellow.png",
    value: 1,
    desc: DESCRIPTIONS.rent,
    colors: ["red", "yellow"],
    duplicate: 2,
    max_duplicate: 2,
  },
];

const ACTIONS = [
  {
    name: "Deal Breaker",
    type: "Action",
    image: "../Cards/Action/act_deal_breaker.png",
    value: 5,
    desc: DESCRIPTIONS.action,
    action_id: 1,
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "Debt Collector",
    type: "Action",
    image: "../Cards/Action/act_debt_collector.png",
    value: 3,
    desc: DESCRIPTIONS.action,
    action_id: 2,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "Double Rent",
    type: "Action",
    image: "../Cards/Action/act_double_rent.png",
    value: 1,
    desc: DESCRIPTIONS.action,
    action_id: 3,
    duplicate: 2,
    max_duplicate: 2,
  },
  {
    name: "Forced Deal",
    type: "Action",
    image: "../Cards/Action/act_forced_deal.png",
    value: 3,
    desc: DESCRIPTIONS.action,
    action_id: 4,
    duplicate: 4,
    max_duplicate: 4,
  },
  {
    name: "Hotel",
    type: "Action",
    image: "../Cards/Action/act_hotel.png",
    value: 4,
    desc: DESCRIPTIONS.action,
    action_id: 5,
    duplicate: 3,
    max_duplicate: 3,
  },

  {
    name: "House",
    type: "Action",
    image: "../Cards/Action/act_house.png",
    value: 3,
    desc: DESCRIPTIONS.action,
    action_id: 6,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "It's My Birthday",
    type: "Action",
    image: "../Cards/Action/act_its_my_birthday.png",
    value: 2,
    desc: DESCRIPTIONS.action,
    action_id: 7,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "Just Say No!",
    type: "Action",
    image: "../Cards/Action/act_just_say_no.png",
    value: 4,
    desc: DESCRIPTIONS.action,
    action_id: 8,
    duplicate: 3,
    max_duplicate: 3,
  },
  {
    name: "Pass Go",
    type: "Action",
    image: "../Cards/Action/act_pass_go.png",
    value: 1,
    desc: DESCRIPTIONS.action,
    action_id: 9,
    duplicate: 10,
    max_duplicate: 10,
  },
  {
    name: "Sly Deal",
    type: "Action",
    image: "../Cards/Action/act_sly_deal.png",
    value: 3,
    desc: DESCRIPTIONS.action,
    action_id: 10,
    duplicate: 3,
    max_duplicate: 3,
  },
];

export default function Game() {
  const [lobby, setLobby] = useState("4E23SD");
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState(null);
  const [deck, setDeck] = useState(
    JSON.parse(JSON.stringify(PROPERTIES.concat(MONEY, RENT, ACTIONS)))
  );
  const [totalCards, setTotalCards] = useState(numberOfCards());
  const [pickedCard, setPickedCard] = useState(null);
  const [players, setPlayers] = useState([]);
  const [pileModal, setPileModal] = useState(false);
  const [playerPile, setPlayerPile] = useState(1);

  function numberOfCards() {
    const total = deck.reduce((count, card) => {
      return count + card.duplicate;
    }, 0);
    return total;
  }

  function pickCard() {
    if (numberOfCards() === 0) {
      console.log("Ran out of cards");
    } else {
      // Pick a random card
      let chosen = Math.floor(Math.random() * deck.length);

      // Find a new card that has not ran out yet
      while (
        chosen > deck.length ||
        chosen < 0 ||
        deck[chosen] === undefined ||
        deck[chosen].duplicate === 0
      ) {
        chosen = Math.floor(Math.random() * deck.length);
      }

      // // Take out the card from the deck
      --deck[chosen].duplicate;

      // // Copy information of card
      let selected_card = JSON.parse(JSON.stringify(deck[chosen]));

      // // Hand one of this card out
      selected_card.duplicate = 1;
      setPickedCard(selected_card);
      console.log(numberOfCards());
    }
  }

  function returnCard(card_name, card_type) {
    let card = deck.find((card) => card.name == card_name);
    let type = null;

    switch (card_type) {
      case "Property":
        type = PROPERTIES;
        break;
      case "Money":
        type = MONEY;
        break;
      case "Rent":
        type = RENT;
        break;
      case "Action":
        type = ACTIONS;
        break;
    }

    if (
      card.duplicate < type.find((card) => card.name == card_name).duplicate
    ) {
      ++card.duplicate;
      return "Returned card to deck";
    } else {
      return "Error, there is more of this card than expected";
    }
  }

  return (
    <div className="container">
      {pileModal && <PileModal isOpen={setPileModal} player={playerPile} />}
      <div className="menu">
        <div className="quitCon">
          <p className="quitText">QUIT</p>
        </div>
        <p className="menuText">CURRENT LOBBY: {lobby}</p>
        <p className="menuText">PLAYER COUNT: {players.length}</p>
      </div>

      <div className="opponents">
        <div className="opponent">
          <p className="opponentName">PLAYER 2</p>
          <div className="opponentInventory">
            <div
              className="opponentPile"
              onClick={() => {
                setPileModal(true);
                setPlayerPile(2);
              }}
            >
              <p>PILE</p>
              <div className="opponentPileCards">
                <img
                  className="card opponentCardsImage"
                  src={require("../assets/Cards/backside.png")}
                />
                <img
                  className="card opponentCardsImage"
                  src={require("../assets/Cards/backside.png")}
                />
                <img
                  className="card opponentCardsImage"
                  src={require("../assets/Cards/backside.png")}
                />
                <img
                  className="card opponentCardsImage"
                  src={require("../assets/Cards/backside.png")}
                />
                <img
                  className="card opponentCardsImage"
                  src={require("../assets/Cards/backside.png")}
                />
                <img
                  className="card opponentCardsImage"
                  src={require("../assets/Cards/backside.png")}
                />
              </div>
            </div>
            <div className="opponentCards">
              <p className="opponentCardsCount">7</p>
              <img
                className="card opponentCardsImage"
                src={require("../assets/Cards/backside.png")}
              />
            </div>
          </div>
        </div>
        <div className="opponent">
          <p className="opponentName">PLAYER 3</p>
          <div className="opponentInventory">
            <div
              className="opponentPile"
              onClick={() => {
                setPileModal(true);
                setPlayerPile(3);
              }}
            >
              <p>PILE</p>
              <div className="opponentPileCards">
                <img
                  className="card opponentCardsImage"
                  src={require("../assets/Cards/backside.png")}
                />
                <img
                  className="card opponentCardsImage"
                  src={require("../assets/Cards/backside.png")}
                />
                <img
                  className="card opponentCardsImage"
                  src={require("../assets/Cards/backside.png")}
                />
                <img
                  className="card opponentCardsImage"
                  src={require("../assets/Cards/backside.png")}
                />
              </div>
            </div>
            <div className="opponentCards">
              <p className="opponentCardsCount">7</p>
              <img
                className="card opponentCardsImage"
                src={require("../assets/Cards/backside.png")}
              />
            </div>
          </div>
        </div>
        <div className="opponent">
          <p className="opponentName">PLAYER 4</p>
          <div className="opponentInventory">
            <div
              className="opponentPile"
              onClick={() => {
                setPileModal(true);
                setPlayerPile(4);
              }}
            >
              <p>PILE</p>
              <div className="opponentPileCards">
                <img
                  className="card opponentCardsImage"
                  src={require("../assets/Cards/backside.png")}
                />
              </div>
            </div>
            <div className="opponentCards">
              <p className="opponentCardsCount">7</p>
              <img
                className="card opponentCardsImage"
                src={require("../assets/Cards/backside.png")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="cardPile">
        <img
          id="deck"
          className="card"
          onClick={() => pickCard()}
          src={require("../assets/Cards/backside.png")}
        />

        <img
          id="pile"
          className="card"
          src={require("../assets/Cards/Money/money_1.png")}
        />
      </div>

      <div className="user">
        <div className="hand">
          <img className="card" src={require("../assets/Cards/backside.png")} />
          <img
            className="card heldCard"
            src={require("../assets/Cards/backside.png")}
          />
          <img
            className="card heldCard"
            src={require("../assets/Cards/backside.png")}
          />
          <img
            className="card heldCard"
            src={require("../assets/Cards/backside.png")}
          />
          <img
            className="card heldCard"
            src={require("../assets/Cards/backside.png")}
          />
          <img
            className="card heldCard"
            src={require("../assets/Cards/backside.png")}
          />
          <img
            className="card heldCard"
            src={require("../assets/Cards/backside.png")}
          />
        </div>
        <div
          className="playerPile"
          onClick={() => {
            setPileModal(true);
            setPlayerPile(1);
          }}
        >
          <p>PROPERTIES OWNED</p>
          <div className="playerPileCards">
            <img
              className="card playerCardsImage"
              src={require("../assets/Cards/backside.png")}
            />
            <img
              className="card playerCardsImage"
              src={require("../assets/Cards/backside.png")}
            />
            <img
              className="card playerCardsImage"
              src={require("../assets/Cards/backside.png")}
            />
            <img
              className="card playerCardsImage"
              src={require("../assets/Cards/backside.png")}
            />
            <img
              className="card playerCardsImage"
              src={require("../assets/Cards/backside.png")}
            />
            <img
              className="card playerCardsImage"
              src={require("../assets/Cards/backside.png")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
