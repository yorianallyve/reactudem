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

    const [{counter}, dispatch] = useReducer(counterReducer, INICIAL_STATE);

    const handleClick = () => {
        dispatch({type:'reset'})
    }

    return (
        <>
            <h1>Counter Reducer: {counter}</h1>

            <button onClick={handleClick}>
                Reset
            </button>
        </>
    )
}

export default CounterReducerComponent