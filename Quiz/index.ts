

import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";
//class for quiz 
class quiz {
    question:string ='';
    choices:string[] = [];
    correct_answer:string = '';
    constructor (question:string,choices:string[],correct_ans:string)
    {
        this.question = question;
        this.choices = choices;
        this.correct_answer = correct_ans;
    }
    checking_and(ans:string)
    {
        if (this.correct_answer === ans)
            {
                console.log(`!! Correct Answer !!`)
            }
        else if (this.correct_answer != ans){
            console.log(`Wrong answer`)
        }
    }
}
// printing title 
console.log(`
╦ ╦┌─┐┬  ┌─┐┌─┐┌┬┐┌─┐  ┌┬┐┌─┐
║║║├┤ │  │  │ ││││├┤    │ │ │
╚╩╝└─┘┴─┘└─┘└─┘┴ ┴└─┘   ┴ └─┘
                ╔═╗ ┬ ┬┬┌─┐  ╔═╗┌─┐┌┬┐┌─┐
                ║═╬╗│ ││┌─┘  ║ ╦├─┤│││├┤ 
                ╚═╝╚└─┘┴└─┘  ╚═╝┴ ┴┴ ┴└─┘
`);

//number generator function for generating numbers for quiz
function number_generator(max:number,min:number):number
{
    return Math.floor( Math.random()* ( max - min + 1 )) + min
}

let game:boolean = true;
while (game)
    {
let game_menu = await inquirer.prompt([
    {
        name:'menu',
        type:'list',
        message: chalk.bold.cyanBright('Select Option Below: '),
        choices: ['Start Quiz Game','Add Your own MCQS','Quit Game']
    },
    {
        name:'add_quiz',
        type:'input',
        message:chalk.bold.greenBright(`Add Question: `),
        when(game_menu)
        {
            return game_menu.menu === 'Add Your own MCQS';
        }
    },
    {
        name:'choice1',
        type:'input',
        message:chalk.bold.greenBright(`Add Choice no1: `),
        when(game_menu)
        {
            return game_menu.add_quiz;
        }
    },
    {
        name:'choice2',
        type:'input',
        message:chalk.bold.greenBright(`Add Choice no2: `),
        when(game_menu)
        {
            return game_menu.choice1;
        }
    },
    {
        name:'choice3',
        type:'input',
        message:chalk.bold.greenBright(`Add Choice no3: `),
        when(game_menu)
        {
            return game_menu.choice2;
        }
    },
    {
        name:'choice4',
        type:'input',
        message:chalk.bold.greenBright(`Add Choice no4: `),
        when(game_menu)
        {
            return game_menu.choice3;
        }
    },
    {
        name:'no_ofquiz',
        type:'list',
        message:chalk.bold.greenBright(`How many Quiz YOu want to give: `),
        choices: [5,10,15,20],
        when(game_menu)
        {
            return game_menu.menu === 'Start Quiz Game';
        }
    },
]);

let {menu,add_quiz,choice1,choice2,choice3,choice4} = game_menu;

    if (menu === 'Start Quiz Game')
        {
          async  function quizs(number:number)
          {
            for(let i = 0; i <= number; i++)
                {
                  let  number_of_question:number = number_generator(19,0);
                  let question = new quiz(quiz_array[number_of_question],choices.choise0,correct_ans[number_of_question])
                }
          }
            

        }
    else if (menu === 'Add Your own MCQS')
        {
            
        }
    else if (menu === 'Quit Game')
        {
          game = false  
        }


    }