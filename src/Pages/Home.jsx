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
            <img src="kol-sasson-blanc.png" className='kol-sasson'/>
            <Houppa activeLanguage='francais'/>
        </div>

    )
}

export default Home