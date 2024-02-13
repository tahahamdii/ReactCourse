import { useEffect,useState } from 'react';

function CompFonc() {
    const [{color,backgroundColor},setColor] = useState({color:'black',backgroundColor:'white'});
    const changeColor = () => {
        setColor({color:'white',backgroundColor:'black'});
    }   ;
    useEffect(() => {
        console.log('cette fonction va etre excutée une seule fois');
        console.log('cette fonction va etre excutée une seule fois');
        return () => {
            console.log('cette fonction va etre excutée upour netoyeer');
        }
    }, [color]);
    useEffect(() => {
        console.log('cette fonction va etre excutée une seule fois');
        console.log('car la deuxieme argument est n table vide');
        return () => {
            console.log('cette fonction va etre excutée seulement lors netoyeer');
        }
    }, []);
    useEffect(() => {
        console.log('cette fonction va etre excutée a chque render');
        console.log('car la deuxieme argument est passé');
    });

    return (<>
    <h1>Exemple dutilisation</h1>
    <p>Color : {color}</p>
    <p>backgroundColor : {backgroundColor}</p>
    <button onClick={changeColor}>Changer la couleur</button>
    </>  );
}

export default CompFonc;