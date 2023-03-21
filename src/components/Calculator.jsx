import './Calculator.css'
import React from 'react'

// https://i.pinimg.com/originals/29/48/ea/2948ea46373362888081818d697c6d9e.png

export default function Calculator() {
    const [display, setDisplay] = React.useState('0')
    const [result, setResult] = React.useState(0)

    const clearAll = () => {
        setDisplay('0')
        setResult(0)
    }
    
    const appendDisplay = (e) => {
        setDisplay(prevDisplay => {
            if (prevDisplay === '0')
                return e.target.value
            else
                return prevDisplay.concat(e.target.value)
        })
    }
    
    const stripInvalid = (input) => {
        return input.replace(/[^-()\d/*+.]/g, '');
    }
    
    const execute = () => {
        setDisplay('0')
        setResult(eval(stripInvalid(display)))
    }

    return (
        <div className='calc'>
            <div id='display'>{display}</div>
            <div id='result'>{result}</div>
            
            <button className='calc-button' id='clear' onClick={clearAll}>C</button>
            <button className='calc-button' id='percent' value='' onClick={appendDisplay}>%</button>
            <button className='calc-button' id='divide' value='/' onClick={appendDisplay}>÷</button>
            <button className='calc-button' id='seven' value='7' onClick={appendDisplay}>7</button>
            <button className='calc-button' id='eight' value='8' onClick={appendDisplay}>8</button>
            <button className='calc-button' id='nine' value='9' onClick={appendDisplay}>9</button>
            <button className='calc-button' id='multiply' value='*' onClick={appendDisplay}>×</button>
            <button className='calc-button' id='four' value='4' onClick={appendDisplay}>4</button>
            <button className='calc-button' id='five' value='5' onClick={appendDisplay}>5</button>
            <button className='calc-button' id='six' value='6' onClick={appendDisplay}>6</button>
            <button className='calc-button' id='subtract' value='-' onClick={appendDisplay}>-</button>
            <button className='calc-button' id='one' value='1' onClick={appendDisplay}>1</button>
            <button className='calc-button' id='two' value='2' onClick={appendDisplay}>2</button>
            <button className='calc-button' id='three' value='3' onClick={appendDisplay}>3</button>
            <button className='calc-button' id='add' value='+' onClick={appendDisplay}>+</button>
            <button className='calc-button' id='zero' value='0' onClick={appendDisplay}>0</button>
            <button className='calc-button' id='decimal' value='.' onClick={appendDisplay}>.</button>
            <button className='calc-button' id='equals' value='=' onClick={execute}>=</button>
        </div>
    )
}