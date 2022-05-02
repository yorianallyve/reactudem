import { useReducer } from "react"

interface  CounterState {
    counter:number;
    previus:number;
    change:number
}

const INICIAL_STATE= {
    counter:0,
    previus:0,
    change:0
}

export const CounterReducerComponent = () => {
    
    const [ State, dispatch] = useReducer( reducer, initiaState, int );
    
    const handleClick = () => {
        setCounter(prev => prev + 1)
    }

    return (
        <>
            <h1>Counter Reducer: {counter}</h1>

            <button onClick={handleClick}>
                +1
            </button>
        </>
    )
}

export default CounterReducerComponent