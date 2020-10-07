import React, { useState } from "react";

const getInitialState = () => {
  console.log(`Initial State retrieved`);
  // 4
  return { money: 0, lemonSlices: 10 };
};

const LemonadeStand1 = () => {
  // 1
  const [state, setState] = useState(getInitialState());

  const lemonadeSold = (withLemonSlice) => {
    receivePayment(withLemonSlice);
    updateInventory(withLemonSlice);
  };

  const receivePayment = (withLemonSlice) => {
    let price = 1;
    if (withLemonSlice) {
      price += 1;
    }
    // 3
    setState({ ...state, money: state.money + price });
  };

  const updateInventory = (withLemonSlice) => {
    if (withLemonSlice) {
      // 3
      setState({ ...state, lemonSlices: state.lemonSlices - 1 });
    }
  };

  const { money, lemonSlices } = state;

  // 2
  console.log("Rendering...");
  return (
    <div>
      <h1>Simon's Super Lemonade Stand</h1>
      <h2>Menu</h2>
      <h3>Lemonade - 1$</h3>
      {lemonSlices > 0 && <h4>Fresh Lemon slice - Add 1$</h4>}
      <p>My Money: {money}$</p>
      <button onClick={() => lemonadeSold(false)}>Cheap Lemonade sold</button>
      <br />
      {lemonSlices > 0 && (
        <button onClick={() => lemonadeSold(true)}>
          Lemonade with Lemon Slice sold! ({lemonSlices} remaining!)
        </button>
      )}
    </div>
  );
};

export default LemonadeStand1;
