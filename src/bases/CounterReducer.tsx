import { useReducer } from "react"

interface CounterState {
    counter: number;
    previus: number;
    changes: number
}

const INICIAL_STATE = {
    counter: 0,
    previus: 0,
    changes: 0
}

type CounterAction =
    | { type: 'increaseBy', payload: { value: number; } }
    | { type: 'reset' }


const counterReducer = (state: CounterState, action: CounterAction): CouterState => {
    const {counter, changes}=state
    switch (action.type) {
        case'reset':

            return {
                counter: 0,
                previus: 0,
                changes: 0
            };

            case 'increaseBy':
                return{
                    changes: state.changes +1,
                    counter: state.counter +action.payload.value,
                    previus: state.counter
                }

        default:
            return state;
    }

}

export const CounterReducerComponent = () => {

    const [{couterState}, dispatch] = useReducer(counterReducer, INICIAL_STATE);

    const handleClick = () => {
        dispatch({type:'reset'})
    }

    const increaseBy = (value:number) => {
        dispatch({type:'increaseBy', payload:{value}});
    }

    return (
        <>
            <h1>Counter Reducer</h1>
            <pre>
                {JSON.stringify(couterState, null,2)}
            </pre>

            <button onClick={() => increaseBy(1)}>
                +1
            </button>

            <button onClick={() => increaseBy(5)}>
                +5
            </button>

            
            <button onClick={() => increaseBy(10)}>
                +10
            </button>

            <button onClick={handleClick}>
                Reset
            </button>
        </>
    )
}

export default CounterReducerComponent