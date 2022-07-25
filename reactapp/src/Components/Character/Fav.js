import React from 'react';
import { useState, useEffect } from 'react';


function Fav(props) {

    const [ships, setShips] = useState([]);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        //Get ships from local storage
        const ships = JSON.parse(localStorage.getItem('ships'));
        setShips(ships);
        //Get favorites from local storage if it exists
        const favorites = JSON.parse(localStorage.getItem('favorites'));
        if (favorites === null) {
            setFavorites([]);
        }
        if (favorites !== null) {
            setFavorites(favorites);
        }
    }
        , [ships.length]);

    //Add ship to local storage on 'favorites'
    function addFav(ship) {
        setFavorites([...favorites, ship]);
        localStorage.setItem('favorites', JSON.stringify([...favorites, ship]));
        console.log(favorites);
    }

    return (
        <div>
            <button onClick={
                () => {
                    addFav(props.ship);
                }
            }>Add to Favorites</button>
        </div>
    );
}

export default Fav;