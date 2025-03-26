import { useContext } from "react";
import { Context } from '../Context'
import Waze from "../Buttons/Waze";
import SaveTheDate from "../Buttons/SaveTheDate";

function Chabat(){

    const { language } = useContext(Context)

    return(

        <div className="chabat">
            <p className="chabat-title">Le Chabat</p>
            <h1 className="houppa-noms"><span>Shirel</span> <span>&</span><span>Moshé</span></h1>
            <p className="chabat-text">Ont la joie de vous convier à leur Chabat hatan qui aura lieu</p>
            <p className="chabat-date">Vendredi et samedi <br /> 27 janvier 2025</p>
            <p className="chabat-endroit">À la synagogue des tunisiens <br /> ,près de l’arbre, Jérusalem </p>
            <Waze name={"waze"} lat={41.212} long={41.254} iconWidth={"20px"} iconHeight={"20px"} iconColor={"#E46204"} />
            <SaveTheDate name={"save-the-date"} date={[2025, 3, 12, 18, 0 ]} iconWidth={"20px"} iconHeight={"20px"} iconColor={"#E46204"} />
        </div>

    )
}

export default Chabat