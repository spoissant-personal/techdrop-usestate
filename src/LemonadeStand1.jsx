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
      <p>Lemonade (1$)</p>
      <p>...with Fresh Lemon slice (+1$)</p>
      <h2>Stand</h2>
      <p>My Money: {money}$</p>
      <p>Lemon Slices: {lemonSlices}</p>
      <h2>Sales</h2>
      <button onClick={() => lemonadeSold(false)}>Cheap Lemonade sold!</button>
      <br />
      {lemonSlices > 0 && (
        <button onClick={() => lemonadeSold(true)}>
          Lemonade with Lemon Slice sold!
        </button>
      )}
    </div>
  );
};

export default LemonadeStand1;
