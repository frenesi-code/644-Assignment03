

do {
    let numberA = parseFloat(prompt("Type the first number"));
    let numberB = parseFloat(prompt("Type the second number"));
    let operation = prompt("Type the operation").toLowerCase();
   
    var isValidOperation = false;
    var operationsAvailable = {
        ADD: 'add',
        SUBTRACT: 'subtract',
        MULTIPLY: 'multiply',
        DIVIDE: 'divide'
    }

    checkOperation(operation);

    function checkOperation(operation) {        
        for (var oper in operationsAvailable) {            
            if (oper.toLowerCase() === operation) {
                isValidOperation = true;                  
            }
        }        
    }

    calculate(numberA, numberB, operation);

    function calculate(numberA, numberB, operation) {        
        switch (operation) {
            case operationsAvailable.MULTIPLY: {
                alert(`Result => ${numberA * numberB}`);
                break;
            }
            case operationsAvailable.DIVIDE: {
                alert(`Result => ${numberA / numberB}`);
                break;
            }
            case operationsAvailable.SUBTRACT: {
                alert(`Result => ${numberA - numberB}`);
                break;
            }
            case operationsAvailable.ADD: {
                alert(`Result => ${numberA + numberB}`);
                break;
            }
            default:
                alert('Wrong Operation! This is a basic calc!');
        }
    }

} while (!isValidOperation); 