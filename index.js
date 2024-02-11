function calculate(calculationSteps) {
  let operators = ['+', '-', '/', '*']

  calculationSteps = calculationSteps.map(calculationStep => {
    if (calculationStep === null) {
      return 0
    }
    else {
      return calculationStep
    }
  })
  let cleanedValues = calculationSteps.filter(calculationStep => {
    if (calculationStep === '' || calculationStep === undefined || (isNaN(parseInt(calculationStep)) &&
    !operators.includes(calculationStep))) {
      return false
    }

    return true
  })

  if (cleanedValues.length !== 3) {
    return NaN
  }

  return calculations(cleanedValues[0], cleanedValues[1], cleanedValues[2])
}

function calculations(numberOne, operator, numberTwo) {
  switch (operator) {
    case '+': return numberOne + numberTwo
    case '-': return numberOne - numberTwo
    case '*': return numberOne * numberTwo
    case '/': return numberOne / numberTwo
  }
}

module.exports = calculate
