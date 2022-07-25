import React from 'react';
import { useEffect, useState } from 'react';
import './Ship.css';


export default function Ship(props){
    const {name,nation,image, wiki, shipClass, rarity} = props;
    const [isFavorite, setIsFavorite] = useState(false);


    //Reload function
    function reload() {
        window.location.reload();
    }




    return(
        <div className= 'col-3'>
            <div className='card-main'>
                <img 
                    src = {image}
                    alt = {name}
                    className = 'card-img-top'
                />
                <div className = 'card-body'>
                    <h3 className='card-title'>{name}</h3>
                    <p className='card-text'>
                        <strong>Nation: </strong>{nation}
                        <br/>
                        <strong>Class: </strong>{shipClass}
                        <br/>
                        <strong>Rarity: </strong>{rarity}
                    </p>
                    <a href={wiki} className='btn btn-primary'>Wiki</a>
                </div>
                <div className='card-footer'>
                    {/*Favorite checkbox*/}
                    <input
                        type='checkbox'
                        name='isFavorite'
                        id='isFavorite'
                        value={isFavorite}
                        onChange={() => {
                            setIsFavorite(!isFavorite);
                            //Add ship to favorites
                            if (isFavorite === false) {
                                const favorites = JSON.parse(localStorage.getItem('favorites'));
                                favorites.push(props);
                                localStorage.setItem('favorites', JSON.stringify(favorites));
                            }
                            //Remove ship from favorites
                            if (isFavorite === true) {
                                const favorites = JSON.parse(localStorage.getItem('favorites'));
                                const newFavorites = favorites.filter(ship => ship.name !== name);
                                localStorage.setItem('favorites', JSON.stringify(newFavorites));
                                reload();
                            }
                        }
                        }
                    />
                    <label htmlFor='isFavorite'>Favorite</label>
                </div>
            </div>
        </div>
    )

}