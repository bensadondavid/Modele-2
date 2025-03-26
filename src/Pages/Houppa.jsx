import { useContext } from "react";
import { Context } from '../Context'
import Waze from "../Buttons/Waze";
import SaveTheDate from '../Buttons/SaveTheDate'

function Houppa(){

    const { language } = useContext(Context)

    return(
        <div className="houppa">
            <img src="modele-2-fleur-2.png" className="fleur-1" />
            <img src="modele-2-fleur-1.png" className="fleur-2" />
            <img src="kol-sasson-m2.png" className='kol-sasson'/>
            <h1 className="houppa-titre">La Houppa</h1>
            <div className="parents">
                <div className="parents-fille">
                    <p>Mr et Mme John Doe</p>
                    <p>Mr et Mme John Doe</p>
                </div>
                <div className="parents-garcon">
                    <p>Mr et Mme John Doe</p>
                    <p>Mr et Mme John Doe</p>
                </div>
            </div>
            <p className="houppa-text">Ont la joie de vous faire part du mariage de leur petits-enfants et enfants</p>
            <h1 className="houppa-noms"><span>Shirel</span> <span>&</span><span>Moshé</span></h1>
            <p className="houppa-text">et vous prient de bien vouloir assister à la houppa qui aura lieu</p>
            <h3 className="houppa-date">
                Lundi 03 Juin 2024 <br />
                כו' באייר תשפ"ה <br />
                A 18h00
            </h3>
            <p className="houppa-endroit">
                A la salle Emerald Garden <br />
                Park Taassit Shourak, Beth Shemesh
            </p>
            <p className="houppa-reception">La Houppa sera suivie d'une réception</p>
            <p className="houppa-pensee">"Une tendre pensée pour nos grands-parents toujours présents dans nos coeurs"</p>
        
            <Waze name={"waze"} lat={41.212} long={41.254} iconWidth={"20px"} iconHeight={"20px"} iconColor={"#E46204"} />
            <SaveTheDate name={"save-the-date"} date={[2025, 3, 12, 18, 0 ]} iconWidth={"20px"} iconHeight={"20px"} iconColor={"#E46204"} />
        </div>
    )
}

export default Houppa