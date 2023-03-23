import './Calculator.css'
import React from 'react'

// https://i.pinimg.com/originals/29/48/ea/2948ea46373362888081818d697c6d9e.png

export default function Calculator() {
    const [input, setInput] = React.useState('0')
    const [output, setOutput] = React.useState(0)

    const clearAll = () => {
        setInput('0')
        setOutput(0)
    }
    
    const appendInput = (e) => {
        const button = e.target.value
        const operators = ['+', '-', '*', '/']
        
        const lastNumber = (input) => input.split(/[-/*+]/).at(-1)
        
        setInput(prevInput => {
            // when display has a number > 0 and you click an operator
            if (output !== 0 && operators.includes(button)) {
                setOutput(0)
                return output.toString().concat(button)
            }

            if (button === '.')
                return !lastNumber(prevInput).includes('.') ? prevInput.concat(button) : prevInput

            // If 2 or more operators are entered consecutively, the operation performed should be the 
            // last operator entered (excluding the negative (-) sign


            if (prevInput === '0')
                return button
            else
                return prevInput.concat(button)

        })
    }
    
    const stripInvalid = (input) => {
        return input.replace(/[^-()\d/*+.]/g, '');
    }
    
    const execute = () => {
        setInput('0')
        setOutput(eval(stripInvalid(input)))
    }

    const buttons = [
        {name: 'percent', value: '%', text: ''},
        {name: 'divide', value: '/', text: '÷'},
        {name: 'seven', value: '7', text: '7'},
        {name: 'eight', value: '8', text: '8'},
        {name: 'nine', value: '9', text: '9'},
        {name: 'multiply', value: '*', text: '×'},
        {name: 'four', value: '4', text: '4'},
        {name: 'five', value: '5', text: '5'},
        {name: 'six', value: '6', text: '6'},
        {name: 'subtract', value: '-', text: '-'},
        {name: 'one', value: '1', text: '1'},
        {name: 'two', value: '2', text: '2'},
        {name: 'three', value: '3', text: '3'},
        {name: 'add', value: '+', text: '+'},
        {name: 'zero', value: '0', text: '0'},
        {name: 'decimal', value: '.', text: '.'},
    ]

    const buttonElements = buttons.map(button => {
        return <button 
            className='calc-button'
            id={button.name}
            value={button.value}
            onClick={appendInput}
        >
            {button.text}
        </button>
    })

    return (
        <div className='calc'>
            <div id='display'>{input}</div>
            <div id='result'>{output}</div>
            
            <button className='calc-button' id='clear' onClick={clearAll}>C</button>
            {/* <button className='calc-button' id='percent' value='' onClick={appendDisplay}>%</button>
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
            <button className='calc-button' id='decimal' value='.' onClick={appendDisplay}>.</button> */}
            {buttonElements}
            <button className='calc-button' id='equals' value='=' onClick={execute}>=</button>
        </div>
    )
}