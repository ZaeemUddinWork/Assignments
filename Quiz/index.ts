#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import quiz_array from "./questions.js";


//interface for quizs 
interface quizs {
    question:string[],
    ans:string[],
    type:string[]
}
interface make_own_quiz {
   questions:[{
    question:string,
    choices:string[],
    correct_ans:string
   }]
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


let game:boolean = true;
while (game)//main loop
    {
let game_menu = await inquirer.prompt([
    {
        name:'menu',
        type:'list',
        message: chalk.bold.cyanBright('Select Option Below: '),
        choices: ['Start Quiz Game','Quit Game']
    },
    {
        name:'no_ofquiz',
        type:'list',
        message:chalk.bold.greenBright(`How many Quiz You want to give: `),
        choices: [5,10,15,20],
        when(game_menu)
        {
            return game_menu.menu === 'Start Quiz Game';
        }
    },
]);

let {menu,no_ofquiz} = game_menu;

let user_own_quiz:make_own_quiz ={
    questions:[{
        question:'',
        choices:[],
        correct_ans:''
    }]
}

    if (menu === 'Start Quiz Game')
        {
          async  function quizs(number:number)
          {
            let correct_num: number=0;
            let ans_list:quizs={
                question:[],
                ans:[],
                type:[]
            }
           


            
            for(let i =0;i < number ;i++)
                {
                  
                 let MCQS = await inquirer.prompt([
                    {
                        name:'mcqs',
                        type:'list',
                        message:chalk.bold.blueBright(`Q`+i+`: `+quiz_array[i].question),
                        choices:quiz_array[i].choises,
                    }
                 ])
                 let {mcqs} = MCQS;
                    if (mcqs === quiz_array[i].correct_ans)
                        {
                           ans_list.question.push(quiz_array[i].question) //pushing wrong questions into array
                           ans_list.ans.push(quiz_array[i].correct_ans) //pushing correct into array
                           ans_list.type.push('Correct') //pushing correct into type array
                            correct_num++
                        }
                        else {
                            ans_list.question.push(quiz_array[i].question) //pushing wrong questions into array
                            ans_list.ans.push(quiz_array[i].correct_ans) //pushing correct into array
                            ans_list.type.push('Wrong') //pushing wrong into type array
                        }
                 }
                 //after all question it will show result
                 console.log(chalk.bold.cyanBright(`
                 ┌──────────────────────────═━┈┈━═──────────────────────────┐

                                 -: Result :-
                 
                 `));
                
                for (let i =0;i < number ;i++)
                    {
                        //this will print if ans is correct
                 if (ans_list.type[i] === 'Correct')
                    {
                        console.log(chalk.bold.greenBright(`\n
                                    -: Correct Answer :-
                        Q${i} ${ans_list.question[i]}
                        Correct Answer : ${chalk.bold.cyanBright(ans_list.ans[i])}
                        `))
                    }
                    //this will print if ans is wrong
                else if (ans_list.type[i] === 'Wrong')
                    {
                        console.log(chalk.bold.redBright(`\n
                                    -: Wrong Answer :-
                        Q${i} ${ans_list.question[i]}
                        Correct Answer : ${chalk.bold.cyanBright(ans_list.ans[i])}
                        `))
                    }
                }
                console.log(chalk.bold.cyanBright(`\n
                             Your score ${correct_num} out of ${number}
                    
                 └──────────────────────────═━┈┈━═──────────────────────────┘
                `));
                }
                if (no_ofquiz === 5) //if user select 5 it will ask 5 questions
                    {
                        await quizs(5)
                    }
                else if (no_ofquiz === 10) //if user select 10 it will ask 10 questions
                    {
                        await   quizs(10)
                    }
                else if (no_ofquiz === 15) //if user select 15 it will ask 15 questions
                    {
                        await quizs(15)
                    }
                else if (no_ofquiz === 20) //if user select 20 it will ask 20 questions
                    {
                      await  quizs(20)
                    }
          }
     

    else if (menu === 'Quit Game')
        {
          game = false ;
              //after end of program it will print this credit
    console.log(
        chalk.bold.cyan(`
  \n\n
        ┌───────────────────────────═━┈┈━═───────────────────────────┐
  
                    Thanks For Checking my program !!
                          -:Follow me on:-
            Github: https://github.com/ZaeemUddinWork
            Linkedin: https://www.linkedin.com/in/zaeem-uddin/
    
        └───────────────────────────═━┈┈━═───────────────────────────┘ 
  `)
      );
        }


    }