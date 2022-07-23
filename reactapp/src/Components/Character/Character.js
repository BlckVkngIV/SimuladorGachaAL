import React from 'react';

function Character(props) {
    const {name, image, id, nationality} = props;
    return (
        <div className='col-3'>
            <div className='card mb-3'>
                <img 
                    src={image}
                    alt={name}
                    className='card-img-top'
                />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p>{`Nation: ${nationality}`}</p>
                </div>
            </div>
        </div>
    );
}

export default Character;