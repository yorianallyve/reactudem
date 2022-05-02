import { useReducer } from "react"

interface CounterState {
    counter: number;
    previus: number;
    change: number
}

const INICIAL_STATE = {
    counter: 0,
    previus: 0,
    change: 0
}

type counterAction =
    | { type: 'increaseBy', payload: { value: number; } }
    | { type: 'reset' }


const counterReducer = (state: CounterState, action: counterAction): CounterState => {
    switch (action.type) {
        case'reset':

            return {
                counter: 0,
                previus: 0,
                change: 0
            };

        default:
            return state;
    }

}

export const CounterReducerComponent = () => {

    const [State, dispatch] = useReducer(reducer, INICIAL_STATE);

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