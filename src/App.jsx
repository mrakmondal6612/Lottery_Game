import "./App.css";
import { sum } from "./Helper";
import Lottery from "./Lottery";

function App() {
  let winCondition1 = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  };

  let winCondition2 = (ticket) => {
    return sum(ticket) === 15;
  };

  let winCondition3 = (ticket) => {
    return ticket[0] === ticket[ticket.length - 1];
  };

  return (
    <>
      <Lottery n={3} winCondition={winCondition1} />
    </>
  );
}

export default App;
