import { useState } from 'react';
import Houppa from "./Houppa"
import Chabat from "./Chabat"
import Form from "../Components/Form"

function Home(){

    const [activeLanguage, setActiveLanguage] = useState("francais"); 

    const handleLanguage = (language) => {
        setActiveLanguage(language); 
    }

    return(

        <div className="home">
            <div className="fleurs-home">
                <img src="fleur-home-gauche.png" className='fleur-home-gauche' />
                <img src="fleur-home-droite.png" className='fleur-home-droite' />
            </div>
            <img src="kol-sasson-orange.png" className='kol-sasson'/>
            <Houppa activeLanguage='francais'/>
        </div>

    )
}

export default Home