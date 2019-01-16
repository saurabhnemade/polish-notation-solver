let input = [1,2,"-",3,"+"];

const validOperators = ["+","-","*","/","^","%"];
const isOperator = (possibleOperator) => {
    return (validOperators.indexOf(possibleOperator) !== -1);
};

const calculateReversePolishNotation = (notation) => {
    let stack = [];
    for(let i=0;i<notation.length;i++) {
        console.log(`[INFO] Current Stack:`, stack);
        console.log(`[INFO] Processing ${notation[i]}`);
        if (!isOperator(notation[i])){
            console.log(`[INFO] Pushing ${notation[i]} to the stack`);
            stack.push(notation[i]);
        } else {
            let right = stack.pop();
            let left = stack.pop();

            const operation = left.toString() + notation[i] + right.toString();
            console.log(`[INFO] Executing: ${operation}`);
            const result = eval(operation);
            console.log(`[INFO] Pushing ${result} to the stack`);
            stack.push(result);
        }
    }

    if (stack.length !== 1) {
        throw("Input is not a valid reverse polish notation");
        return;
    }

    return stack.pop();
};

const result = calculateReversePolishNotation(input);
console.log(`Result of expression is ${result}`);