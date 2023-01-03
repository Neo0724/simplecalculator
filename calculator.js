const operators = document.querySelectorAll('.operators')
const numbers = document.querySelectorAll('.numbers')
const display = document.querySelector('.display').children
let result = []
let result2 = []

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        let operations = ['+', '-', '*', '/']
        switch(operator.classList[1]) {
            case 'plus':
                if (result.length == 0 && result2.length == 0) return
                if (operations.indexOf(result[result.length - 1]) >= 0) return
                result.push(operator.innerHTML)
                display[1].innerHTML += '+'
                if (result2.length > 1) {
                    result2.push('+')
                }
                break;

            case 'minus':
                if (result.length == 0) {
                    display[1].innerHTML = operator.innerHTML 
                    result.push(operator.innerHTML)
                    return
                }

                if (operations.indexOf(result[result.length - 1]) >= 0) return
                result.push(operator.innerHTML)
                display[1].innerHTML += '-'
                if (result2.length > 1) {
                    result2.push('-')
                }
                break;
            
            case 'times':
                if (result.length == 0 && result2.length == 0) return
                if (operations.indexOf(result[result.length - 1]) >= 0) return
                result.push('*')
                display[1].innerHTML += 'x'
                if (result2.length > 1) {
                    result2.push('*')
                }
                break;

            case 'divide':
                if (result.length == 0 && result2.length == 0) return
                if (operations.indexOf(result[result.length - 1]) >= 0) return
                result.push('/')
                display[1].innerHTML += '÷'
                if (result2.length > 1) {
                    result2.push('/')
                }
                break;

            case 'delete':
                if (result.length == 0 && display.innerHTML == 0) return
                result = result.slice(0, -1)
                display[1].innerHTML = display[1].innerHTML.split('').slice(0, -1).join('')
                if (result.length == 0) display[1].innerHTML = 0
                break;

            case 'clear':
                result = []
                result2 = []
                display[1].innerHTML = 0
                display[0].innerHTML = 0
                break;

            case 'equal':
                let numList = ['1','2','3','4','5','6','7','8','9','0']
                result.forEach(char => {
                    if (numList.indexOf(char) >= 0) {
                        char = parseInt(char)
                    }
                })

                if (result.length == 0) {
                    display.innerHTML = 0
                    return;
                }
                
                let finalRes = 0
                if (result2.length == 0) {
                    finalRes = eval(result.join(''))
                    display[1].innerHTML = finalRes
                    display[0].innerHTML = result2[result2.length - 1]
                } else {
                    finalRes = eval(result2.concat(result).join(''))
                }

                result2 = [finalRes]
                display[1].innerHTML = finalRes
                display[0].innerHTML = result2[result2.length - 1]
                console.log(result2)
                console.log(result)
                result = []
                break;
        }      
        

    })
})



numbers.forEach(number => {
    number.addEventListener('click', () => {
        if (display[1].innerHTML == 0) {
            display[1].innerHTML = number.innerHTML
            result.push(number.innerHTML)
            return;
        } 

        switch(number.classList[1]) {
            case 'zero':
                if (result[0] == '0') return
                display[1].innerHTML += number.innerHTML
                result.push(number.innerHTML)
                break;

            case 'decimal':
                if (result[result.length - 1] == '.') return
                display[1].innerHTML += number.innerHTML
                result.push(number.innerHTML)
                break;

            default:
                console.log(result)
                result.push(number.innerHTML)
                display[1].innerHTML += number.innerHTML
        }
    })
})
