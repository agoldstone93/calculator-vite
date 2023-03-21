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

    const buttons = [
        {name: 'one', value: 1},
        {name: 'clear', value: 'C'},
        {name: 'percent', value: '%'},
        {name: 'divide', value: '÷'},
        {name: 'seven', value: '7'},
        {name: 'eight', value: '8'},
        {name: 'nine', value: '9'},
        {name: 'multiply', value: '×'},
        {name: 'four', value: '4'},
        {name: 'five', value: '5'},
        {name: 'six', value: '6'},
        {name: 'subtract', value: '-'},
        {name: 'one', value: '1'},
        {name: 'two', value: '2'},
        {name: 'three', value: '3'},
        {name: 'add', value: '+'},
        {name: 'zero', value: '0'},
        {name: 'decimal', value: '.'},
        {name: 'equals', value: '='},
    ]

    return (
        <div className='calc'>
            <div id='display'>{display}</div>
            <div id='result'>{result}</div>
            <button className='calc-button' id='clear' onClick={clearAll}>C</button>
            <button className='calc-button' id='percent'>%</button>
            <button className='calc-button' id='divide'>÷</button>
            <button className='calc-button' id='seven'>7</button>
            <button className='calc-button' id='eight'>8</button>
            <button className='calc-button' id='nine'>9</button>
            <button className='calc-button' id='multiply'>×</button>
            <button className='calc-button' id='four'>4</button>
            <button className='calc-button' id='five'>5</button>
            <button className='calc-button' id='six'>6</button>
            <button className='calc-button' id='subtract'>-</button>
            <button className='calc-button' id='one' value='1' onClick={appendDisplay}>1</button>
            <button className='calc-button' id='two' value='2' onClick={appendDisplay}>2</button>
            <button className='calc-button' id='three'>3</button>
            <button className='calc-button' id='add'>+</button>
            <button className='calc-button' id='zero'>0</button>
            <button className='calc-button' id='decimal'>.</button>
            <button className='calc-button' id='equals'>=</button>
        </div>
    )
}