import React from 'react';
import { useEffect, useState } from 'react';
import Ship from '../Character/Ship';


function Inventory(props) {
    const [shipRoll, setshipRoll] = useState([]);


    //Get shipRoll from local storage and set to local storage
    useEffect(() => {
        const shipRoll = JSON.parse(localStorage.getItem('shipRoll'));
        if (shipRoll === null) {
            setshipRoll({shipRoll: []});
        }
        if (shipRoll !== null) {
            setshipRoll(shipRoll);
        }
    }
    , [shipRoll.length]);


    return (
        <div>
            <h1>Inventory</h1>
            <div className="row">
                {shipRoll.map((ship) => (
                    <Ship key={ship.id}
                        name={ship.name}
                        shipClass={ship.type}
                        nation={ship.nation}
                        image={ship.image}
                        wiki={ship.wikiUrl}
                        rarity={ship.rarity}
                    />
                ))}
            </div>
        </div>
    );
}

export default Inventory;