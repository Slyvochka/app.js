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

function add() {
   const enteredNumber = getUserInput();
   const initialResult = currentResult;
   currentResult += enteredNumber;
   createAndWriteOutput('+', initialResult, currentResult);
   writeLog('ADD', initialResult, enteredNumber, currentResult);
 }

function substract () {
   const enteredNumber = getUserInput();
   const initialResult = currentResult;
   currentResult -= enteredNumber;
   createAndWriteOutput('-', initialResult, currentResult);
   writeLog('SUBSTRACT', initialResult, enteredNumber, currentResult);
}

function multiply () {
   const enteredNumber = getUserInput();
   const initialResult = currentResult;
   currentResult *= enteredNumber;
   createAndWriteOutput('*', initialResult, currentResult);
   writeLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide () {
   const enteredNumber = getUserInput();
   const initialResult = currentResult;
   currentResult /= enteredNumber;
   createAndWriteOutput('/', initialResult, currentResult);
   writeLog('DIVIDE', initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', add);
substractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);





