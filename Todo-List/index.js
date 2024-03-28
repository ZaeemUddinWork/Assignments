//importing inquirer
import inquirer from "inquirer";
//importing chalk
import chalk from "chalk";
//printing title
console.log(`
---------------------------------------------------------------------------------
\t\t\t` + chalk.bold.green(`Todo List`));
//taking name of user
let username = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name: ",
    },
]);
//empty data where you have to add first task
let empty_data = await inquirer.prompt([
    {
        name: "todo_list",
        type: "input",
        message: "your list is empty add some task: ",
    },
]);
//Array must habe add task that will add new task
let todo_list = ["Add Task", "Exit"];
todo_list.push(empty_data.todo_list);
//function it will for todo loop it will repeat task
async function todo_loop() {
    let todo_data = await inquirer.prompt([
        {
            name: "todo_list",
            type: "list",
            message: chalk.bold.blueBright(`${username.name} Todo List:`),
            choices: todo_list,
        },
    ]);
    //this will ask user to add more task
    if (todo_data.todo_list === "Add Task") {
        let add_data = await inquirer.prompt([
            {
                name: "new_data",
                type: "input",
                message: "Add New Task",
            },
        ]);
        todo_list.push(add_data.new_data);
        return todo_loop();
    }
    // this will exit program mean end program
    else if (todo_data.todo_list === "Exit") {
        console.log(`
    ` + chalk.bold.green(`
        .x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.
        Thanks for use our system.
        Follow me on:
        Linkedin: https://www.linkedin.com/in/zaeem-uddin/
        Github:   https://github.com/ZaeemUddinWork
        .x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.
    `) + `
---------------------------------------------------------------------------------
    `);
    }
    //this will shirt program to to Confirmatiopn() if it is other than add task
    else if (todo_data.todo_list !== "Add Task" && todo_data.todo_list !== "Exit") {
        Confirmatiopn();
    }
    async function Confirmatiopn() {
        let confirm = await inquirer.prompt([
            {
                name: "confirm",
                type: "list",
                message: `Does your task "${todo_data.todo_list}" completed ?`,
                choices: ["Yes", "No"],
            },
        ]);
        if (confirm.confirm === "Yes") {
            let index = todo_list.indexOf(todo_data.todo_list);
            //  let list_item = todo_data.todo_list;
            //  todo_list = todo_list.splice(0, index, list_item);
            let new_list = todo_list.filter((key, task) => task !== todo_data.todo_list);
            todo_list = new_list;
            return todo_loop();
        }
        else {
            todo_loop();
        }
    }
}
todo_loop();
/*
 todo_list = todo_list.filter((key,task) => task !== todo_data.todo_list )
     return todo_loop();*/
