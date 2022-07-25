import React from 'react';
import './Ship.css';


export default function Ship(props){
    const {name,nation,image, wiki, shipClass, rarity} = props;

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
            </div>
        </div>
    )

}