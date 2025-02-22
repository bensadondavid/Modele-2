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
            
        </div>

    )
}

export default Home