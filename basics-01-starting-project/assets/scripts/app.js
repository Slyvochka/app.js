const defaultValue = 0;
let currentResult = defaultValue;
let logEntries = [];

// Gets input from input field
function getUserInput(){
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
   const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
   outputResult(currentResult, calcDescription);  // from vendor file
}

function writeLog(
   operationIdentifier, 
   prevResult, 
   operationNum, 
   newResult
) {
   const logEntry = {
      operation: operationIdentifier,
      prevResult: prevResult,
      number: operationNum,
      newResult: newResult
   };
   logEntries.push(logEntry);
   console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBSTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
   calculateResult('ADD')
 }

function substract() {
  calculateResult('SUBSTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}


addBtn.addEventListener('click', add);
substractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




