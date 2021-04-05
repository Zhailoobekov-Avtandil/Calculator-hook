import React, { useState } from 'react'

export const Calculator = () => {

    const [values, setValues] = useState({
        num1: 1,
        num2: 1,
    })

    const [result, setResult] = useState('here must be result')

    const inputHandler = (e) => {
        setValues({...values, [e.target.name]: e.target.value})
        
    }

    const onPlus = () => {
        setResult(parseInt(values.num1) + parseInt(values.num2))
    }

    const onMinus = () => {
        setResult(parseInt(values.num1) - parseInt(values.num2))
    }

    const onMult = () => {
        setResult(parseInt(values.num1) * parseInt(values.num2))
    }

    const onDivide = () => {
        setResult(parseInt(values.num1) / parseInt(values.num2))
    }

    return <div>
    <input 
    type='number' 
    value={values.num1} 
    onChange={inputHandler}
    name="num1"
        />
    <button onClick={onPlus}>+</button>
    <button onClick={onMinus}>-</button>
    <button onClick={onMult}>*</button>
    <button onClick={onDivide}>/</button>
    <input 
    type="number" 
    value={values.num2} 
    onChange={inputHandler} 
    name="num2"
    />
    <span>sum:{result}</span>
</div>
}