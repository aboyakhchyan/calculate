const buttons= document.querySelectorAll('.button')
const text = document.querySelector('#text')

let num1 = ''
let num2 = ''
let symbol = ''
let isChange = true
let result = null
let isResult = false


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(text.textContent == '0' || text.textContent == 'error' || isResult) {
            text.textContent = ''
            isResult = false
        }


        if(!isNaN(+e.target.textContent)) {
            

            if(symbol === '') {
                if(num1.length < 6) {
                    text.textContent += button.textContent
                    num1 += button.textContent
                }
            }else {
                if(num2.length < 6) {
                    num2 += button.textContent
                    text.textContent = num2
                    isChange = false
                } 
            }
        }

        if(button.textContent === 'AC') {
            text.textContent = '0'
            num1 = ''
            num2 = ''
            symbol = ''
            isChange = true
        }

        if(button.textContent === '+' && isChange === true) {
            symbol = '+'
        }else if(button.textContent === '-' && isChange === true) {
            symbol = '-'
        }else if(button.textContent === 'x' && isChange === true) {
            symbol = 'x'
        }else if(button.textContent === '÷' && isChange === true) {
            symbol = '÷'
        }

        if(e.target.textContent === '=') {
            if(symbol === '+') {
                result = +num1 + (+num2)
                text.textContent = result
            }else if(symbol === '-') {
                result = +num1 - (+num2)
                text.textContent = result
            }else if(symbol === 'x') {
                result = +num1 * (+num2)
                text.textContent = result
            }else if(symbol === '÷') {
                if(num2 !== '0') {
                    result = +num1 / (+num2)
                    text.textContent = result
                }else {
                    text.textContent = 'error'
                    num1 = ''
                    num2 = ''
                    symbol = ''
                    isChange = true
                }
                
            }
            isResult = true
        }
        if(isResult) {
            num1 = ''
            num2 = ''
            symbol = ''
            isChange = true
        }

    })
})