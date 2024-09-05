import { useState } from "react";
import { generateTicket, sum } from "./Helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [lottery, setLottery] = useState(generateTicket(n));
  let isWinning = winCondition(lottery);
  let buyTicket = () => {
    setLottery(generateTicket(n));
  };
  return (
    <div>
      <h1>Lottery Game</h1>
      <p>[ If 3-digits are equal, then you are winner ! ]</p>
      <div className="lottery">
        <Ticket ticket={lottery} />
      </div>
      <br />
      <Button action={buyTicket} />
      <h2>{isWinning && "Congratulations, You are Won !"}</h2>
    </div>
  );
}
