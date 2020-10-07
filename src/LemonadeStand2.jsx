import React, { useState } from 'react'

const LemonadeStand1 = () => {
    // THIS IS NOT IDEAL...
    const [stand, setStand] = useState({ money: 0, lemonSlices: 10 });

    const receivePayment = (withLemonSlice) => {
        // OH GOD PLEASE NO...
        setStand({
            money: stand.money + 1,
            lemonSlices: stand.lemonSlices
        })

        if(withLemonSlice) {
            // THIS IS NOT IDEAL...
            setStand(prev => {
                let updated = {...prev}
                updated.money = prev.money + 1
                return updated
            })
        }
    }

    const updateInventory = (withLemonSlice) => {
        if(withLemonSlice) {
            // THIS IS NOT IDEAL...
            setStand(prev => ({...prev, lemonSlices: prev.lemonSlices - 1}))
        }
    }

    const lemonadeSold = (withLemonSlice) => {
        receivePayment(withLemonSlice);
        updateInventory(withLemonSlice);
    }

    const { money, lemonSlices } = stand

    return (
        <div>
            <h1>Simon's Super Lemonade Stand</h1>
            <h2>Menu</h2>
            <h3>Lemonade - 1$</h3>
            {lemonSlices > 0 && <h4>Fresh Lemon slice - Add 1$</h4>}
            <p>My Money: {money}$</p>
            <button onClick={() => lemonadeSold(false)}>Lemonade sold!</button>
            <br/>
            {lemonSlices > 0 && <button onClick={() => lemonadeSold(true)}>Lemonade with lemon slice sold! ({lemonSlices} remaining!)</button>}
        </div>
    )
}

export default LemonadeStand1