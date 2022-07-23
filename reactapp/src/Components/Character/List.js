import React, {useState, useEffect} from 'react';
import Character from './Character';

export default function List() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchData() {
            //fetch Azur Lane minified data
            const data = await fetch('https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/version-info.json.application/json');
            const {results} = await data.json();
            setCharacters(results);
        }

        fetchData();
    }, []);

    return (
        <div>
            {characters.map(character => (
                //Character, ID, Name, Nationality and Image
                <Character 
                    key={character.id}
                    name={character.name}
                    nationality={character.nationality}
                    image={character.image}


                />
            ))}
        </div>
    );
}