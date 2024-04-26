import inquirer from "inquirer";

//Simple Calculator 

let calculator = await inquirer.prompt([
    {
        name :'Number1',
        type: 'number',
        message:'Enter 1st number :'//this will ask number 1 from user
    },

    {
        name:'operator',
        type: 'list',
        message: 'Select operator',
        choices: ['Add','Subtract','Multiply','Divide'] // this will ask to select operator option
    },
    {
        name:'Number2',
        type:'number',
        message:'Enter 2nd number:'//this will ask 2nd number to enter from user
    }
])

// this function will check operator wit the help of if else condition 
function answer(){
     if(calculator.operator == 'Add' ){
        console.log(calculator.Number1 + calculator.Number2)//this will add number1 and number2
    }
    else if(calculator.operator == 'Subtract' ){
        console.log(calculator.Number1 - calculator.Number2)//this will Subtract number1 and number2
    }
    else if(calculator.operator == 'Multiply' ){
        console.log(calculator.Number1 * calculator.Number2)//this will Multiply number1 and number2
    }
    else if(calculator.operator == 'Divide' ){
        console.log(calculator.Number1 / calculator.Number2);//this will Divide number1 and number2
    }
    else
    {
        console.log(`Follow proper Step to get proper answer !!`)
    }
}

//calling function to give answer
answer()