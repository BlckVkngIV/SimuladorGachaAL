import React from 'react';

export default function Ship(props){
    const {name,nation,image, wiki, shipClass, description, key } = props;

    return(
        <div className= 'col-3'>
            <div className='card mb-3'>
                <img 
                    src = {image}
                    alt = {name}
                    className = 'card-img-top'
                />
                <div className = 'card-body'>
                    <h3 className='card-title'>{name}</h3>
                    <p className='card-text'>
                        <strong>ID:</strong> {key}
                        <strong>Nación: </strong>{nation}
                        <br/>
                        <strong>Clase: </strong>{shipClass}
                        <br/>
                        <strong>Descripcion: </strong>{description}
                    </p>
                    
                    <a href={wiki} className='btn btn-primary'>Wiki</a>
                </div>
            </div>
        </div>
    )

}