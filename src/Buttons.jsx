import { useDispatch } from "react-redux"

const Buttons = () => {
    const dispatch = useDispatch()

    const handleInc = () => {
        dispatch({type: 'plus'})
    }
    const handleDec = () => {
        dispatch({type: 'minus'})
    }
    const handleRes = () => {
        dispatch({type: 'reset'})
    }
    
    return ( 
        <div>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <button onClick={handleRes}>Reset</button>
        </div>
    )
}

export default Buttons