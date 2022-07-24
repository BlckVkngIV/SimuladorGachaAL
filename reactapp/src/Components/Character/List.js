import React, {useEffect, useState} from 'react';
import {Input} from '@chakra-ui/react';
import Ship from './Ship';


export default function List(){

const [apiShips, setapiShips] = useState([]);
const [filteredShips, setfilteredShips] = useState([]);


useEffect(() => {
    async function fetchData() {
        const data = await fetch("https://my-json-server.typicode.com/BlckVkngIV/AzurLaneAPI/Ships");
        const ships = await data.json();
        setapiShips(ships);
        setfilteredShips(ships);
    }
    fetchData();
}, [apiShips.length]);

return(
    <div>
        <h2>Ships:</h2>
        <Input
            type="text"
            placeholder="Search..."
            onChange={(e) => {
                const search = e.target.value;
                const filtered = apiShips.filter(ship => {
                    return ship.name.toLowerCase().includes(search.toLowerCase());
                }
                );
                setfilteredShips(filtered);
            }
            }
        />
        
        <div className="row">
            {filteredShips.map((ship) =>(
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
)

}