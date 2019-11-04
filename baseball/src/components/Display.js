import React, { useState } from 'react'
import Dashboard from "./Dashboard";
export default function Display() {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    return (
        <div>
            <h2 data-testid="present">{`Balls: ${balls}`}</h2>
            <h2 data-testid="present">{`Strikes: ${strikes}`}</h2>
            <Dashboard balls={balls} setBalls={setBalls} strikes={strikes} setStrikes={setStrikes}></Dashboard>
        </div>
    )
}
