// stringified numbers should be treated as numbers
// null should be treated as zero
// undefined values should be ignored
// empty string values should be ignored
// non-numeric values should be ignored

function calculate(calculationSteps) {
  // const operators = ['+', '-', '*', '/']

  // for (let i = 0; i < calculationSteps.length; i++) {
  //   if (calculationSteps.includes(operators)) {
  //     return true
  //   }
  //   else {
  //     return NaN
  //   }
  // }
  calculationSteps.map(calculationStep => {
    if (calculationStep === null) {
      return 0
    }
    else {
      return calculationStep
    }
  })
  // calculationSteps.map(calculationStep => {
  //   if (calculationStep === isNaN(parseInt(calculationStep))) {
  //     return ''
  //   }
  //   else {
  //     return calculationStep
  //   }
  // })
  let cleanedValues = calculationSteps.filter(calculationStep => {
    if (calculationStep === '' || calculationStep === undefined || calculationStep ===
    isNaN(parseInt(calculationStep))) {
      return false
    }

    return true
  })

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

