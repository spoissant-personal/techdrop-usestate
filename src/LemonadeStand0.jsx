import React, { useState } from 'react'

let initialMoney = 0;
const fetchMoney = () => {
    // console.log(`Initial money is ${initialMoney}`)
    return initialMoney += 10;
}

const LemonadeStand0 = () => {
    // THIS IS NOT IDEAL...
    const [money, setMoney] = useState(fetchMoney());

    const lemonadeSold = () => {
        // THIS IS NOT IDEAL...
        setMoney(money + 1)
    }

    console.log('Rendering')
    return (
        <div>
            <h1>Simon's Super Lemonade Stand</h1>
            <h2>Menu</h2>
            <h3>Lemonade - 1$</h3>
            {/* <p>My Money: {money}$</p> */}
            <button onClick={lemonadeSold}>Lemonade sold! +1$</button>
        </div>
    )
}

export default LemonadeStand0