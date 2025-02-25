import { useState } from 'react';
import Houppa from "./Houppa"
import Chabat from "./Chabat"
import Form from "../Components/Form"

function Home(){

    return(
        <>
        <div className="home-1">
            <div className="fleurs-home">
                <img src="fleur-home-gauche.png" className='fleur-home-gauche' />
                <img src="fleur-home-droite.png" className='fleur-home-droite' />
            </div>
            <img src="kol-sasson-dore.png" className='kol-sasson'/>
            <Houppa />
        </div>
        <div className="home-2">
            
        </div>
        </>
    )
}

export default Home