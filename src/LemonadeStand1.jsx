import React, { useState } from 'react'

const LemonadeStand1 = () => {
    const [money, setMoney] = useState(0);

    const lemonadeSold = (withLemonSlice) => {
        // SOMETHING IS WRONG HERE
        setMoney(money + 1)

        if(withLemonSlice) {
            // SOMETHING IS WRONG HERE
            setMoney(money + 1)
        }
    }

    return (
        <div>
            <h1>Simon's Super Lemonade Stand</h1>
            <h2>Menu</h2>
            <h3>Lemonade - 1$</h3>
            <h4>Fresh Lemon slice - Add 1$</h4>
            <p>My Money: {money}$</p>
            <button onClick={() => lemonadeSold(false)}>Lemonade sold!</button>
            <br/>
            <button onClick={() => lemonadeSold(true)}>Lemonade with lemon slice sold!</button>
        </div>
    )
}

export default LemonadeStand1