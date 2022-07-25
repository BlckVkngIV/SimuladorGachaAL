import React from 'react';
import { useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';
import Ship from '../Character/Ship';
import './Favorites.css';

function Favorites(props) {
    //Favorite ships
    const [favorites, setFavorites] = useState([]);
    
    //Get favorite ships from local storage
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        setFavorites(favorites);
    }
    , [favorites.length]);

    return (
        <div>
            <div className="row">
                {favorites.map((ship, value) => (
                    <Ship key={value}
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

export default Favorites;