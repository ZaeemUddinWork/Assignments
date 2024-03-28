#! /usr/bin/env node
//---importing resources----
import inquirer from "inquirer";
import chalk from "chalk";
//---importing end here -----

//------ assigning variables and interface ---------
let todo_list: string[] = [];
let Add_more_loop: boolean = true;
//main function
interface todo {
  name: string;
  Todo_task: string;
  Add_more: string;
  show_option: string;
  Edit_List: string;
  edited: string;
}
//------ assigning variables and interface end here ---------

//----- collecting username here ----------
let userdata: todo = await inquirer.prompt([
  {
    name: "name",
    type: "input",
    message: chalk.yellow(`Enter Your name: `),
  },
]);
//----- collecting username end here ----------

//---- title with name here -----
console.log(
  chalk.bold.blueBright(`\n
    -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
    \t  Welcome to The Apni Todo List
    -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
    `)
);
//---- title with name end here -----

//------- while loop start to take task for todo list here --------
while (Add_more_loop) {
  let todo_Data: todo = await inquirer.prompt([
    {
      name: "Todo_task",
      type: "input",
      message: chalk.yellow(`Enter Your Todo Task: `),
      default: "empty",
    },
    {
      name: "Add_more",
      type: "list",
      message: chalk.yellow(`Want to add more Todo Task: `),
      choices: ["Yes", "No"], //asking user that want to add more data or not
      default: "Yes",
    },
  ]);

  let { Todo_task, Add_more } = todo_Data;

  todo_list.push(Todo_task); //this will push to array

  Add_more === "Yes" ? (Add_more_loop = true) : (Add_more_loop = false); // if user select yes than loop will continue other wise stop here
}
//------- while loop start to take task for todo list end here --------

//------ working for seleing option list -----------
let questions: todo;
async function Select_list() {
  questions = await inquirer.prompt([
    {
      //will ask user to select options
      name: "show_option",
      type: "list",
      message: chalk.blueBright(`Select The option below: `),
      choices: ["Show Todo List", "Edit Todo List", "Exit"],
    },
    {
      //if user sect edit it will ask which item you want to edit
      name: "Edit_List",
      type: "list",
      message: chalk.bold.blueBright(`Which Task you want to Edit ?`),
      choices: todo_list,
      when(questions) {
        return questions.show_option == "Edit Todo List";
      },
    },
  ]);

  //----- condition start here -------

  let { show_option, Edit_List } = questions;
  if (show_option == "Show Todo List") {
    console.log(
      chalk.bold.greenBright(
        `\n
    .x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x. 
    \t` +
          chalk.red(`\t${userdata.name}'s Todo List`) +
          `
        `
      )
    );
    todo_list.forEach((list) => {
      console.log(chalk.bold.greenBright(`\t> ${list}`));
    });
    console.log(
      chalk.bold.greenBright(`
    .x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x. \n
        `)
    );
    Select_list(); //after show todo list it will run select list function again
  }
  //if user select edit
  else if (show_option === "Edit Todo List") {
    //this will ask enter new edited task you want to add in list
    let edit_task: todo = await inquirer.prompt([
      {
        name: "edited",
        type: "input",
        message: chalk.bold.blue(`Enter a Task: `),
      },
    ]);
    //working for replace select item with new item
    let { edited } = edit_task;
    let task = Edit_List;
    let index: number = todo_list.indexOf(task);
    todo_list[index] = edited;
    console.log(
      chalk.green(`\n\n
    ----------------------------------------------------------
    !! ${userdata.name} your Todo list successfully Edited !!
    ----------------------------------------------------------
    \n
    `)
    );
    Select_list(); //after edit it will run select list function again
  }
  //for exit
  else {
    credit();
  }

  //----- condition end here -------
}
//------ working for seleing option list end here -----------

//calling function
Select_list();
//----

//Credit will come if user select exit
async function credit() {
  console.log(
    chalk.bold.greenBright(`\n\n
.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x. 
!! Thanks ${userdata.name} for use this program !!
            Follow me on:
Linkedin: https://www.linkedin.com/in/zaeem-uddin/
Github:   https://github.com/ZaeemUddinWork
.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x. \n
    `)
  );
}
