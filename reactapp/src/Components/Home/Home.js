import React from 'react';
import { useState, useEffect } from 'react';
import Ship from '../Character/Ship';
import './Home.css';

function Counter(props) {
    //All ships
    const [ships, setShips] = useState([]);
    //Gacha Currency
    var [gachaCurrency, setGachaCurrency] = useState(0);
    //Ship Rolls
    const [{shipRoll}, setshipRoll] = useState({shipRoll: []});

    var random = Math.floor(Math.random() * ships.length);

    //Add ship to roll list and local storage
    function addShip(ship) {
        setshipRoll({shipRoll: [...shipRoll, ship]});
        localStorage.setItem('shipRoll', JSON.stringify([...shipRoll, ship]));
    }

    function refresh() {
        setShips([]);
        setGachaCurrency(0);
        setshipRoll({shipRoll: []});

        localStorage.setItem('shipRoll', JSON.stringify([]));
        localStorage.setItem('gachaCurrency', 0);
        window.location.reload();
    }

    //Add gacha currency to local storage
    function addGachaCurrency() {
        setGachaCurrency(gachaCurrency++);
        localStorage.setItem('gachaCurrency', gachaCurrency);
    }

    //Subtract gacha currency from local storage
    function subtractGachaCurrency() {
        setGachaCurrency(gachaCurrency - 10);
        localStorage.setItem('gachaCurrency', gachaCurrency);
    }


    useEffect(() => {
        //Get ships from local storage
        const ships = JSON.parse(localStorage.getItem('ships'));
        setShips(ships);
        //Get gacha currency from local storage if it exists
        const gachaCurrency = localStorage.getItem('gachaCurrency');
        if (gachaCurrency === null) {
            setGachaCurrency(0);
        }
        if (gachaCurrency !== null) {
            setGachaCurrency(gachaCurrency);
        }

        //Get shipRoll from local storage if it exists
        const shipRoll = JSON.parse(localStorage.getItem('shipRoll'));
        if (shipRoll === null) {
            setshipRoll({shipRoll: []});
        }
        //If shipRoll exists, set to local storage
        if (shipRoll !== null) {
            setshipRoll({shipRoll: shipRoll});
        }
    }
    , [ships.length]);

    return (
        <div>
            <div>
                <h2 className='title'>Currency: {gachaCurrency}</h2>
                <button className='button'
                //On click, add gacha currency
                onClick={() => addGachaCurrency()}>
                Add Currency</button>
            </div>
            <div>
                <h2 className='title'>Gacha</h2>
                <button className='button'
                onClick={() => {
                    if (gachaCurrency >= 10) {
                        addShip(ships[random]);
                        subtractGachaCurrency();
                    }
                    else {
                        alert('Not enough currency');
                    }
                }
                }>
                Roll for character</button>
            </div>
                <div className="row">
                    {shipRoll.map((ship, value) =>(
                        <Ship
                            key={value}
                            name={ship.name}
                            shipClass={ship.type}
                            nation={ship.nation}
                            image={ship.image}
                            wiki={ship.wikiUrl}
                            rarity={ship.rarity}
                        />
                    ))}
                </div>
                <div className="row">
                    <br />
                    <button className='button' onClick={() => {refresh();}}>Clear</button>
                </div>
            </div>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                    <Counter />
            </div>
        </div>
    );
}

export default Home;