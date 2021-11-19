import React from 'react'
import './counter.css'

export const CounterWithCustomHook = () => {
    return (
        <>
        <h1>Counter with Hook : {  0  }</h1>
        <hr/>
        <button className="btn-success">+1</button><br></br>
        <button className="btn-danger">-1</button>
        </>
    )
}
