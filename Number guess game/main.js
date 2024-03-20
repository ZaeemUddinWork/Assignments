import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.underline.green(`Welcome to Number Guess Game:`) + chalk.bold.underline.red(` !!Hell Edition!!`));
let user_data = await inquirer.prompt([
    {
        name: 'username',
        type: 'input',
        message: 'Enter your name: '
    }
]);
console.log(chalk.yellow(`
----------------------------------
${chalk.bold.underline.red(`!!Game Rule!!`)}
This Game has 3 Levels (` + chalk.greenBright(`Easy`) + ``, `` + chalk.yellow(`Normal`) + `,` + chalk.red(`Hard`) + `)
Scores depends on your levels :
` + chalk.greenBright(`Easy`) + `   = 1 point and guess number between (0,3)
` + chalk.yellow(`Normal`) + `  = 2 point and guess number between (0,6)
` + chalk.red(`Hard`) + `    = 3 point and guess number between (0,10)
` + chalk.greenBright(`Enjoy the game.`) + `
----------------------------------

`));
let Level = await inquirer.prompt([
    {
        name: 'Level',
        type: 'list',
        message: 'Select Level: ',
        choices: ['Easy', 'Normal', 'Hard']
    }
]);
let player_score = 0;
async function number_game() {
    function number_range(min, max) {
        let number = Math.floor(Math.random() * (max - min + 1)) + min;
        return number;
    }
    let game_number_range;
    if (Level.Level === 'Easy') {
        game_number_range = number_range(0, 3);
        questions();
    }
    else if (Level.Level === 'Normal') {
        game_number_range = number_range(0, 6);
        questions();
    }
    else if (Level.Level === 'Hard') {
        game_number_range = number_range(0, 10);
        questions();
    }
    async function questions() {
        console.log(chalk.bgBlueBright(`  ${user_data.username}  `) + chalk.yellow(` Score : ${player_score}`));
        let question = await inquirer.prompt([
            {
                name: 'number',
                type: 'number',
                message: `${user_data.username} guess the number: `
            }
        ]);
        if (question.number === game_number_range && Level.Level === 'Easy') {
            console.log(chalk.greenBright(`\n
        ----------------------------------------------
        Congratulation you guess the right number!!
        \tYou gain 1 point
        ----------------------------------------------
        \n`));
            ++player_score;
            return number_game();
        }
        else if (question.number === game_number_range && Level.Level === 'Normal') {
            console.log(chalk.greenBright(`\n
        ----------------------------------------------
        Congratulation you guess the right number!!
        \tYou gain 2 point
        ----------------------------------------------
        \n`));
            player_score += 2;
            return number_game();
        }
        else if (question.number === game_number_range && Level.Level === 'Hard') {
            console.log(chalk.greenBright(`\n
        ----------------------------------------------
        Congratulation you guess the right number!!
        \tYou gain 4 point
        ----------------------------------------------
        \n`));
            player_score += 4;
            return number_game();
        }
        else if ((question.number > 3 || question.number < 0) && Level.Level === 'Easy') {
            console.log(chalk.red(`\n
        ----------------------------------------------
        Enter Number Between 0 to 3
        ----------------------------------------------
        \n`));
            return want_to_play_again();
        }
        else if ((question.number > 6 || question.number < 0) && Level.Level === 'Normal') {
            console.log(chalk.red(`\n
        ----------------------------------------------
        Enter Number Between 0 to 6
        ----------------------------------------------
        \n`));
            return want_to_play_again();
        }
        else if ((question.number > 10 || question.number < 0) && Level.Level === 'Hard') {
            console.log(chalk.red(`\n
        ----------------------------------------------
        Enter Number Between 0 to 10
        ----------------------------------------------
        \n`));
            return want_to_play_again();
        }
        else {
            console.log(chalk.red(`\n
        ------------------
        !!Worng guess!!
        Right answer was: ${game_number_range} 
        Player name:  ${user_data.username}
        Player Score: ${player_score}
        !!you lose!!

        ------------------
        \n`));
            return want_to_play_again();
        }
    }
}
async function want_to_play_again() {
    let want_to_play = await inquirer.prompt([
        {
            name: 'want',
            type: 'list',
            message: 'Want to Play Again?',
            choices: ['Yes', 'No']
        }
    ]);
    if (want_to_play.want === "Yes") {
        let level = await inquirer.prompt([
            { name: 'level', type: 'list', message: 'Select Level: ', choices: ['Easy', 'Normal', 'Hard'] }
        ]);
        Level.Level = level.level;
        return number_game();
    }
    else {
        console.log(chalk.greenBright(`\n\n
        -----------------------------------------
        !! Thanks for Play this Game !!
        If you Fill Free than Follow me on Github
        [https://github.com/ZaeemUddinWork]
        ------------------------------------------
        \n\n
        `));
        player_score = 0;
    }
}
number_game();
