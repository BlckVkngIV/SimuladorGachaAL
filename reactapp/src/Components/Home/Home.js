import React from 'react';
import { useState, useEffect } from 'react';
import Ship from '../Character/Ship';

function Counter(props) {
    const [ships, setShips] = useState([]);
    const [gachaCurrency, setGachaCurrency] = useState(0);
    const [{shipRoll}, setshipRoll] = useState({shipRoll: []});

    var random = Math.floor(Math.random() * ships.length);

    const AddItem = () => {
        shipRoll.push(<Ship 
            key={random}
            name={ships[random].name}
            shipClass={ships[random].type}
            nation={ships[random].nation}
            image={ships[random].image}
            wiki={ships[random].wikiUrl}
            description={ships[random].description}
            />);
        setshipRoll({shipRoll: shipRoll});
    }

    useEffect(() => {
        async function fetchData() {
            const data = await fetch("https://my-json-server.typicode.com/BlckVkngIV/AzurLaneAPI/Ships");
            const ships = await data.json();
            setShips(ships);
        }
        fetchData();
    }, [ships.length]);


    return (
        <div>
            <div>
                <h2>Currency: {gachaCurrency}</h2>
                <button onClick={() => setGachaCurrency(gachaCurrency + 100)}>Add Currency</button>
            </div>
            <div>
                <h2>Gacha</h2>
                <button onClick={() => {
                    setGachaCurrency(gachaCurrency - 1000);
                    console.log(ships[random]);
                    {AddItem()}
                }
                }>Gacha</button>
                Roll: {shipRoll}
                <div className="row">
                    {shipRoll.map((ship) =>(
                        <Ship
                            key={ship.id}
                            name={ship.name}
                            shipClass={ship.type}
                            nation={ship.nation}
                            image={ship.image}
                            wiki={ship.wikiUrl}
                            description={ship.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <Counter />
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </div>
    );
}

export default Home;