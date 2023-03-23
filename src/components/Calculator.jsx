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
    
    const updateInput = (e) => {
        const button = e.target.value
        const operators = ['+', '*', '/']
        
        const lastNumber = (input) => input.split(/[-/*+]/).at(-1)

        setInput(prevInput => {
            if (prevInput === '0') {
                if (operators.includes(button)) {
                    if (output !== 0) {
                        setOutput(0)
                        return output.toString().concat(button)
                    } else {
                        // When inputting numbers, my calculator should not allow
                        // a number to begin with multiple zeros

                        return prevInput
                    }
                }

                return button
            }

            // When the decimal element is clicked, a "." should append to the currently
            // displayed value; two "." in one number should not be accepted
            if (button === '.' && lastNumber(prevInput).includes('.'))
                return prevInput

            // If 2 or more operators are entered consecutively, the operation 
            // performed should be the last operator entered (excluding the
            // negative (-) sign.)
            if (operators.includes(prevInput.at(-1)) && operators.includes(button))
                return prevInput.replace(/.$/, button)

            // Append number to the end the input
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
            key={button.name}
            className='calc-button'
            id={button.name}
            value={button.value}
            onClick={updateInput}
        >
            {button.text}
        </button>
    })

    return (
        <div className='calc'>
            <div id='display'>{input}</div>
            <div id='result'>{output}</div>
            
            <button className='calc-button' id='clear' onClick={clearAll}>C</button>
            {buttonElements}
            <button className='calc-button' id='equals' value='=' onClick={execute}>=</button>
        </div>
    )
}