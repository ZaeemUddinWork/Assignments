import inquirer from "inquirer";
import chalk from "chalk";
//almost all variable that used in fuction but required out side of function
let login_2nd;
let ATM_options;
let cash_list;
let other_amount;
let Withdrawal;
let utility_option;
//title for ATM
console.log(chalk.bold.underline.bgGreenBright(`Welcome to Apna ATM`));
//Login First time
async function Atm_start() {
    let login = await inquirer.prompt([
        {
            name: "login",
            type: "input",
            message: "Bank ID:",
        },
        { name: "password", type: "password", message: "PIN: " },
    ]);
    if (login.login.trim() == "" || login.password.trim() == "") {
        console.log(chalk.red(`\n\n
    ------------------------------
    Bank ID or PIN should not be empty!!
    ------------------------------
    \n\n`));
        Atm_start();
    }
    else {
        //Login for 2nd time
        async function login2() {
            login_2nd = await inquirer.prompt([
                {
                    name: "login",
                    type: "input",
                    message: "Bank ID:",
                },
                {
                    name: "password",
                    type: "password",
                    message: "PIN: ",
                },
            ]);
            if (login_2nd.login != login.login ||
                login_2nd.password != login.password) {
                console.log(chalk.red(`\n\n
        ------------------------------
        Your Bank ID or PIN is Incorrect
        ------------------------------
        \n\n`));
                return login2();
            }
            else {
                return Bank_system();
            }
        }
        //function for bank balance
        function amount(min, max) {
            let bal = Math.floor(Math.random() * (max - min + 1)) + min;
            return bal;
        }
        let balance = amount(20000, 1000000);
        //Bank system that will deal with all option
        async function Bank_system() {
            console.log(chalk.yellow(`\n
      ------------------------------
      Current Bank Balance: ${balance}
      ------------------------------
      \n`));
            //bank balence is end
            ATM_options = await inquirer.prompt([
                {
                    name: "options",
                    type: "list",
                    message: chalk.greenBright("Welcome Back " + chalk.bold.italic(login.login) + " Select From Blow Option: "),
                    choices: ([
                        "Funds Transfer",
                        "Pay Utility Bills",
                        "Inquiry Balance",
                        "PIN Change",
                        "Withdrawal Cash",
                    ]),
                },
            ]);
            if (ATM_options.options == "Funds Transfer") {
                let info_otheruser = await inquirer.prompt([
                    {
                        name: "other_user_id",
                        type: "input",
                        message: "Enter Bank ID in which you want to transfer Funds: ",
                    },
                ]);
                if (info_otheruser.other_user_id === login.login) {
                    console.log(chalk.red(`\n\n
        ------------------------------
        You Can't transfer Cash at your own Account.
        ------------------------------
        \n\n`));
                    return Bank_system();
                }
                else {
                    Cash_list();
                }
            }
            else if (ATM_options.options == "Pay Utility Bills") {
                utility_option = await inquirer.prompt([
                    {
                        name: "utilityoption",
                        type: "list",
                        message: "Select Utility option which you want to Pay: ",
                        choices: ["Electricity", "Water & Sewerage", "Gass", "Internet"],
                    },
                ]);
                let untility_account = await inquirer.prompt([
                    {
                        name: "utiliy_number",
                        type: "input",
                        message: `Enter ${utility_option.utilityoption} account number: `,
                    },
                ]);
                //random unitily amount that will provide if you enter account number
                let utility_amount = amount(500, 20000);
                let wanttopay = await inquirer.prompt([
                    {
                        name: "payornot",
                        type: "list",
                        message: `
        --------------------------------
        ${utility_option.utilityoption}
        ${untility_account.utiliy_number}
        Amount to Pay: ${utility_amount}
        Want to Pay?
        --------------------------------
        `,
                        choices: ["Yes", "No"],
                    },
                ]);
                if (wanttopay.payornot === "Yes") {
                    let bal = balance;
                    balance = bal - utility_amount;
                    console.log(chalk.greenBright(`${utility_option.utilityoption} paid successfully. `));
                    continue_transaction();
                }
                else {
                    continue_transaction();
                }
            }
            //if user select balance inquiry
            else if (ATM_options.options == "Inquiry Balance") {
                //for Balance Inquiry
                console.log(chalk.yellowBright(`\n\n 
    --------------------------------
    Bank ID: ${login.login}
    Bank Balance: ${balance}
    --------------------------------
     \n\n`));
                return continue_transaction();
            }
            //if user select  pin change
            else if (ATM_options.options == "PIN Change") {
                //funtion for Password Change
                async function Pinchange() {
                    let current_password = await inquirer.prompt([
                        { name: "password", type: "password", message: "Current PIN: " },
                    ]);
                    if (current_password.password === login.password) {
                        let new_password = await inquirer.prompt([
                            { name: "password", type: "password", message: "New PIN: " },
                        ]);
                        if (new_password.password.trim() === '') {
                            console.log(chalk.red(`\n\n
              ------------------------------
              Password should not be empty!!
              ------------------------------
              \n\n`));
                            return Pinchange();
                        }
                        else {
                            login.password = new_password.password;
                            console.log(chalk.greenBright(`\n\n
            ------------------------------
            Your PIN has been changed!!
            ------------------------------
            \n\n`));
                            return login2();
                        }
                    }
                    else {
                        console.log(chalk.red(`\n\n
            ------------------------------
            Please Enter corrent PIN 
            ------------------------------
            \n\n`));
                        return Pinchange();
                    }
                }
                Pinchange();
            }
            //if user select Withdrawal Cash
            else if (ATM_options.options == "Withdrawal Cash") {
                {
                    Cash_list(); //it will ogto cash list where it will ask how many cash you want to take
                }
            }
        }
        //Cash List for Cash Transfer and Withdrawal
        async function Cash_list() {
            cash_list = await inquirer.prompt([
                {
                    name: "cash_option",
                    type: "list",
                    message: "Select amount: ",
                    choices: [1000, 5000, 10000, 15000, "Other Amount"], //amount
                },
            ]);
            if (cash_list.cash_option === "Other Amount") {
                //if user select other amount so it will ask how many amount you want to take or transfer
                other_amount = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter Amount: ",
                    },
                ]);
                if (other_amount.amount > 25000) {
                    //here we set limit for one time transection 25k user can't take above 25k
                    console.log(chalk.red(`You only can Trasnfer or Withdrawal 25000 at a time.`));
                    return Cash_list();
                }
                else if (other_amount.amount < 1000) {
                    //similarly here we set minimum amount 1000 can't take under 1000 amount
                    console.log(chalk.red(`Please Transfer or Withdrawal at least 1000 amount`));
                    return Cash_list();
                }
                else {
                    //if user select above 1000 and under 25k so it will do transaction
                    Withdrawal = other_amount.amount; //other_amount.amount is that amount that user givte to us
                    let bal = balance; //saveing balance to bal to assignt new value in balance
                    balance = bal - Withdrawal; //now current balance - transaction amount so bank balance will update
                    console.log(chalk.greenBright(`Transaction successfully done.`));
                    continue_transaction(); //goto continue_transaction
                }
            }
            else {
                Withdrawal = cash_list.cash_option; //cash_list.cash_option is that amount that user select from list other than otehr amount
                let bal = balance; //saveing balance to bal to assignt new value in balance
                balance = bal - Withdrawal; //now current balance - transaction amount so bank balance will update
                console.log(chalk.greenBright(`Transaction successfully done.`));
                continue_transaction(); //goto continue_transaction
            }
        }
        //after first task has been done so it will ask if you want to continue transaction or not if yes than will goto bank_system or if not than it will stop system
        async function continue_transaction() {
            //after first transaction of work than it will ask this
            let continue_or_not = await inquirer.prompt([
                {
                    name: "continueoption",
                    type: "list",
                    message: "Want to do Continue?",
                    choices: ["Yes", "No"],
                },
            ]);
            if (continue_or_not.continueoption === "Yes") { //if yes than it will go to bank system again
                Bank_system();
            }
            else { //if no than program will end 
                console.log(chalk.greenBright(`\n\n
        ----------------------------
        Thanks for use our system.
        ----------------------------
        \n\n`));
            }
        }
        //calling bank_system
        Bank_system();
    }
}
//this will start Atm login system
Atm_start();
