import { useContext } from "react";
import { Context } from '../Context'
import Houppa from "./Houppa"
import Chabat from "./Chabat"
import Response from './Response'

function Home(){

    const { language } = useContext(Context)

    return(
        <>
        <div className="home">
            <p className="bsd">בס"ד</p>
            <Houppa />
            <img src="modele-2-fleur-3.png" className="fleur-3" />
            <Chabat />
            <img src="modele-2-fleur-4.png" className="fleur-4" />
            <Response />
            <img src="modele-2-fleur-entry.png" className="fleur-5" />
        </div>
        </>
    )
}

export default Home