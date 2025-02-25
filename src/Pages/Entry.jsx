import CountDown from '../Components/CountDown'
import { Link } from 'react-router-dom'

function Entry(){

    return(

        <div className="entry">
            <p className="bsd">בס"ד</p>
            <img src="logo-orange.png" className="logo-entry" />
            <CountDown />
            <Link to='/home' className='entry-lien'><button className='invit-button'>Voir l'invitation</button></Link>
            <div className="fleurs-entry">
                <img src="fleur-entry-gauche.png" className='fleur-entry-gauche' />
                <img src="fleur-entry-droite.png" className='fleur-entry-droite' />
            </div>
        </div>
    )
}

export default Entry