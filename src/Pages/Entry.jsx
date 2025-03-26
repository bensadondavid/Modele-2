import { useContext } from "react";
import { Context } from '../Context'
import CountDown from '../Components/CountDown'
import { Link } from 'react-router-dom'

function Entry(){

    const { language } = useContext(Context)

    return(

        <div className="entry">
            <p className="bsd">בס"ד</p>
            <img src="logo-orange.png" className="logo-entry" />
            <CountDown />
            <Link to='/home' className='entry-lien'><button className='invit-button'>Voir l'invitation</button></Link>
           <img src="modele-2-fleur-entry.png" className="fleur-entry" />
        </div>
    )
}

export default Entry