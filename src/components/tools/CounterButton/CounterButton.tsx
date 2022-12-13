import { CounterButtonsContainerStyle, ButtonStyle, CounterStyle } from "./Style";
import { Increment, Decrement } from '../../../assets/AllLogo'
import { useEffect, useState } from "react";
import CounterButtonInterface from "./CounterButtonProps";

const CounterButton = ({setCounter}:CounterButtonInterface) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        return () => {
            setCounter(count)
        };
    }, [count, setCounter])

    const increment = () => {
        setCount((count)=>count+1)
    }

    const decrement = () => {
        setCount((count)=>count>0?count-1:0)
    }

    return (
        <>
            <CounterButtonsContainerStyle>
                <ButtonStyle src={Decrement} onClick={decrement} />
                <CounterStyle>{count}</CounterStyle>
                <ButtonStyle src={Increment} onClick={increment} />
            </CounterButtonsContainerStyle>
        </>
    )
}

export default CounterButton;