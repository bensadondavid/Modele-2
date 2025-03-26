import { useContext } from 'react'
import { Context } from '../Context'
import Form from '../Components/Form'

function Response(){

    const { language } = useContext(Context)

    return(
            <div className="response">
                <h1 className='response-title'>La réponse</h1>
                <Form />
            </div>                
    )
}

export default Response