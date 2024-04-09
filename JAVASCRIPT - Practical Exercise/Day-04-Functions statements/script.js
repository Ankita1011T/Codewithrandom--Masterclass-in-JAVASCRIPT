function calculator(num1, num2, operator) {
    let result;  
    switch (operator) {
        case  "+" :
        return num1 + num2;
        
        case "-" :
        result = num1 - num2;
        return result;

        case "*" :
            result = num1 * num2;
            return result;

        case "/":
            if(num2 === 0){
                return "0 is not allowed";
            }else{
                result = num1 / num2;
                return result;
            }

        default:
            return 'no operators found';
    }
 }
console.log(calculator(10, 5,'+'));
console.log(calculator(10, 15,'-'));
console.log(calculator(10, 0,'/'));
console.log(calculator(10, 15,'*'));
