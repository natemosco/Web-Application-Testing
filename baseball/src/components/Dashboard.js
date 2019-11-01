import React from 'react'

export default function Dashboard(props) {
    let { strikes, setStrikes, balls, setBalls } = props
    const handleStrike = (e) => {
        e.preventDefault();
        if (strikes < 2) {
            setStrikes(strikes += 1)
        } else if (strikes === 2) {
            setStrikes(0);
        }
    }
    const handleBall = (e) => {
        e.preventDefault();
        if (balls < 3) {
            setBalls(balls += 1);
        } else if (balls === 3) {
            setBalls(0);
            setStrikes(0);
        }
    }
    const handleFoul = (e) => {
        e.preventDefault();
        if (strikes === 2) {
            return null;
        } else {
            setStrikes(strikes += 1);
        }
    }
    const handleHit = (e) => {
        e.preventDefault();
        setStrikes(0);
        setBalls(0);
    }
    return (
        <div>
            <button onClick={handleStrike}>Strike</button>
            <button onClick={handleBall}>Ball</button>
            <button onClick={handleFoul}>Foul</button>
            <button onClick={handleHit}>Hit</button>
        </div>
    )
}
