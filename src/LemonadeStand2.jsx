import React, { useState, useEffect } from "react";

const LemonadeStand2 = () => {
  const [money, setMoney] = useState(0);
  const [inventory, setInventory] = useState({
    lemonSlices: { atStand: 5, backstore: 10 },
    // sugarCubes, straws, etc...
  });

  const lemonadeSold = (withLemonSlice) => {
    receivePayment(withLemonSlice);
    updateInventory(withLemonSlice);
  };

  const receivePayment = (withLemonSlice) => {
    let price = 1;
    if (withLemonSlice) {
      price += 1;
    }

    setMoney((prev) => prev + price);
  };

  const updateInventory = (withLemonSlice) => {
    if (withLemonSlice) {
      setInventory((prev) => {
        // 5
        let updated = { ...prev };
        updated.lemonSlices.atStand = prev.lemonSlices.atStand - 1;
        return updated;
      });
    }
  };

  const refillBackstore = (amount) => {
    setInventory((prev) => {
      // 5
      let updated = { ...prev };
      updated.lemonSlices.backstore = prev.lemonSlices.backstore + amount;
      return updated;
    });
  };

  useEffect(() => {
    if (
      inventory.lemonSlices.atStand === 0 &&
      inventory.lemonSlices.backstore > 0
    ) {
      setInventory((prev) => {
        let updated = { ...prev };
        const refill = Math.min(prev.lemonSlices.backstore, 5);
        updated.lemonSlices.atStand += refill;
        updated.lemonSlices.backstore -= refill;
        return updated;
      });
    }
  }, [inventory.lemonSlices]); // <-- 5

  const { atStand, backstore } = inventory.lemonSlices;

  return (
    <div>
      <h1>Simon's Super Lemonade Stand</h1>
      <h2>Menu</h2>
      <h3>Lemonade - 1$</h3>
      {atStand > 0 && <h4>Fresh Lemon slice - Add 1$</h4>}
      <h2>Front Desk</h2>
      <p>My Money: {money}$</p>
      <button onClick={() => lemonadeSold(false)}>Lemonade sold!</button>
      <br />
      {atStand > 0 && (
        <button onClick={() => lemonadeSold(true)}>
          Lemonade with lemon slice sold! ({atStand} remaining!)
        </button>
      )}
      <br />
      <h2>Backstore</h2>
      <p>Lemon Slices in the backstore: {backstore}</p>
      <button onClick={() => refillBackstore(10)}>
        Add 10 Lemon Slices in the backstore!
      </button>
    </div>
  );
};

export default LemonadeStand2;
