import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100); //desestructuracion de un objeto
    return (
        <>
        <h1>Counter with Hook : {  state  }</h1>
        <hr/>
        <button onClick={ ()=> increment() } className="btn-success">+1</button><br></br>
        <button onClick={ reset } className="btn-danger">Reset</button><br></br>
        <button onClick={ ()=> decrement() } className="btn-danger">-1</button>
        </>
    )
}
