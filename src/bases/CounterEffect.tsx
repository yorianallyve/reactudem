import { useEffect, useRef, useState } from 'react';

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5)
    const counterElement = useRef<HTMLHeadingElement>(null);


    const handleClick = () => {
        setCounter( prev => Math.min( prev + 1, MAXIMUN_COUNT ) );
    }

    useEffect(() => {
        
        if ( counter < 10 ) return;

        console.log('%cSe llego al valor máximo','color: red; background-color: black;')


    }, [counter])

    return (
        <>
            <h1>CounterEffect:</h1>   
            <h2 ref={ counterElement }>{ counter }</h2>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}

export default CounterEffect