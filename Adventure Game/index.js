#! /usr/bin/env node
//╒══════════════importing files here══════════════════╕
import inquirer from "inquirer";
import chalk from "chalk";
//╚════════════importing files end here════════════════╝
//╒══════════════ Player class start here══════════════════╕
class player {
    username;
    original_health = 100;
    current_health = this.original_health;
    money = 100;
    attack_max = 40;
    attack_min = 20;
    attack_percentage = 0;
    constructor(name) {
        this.username = name;
    }
    healthdecrease(monster_attack_damage) {
        let health;
        health = this.current_health - monster_attack_damage;
        this.current_health = health;
    }
    attackdamage() {
        return Math.floor(number_generator(this.attack_max, this.attack_min));
    }
    healthupgrade(health) {
        this.original_health = Math.floor(this.original_health + (this.original_health * health));
        this.current_health = this.original_health;
    }
    healthfull() {
        return this.current_health = this.original_health;
    }
    healthheal(health_percent) {
        let health = this.original_health * health_percent;
        return this.current_health += health;
    }
    healthconfirm() {
        return this.original_health;
    }
}
//╚════════════Player class end here════════════════╝
//╒══════════════ Item class start here══════════════════╕
class items {
    names = [];
    number = [];
}
//╚════════════ Item class end here════════════════╝
//---------------------------
let weapon = new items();
weapon.names.push("Go Back");
weapon.number.push(1);
let armor = new items();
armor.names.push("Go Back");
armor.number.push(1);
let heal = new items();
heal.names.push("Go Back");
heal.number.push(1);
let magics = new items();
magics.names.push("Go Back");
magics.number.push(1);
//╒══════════════ Opponent class start here══════════════════╕
class opponent {
    m_name = "";
    health = 0;
    attack_max = 0;
    attack_min = 0;
    attack_percentage = 0;
    healthdecrease(Player_attack_damage) {
        let health;
        health = this.health - Player_attack_damage;
        this.health = health;
    }
    attackdamage() {
        return Math.floor(number_generator(this.attack_max, this.attack_min));
    }
}
//╚════════════ Opponent class end here════════════════╝
//╒══════════════ Opponent define here ══════════════════╕
let monster = new opponent();
//╚════════════ Opponent define end here════════════════╝
//╒══════════════ Opponent list start here ══════════════════╕
let opponent_list = {
    Rank_E: ["Goblin", "Assassin", "Archer", "Knights"],
    Rank_D: [
        "Stone Golem",
        "Black-Shadow Razan",
        "Razor-Clawed Briga",
        "Steel-Fanged Raikan",
    ],
    Rank_C: [
        "Blue Venom-Fanged Kasaka",
        "Giant Arachnid Buryura",
        "Werewolves",
        "Dungeon Jackal",
    ],
    Rank_B: ["Ice Elves", "Ice Bears", "Magician", "Yetis"],
    Rank_A: ["Blood-Red Commander Igris", "Kaisellin", "Earth Golem", "Nagas"],
    Rank_S: ["Architect", "Cerberus", "Baruka", "Vulcan"],
};
//╚════════════ Opponent list end here════════════════╝
//╒════════════ Game title start here═════════════╕
console.log(chalk.redBright(`
╔═╗┌─┐┬  ┌─┐  ╦  ┌─┐┬  ┬┌─┐┬  ┬┌┐┌┌─┐
╚═╗│ ││  │ │  ║  ├┤ └┐┌┘├┤ │  │││││ ┬
╚═╝└─┘┴─┘└─┘  ╩═╝└─┘ └┘ └─┘┴─┘┴┘└┘└─┘
              ${chalk.greenBright(`
                  ╔═╗┌┬┐┬  ┬┌─┐┌┐┌┌┬┐┬ ┬┬─┐┌─┐  ╔═╗┌─┐┌┬┐┌─┐
                  ╠═╣ ││└┐┌┘├┤ │││ │ │ │├┬┘├┤   ║ ╦├─┤│││├┤ 
                  ╩ ╩─┴┘ └┘ └─┘┘└┘ ┴ └─┘┴└─└─┘  ╚═╝┴ ┴┴ ┴└─┘`)}
`));
console.log();
//╚════════════ Game title end here════════════════╝
//╒════════════ User name taking start here ═════════════╕
let user = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name: ",
        default: "Sung Jinwoo",
    },
]);
//╚════════════ User name taking end here ════════════════╝
//╒══════════════ Player define here ══════════════════╕
let userdata = new player(user.name);
//╚════════════ Player define end here════════════════╝
//╒════════════ Founctions start here ═════════════╕
//fuctiong for number generator
function number_generator(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//fuctiong for remove array item selected by user 
function removeByFilter(arr, selection) {
    return arr.filter((item) => item !== selection);
}
//╚════════════ Founctions end here════════════════╝
//╒════════════ Game start loop start here ═════════════╕
let start_tab = true;
//-------------------------------------------------------
while (start_tab) {
    //╒════════════ Game start menu start here ═════════════╕
    let game_option = await inquirer.prompt([
        {
            name: "opt",
            type: "list",
            message: chalk.bold.redBright(`\n
      ╔═*.·:·..·:·..·:·..·:·..·:·.✧ ✦ ✧.·:·..·:·..·:·..·:·..·:·.*═╗

                          Username: ${chalk.bold.greenBright(userdata.username)}
                          Health: ${chalk.bold.greenBright(userdata.current_health)}
                          Money: ${chalk.bold.yellowBright(userdata.money)}

      ╚═*.·:·..·:·..·:·..·:·..·:·.✧ ✦ ✧.·:·..·:·..·:·..·:·..·:·.*═╝
      Select Option:`),
            choices: ["Start Adventure", "Shop", "Game Info", "Leave Game"],
        },
        {
            name: "rank",
            type: "list",
            message: "Select Rank of Dungeon Gate (level Easy - Hard (D-S)):",
            choices: ["Rank E", "Rank D", "Rank C", "Rank B", "Rank A", "Rank S"],
            when(game_option) {
                return game_option.opt === "Start Adventure";
            },
        },
    ]);
    //╚════════════ Game start menu end here════════════════╝
    let { opt, rank } = game_option;
    //╒════════════ if user select Start Adventure start here ═════════════╕
    if (opt === "Start Adventure") {
        //----------------
        let monster_attack_damage = monster.attackdamage();
        let health = 0;
        let Rank = [];
        let Rank_level = "";
        let Player_attack_damage = number_generator(70, 30);
        let money = 0;
        //-------------------------Fuction for Ranks and their relative data like power of monster accodring to ranks 
        function monster_detail() {
            if (rank === "Rank E") { //for rank D
                Rank = opponent_list.Rank_E; //THIS WILL SELECT RANK MONSTER ARRAY
                Rank_level = "Rank E";
                health = Math.floor(number_generator(60, 40)); //THIS WILL GENETRATE HEALTH FOR MONSTER
                monster.attack_max = 40; //MONSTER ATTACK MAX
                monster.attack_min = 25; //MONSTER ATTACK MIN
                money = Math.floor(number_generator(40, 20));
            }
            else if (rank === "Rank D") { //for rank D
                Rank = opponent_list.Rank_D; //THIS WILL SELECT RANK MONSTER ARRAY
                Rank_level = "Rank D";
                monster.attack_max = 60; //MONSTER ATTACK MAX
                monster.attack_min = 30; //MONSTER ATTACK MIN
                health = Math.floor(number_generator(150, 60)); //THIS WILL GENETRATE HEALTH FOR MONSTER
                money = Math.floor(number_generator(60, 25)); //THIS WILL ASSIGN MONEY ACCORDING TO MONSTER LEVEL
            }
            else if (rank === "Rank C") { //for rank C
                Rank = opponent_list.Rank_C; //THIS WILL SELECT RANK MONSTER ARRAY
                Rank_level = "Rank C";
                health = Math.floor(number_generator(250, 160)); //THIS WILL GENETRATE HEALTH FOR MONSTER
                monster.attack_max = 80; //MONSTER ATTACK MAX
                monster.attack_min = 40; //MONSTER ATTACK MIN
                money = Math.floor(number_generator(85, 40)); //THIS WILL ASSIGN MONEY ACCORDING TO MONSTER LEVEL
            }
            else if (rank === "Rank B") { //for rank B
                Rank = opponent_list.Rank_B; //THIS WILL SELECT RANK MONSTER ARRAY
                Rank_level = "Rank B";
                health = Math.floor(number_generator(350, 260)); //THIS WILL GENETRATE HEALTH FOR MONSTER
                monster.attack_max = 95; //MONSTER ATTACK MAX
                monster.attack_min = 50; //MONSTER ATTACK MIN
                money = Math.floor(number_generator(100, 55)); //THIS WILL ASSIGN MONEY ACCORDING TO MONSTER LEVEL
            }
            else if (rank === "Rank A") { //for rank A
                Rank = opponent_list.Rank_A; //THIS WILL SELECT RANK MONSTER ARRAY
                Rank_level = "Rank A";
                health = Math.floor(number_generator(450, 360)); //THIS WILL GENETRATE HEALTH FOR MONSTER
                monster.attack_max = 100; //MONSTER ATTACK MAX
                monster.attack_min = 60; //MONSTER ATTACK MIN
                money = Math.floor(number_generator(120, 70)); //THIS WILL ASSIGN MONEY ACCORDING TO MONSTER LEVEL
            }
            else if (rank === "Rank S") { //for rank S
                Rank = opponent_list.Rank_S; //THIS WILL SELECT RANK MONSTER ARRAY
                Rank_level = "Rank S";
                health = Math.floor(number_generator(550, 460)); //THIS WILL GENETRATE HEALTH FOR MONSTER
                monster.attack_max = 130; //MONSTER ATTACK MAX
                monster.attack_min = 60; //MONSTER ATTACK MIN
                money = Math.floor(number_generator(150, 100)); //THIS WILL ASSIGN MONEY ACCORDING TO MONSTER LEVEL
            }
        }
        monster_detail(); //CALLING FUNCTION
        console.log(chalk.bold.greenBright(`\nYou are passing ${chalk.bold.yellow(Rank_level)}  Dungeon gate !!`));
        let further_go = true;
        while (further_go) { //this loop will continue if user win and say yes to continue more fight in same rank 
            monster_detail();
            userdata.healthfull();
            let monster_number = number_generator(3, 0); //this will generate number for monster name array and select monster
            let monster_name = Rank[monster_number];
            monster.m_name = monster_name;
            monster.health = health; //assigning monster health to class
            console.log(chalk.bold.cyanBright(`\nMonster ${chalk.bold.redBright(monster.m_name)} appeared in you way!! `));
            console.log(chalk.bold.red(`
      ══════════════════•°• ⚠  ${Rank_level}  ⚠ •°•══════════════════
      \t\t\t${chalk.bold.greenBright(userdata.username)} HP: ${chalk.bold.yellow(userdata.current_health)}
             \t\t\tVS
      \t\t\t${chalk.bold.magenta(monster.m_name)} HP: ${chalk.bold.yellow(monster.health)}
      ═══════════════════════•°• ⚠ •°•═══════════════════════
      `));
            let fighting = true;
            while (fighting) {
                // menu for fighting with monster 
                let fight_option = await inquirer.prompt([
                    {
                        name: "opt",
                        type: "list",
                        message: "Select Action:",
                        choices: [
                            "Attack to Monster",
                            "Use Magic Item",
                            "Use Heal Item",
                            "Run ...!",
                        ],
                    },
                ]);
                if (fight_option.opt === "Attack to Monster") { //if player select attack to monster 
                    let user_attack = number_generator(1, 0); //this will tell is player attack to monster or not 
                    let oppenent_attack = number_generator(1, 0); //this will tell is monster attack to player or not 
                    let Player_attack_damage = userdata.attackdamage();
                    let monster_attack_damage = monster.attackdamage();
                    if (user_attack === 1 && oppenent_attack === 0) { //1 mean player attacked to mosnter and zero mean player counld'nt attack to monster
                        Player_attack_damage = Math.floor(Player_attack_damage +
                            Player_attack_damage * userdata.attack_percentage //player damage will be decided with attack damage plue attack damage precentage
                        );
                        monster.healthdecrease(Player_attack_damage);
                        monster.health < 0 ? (monster.health = 0) : monster.health; //if monster health less than zero than equal to zero
                        userdata.current_health < 0 ? (userdata.current_health = 0) : userdata.current_health; //if player health less than zero than equal to zero
                        console.log(`
              ${chalk.bold.magenta(`»»—————————————————————- ${userdata.username} vs ${monster.m_name} —————————————————————-««`)}

                   \t\t   ${chalk.bold.redBright(`Monster Health:`)}  ${chalk.bold.yellowBright(monster.health)} got Damage :${chalk.bold.yellowBright(Player_attack_damage)}

                   \t\t   ${chalk.bold.greenBright(`!! You dodged opponent attack !!`)}

              ${chalk.bold.magenta(`»»—————————————————————————————————-⍟—————————————————————————————————-««`)}
    
                    `);
                    }
                    else if (user_attack === 0 && oppenent_attack === 1) {
                        monster_attack_damage = Math.floor(monster_attack_damage -
                            monster_attack_damage * monster.attack_percentage);
                        userdata.healthdecrease(monster_attack_damage);
                        monster.health < 0 ? (monster.health = 0) : monster.health;
                        userdata.current_health < 0 ? (userdata.current_health = 0) : userdata.current_health;
                        console.log(`
              ${chalk.bold.magenta(`»»—————————————————————- ${userdata.username} vs ${monster.m_name} —————————————————————-««`)}

              \t\t   ${chalk.bold.redBright(`!! You missed the attack !!`)}

              \t\t   ${chalk.bold.greenBright(`Player Health:`)}  ${chalk.bold.blueBright(userdata.current_health)} got Damage :${chalk.bold.redBright(monster_attack_damage)}

              ${chalk.bold.magenta(`»»—————————————————————————————————-⍟—————————————————————————————————-««`)}
    
                    `);
                    }
                    else if (user_attack === 1 && oppenent_attack === 1) {
                        monster_attack_damage = Math.floor(monster_attack_damage -
                            monster_attack_damage * monster.attack_percentage);
                        userdata.healthdecrease(monster_attack_damage);
                        Player_attack_damage = Math.floor(Player_attack_damage +
                            Player_attack_damage * userdata.attack_percentage);
                        monster.healthdecrease(Player_attack_damage);
                        monster.health < 0 ? (monster.health = 0) : monster.health;
                        userdata.current_health < 0 ? (userdata.current_health = 0) : userdata.current_health;
                        console.log(`
              ${chalk.bold.magenta(`»»—————————————————————- ${userdata.username} vs ${monster.m_name} —————————————————————-««`)}

                   \t\t    ${chalk.bold.redBright(`Monster Health:`)}  ${chalk.bold.yellowBright(monster.health)} got Damage :${chalk.bold.yellowBright(Player_attack_damage)}

                   \t\t    ${chalk.bold.greenBright(`Player Health:`)}  ${chalk.bold.blueBright(userdata.current_health)} got Damage :${chalk.bold.redBright(monster_attack_damage)}

              ${chalk.bold.magenta(`»»—————————————————————————————————-⍟—————————————————————————————————-««`)}
    
                    `);
                    }
                    else if (user_attack === 0 && oppenent_attack === 0) {
                        console.log(`
              ${chalk.bold.magenta(`»»—————————————————————- ${userdata.username} vs ${monster.m_name} —————————————————————-««`)}

                   \t\t   ${chalk.bold.redBright(`!! You missed the attack !!`)}

                   \t\t   ${chalk.bold.greenBright(`!! You dodged opponent attack !!`)} 

              ${chalk.bold.magenta(`»»—————————————————————————————————-⍟—————————————————————————————————-««`)}
    
                    `);
                    }
                }
                //╒════════════ If player select use magic item
                else if (fight_option.opt === "Use Magic Item") {
                    let magic_item = await inquirer.prompt([
                        {
                            name: "item",
                            type: "list",
                            message: chalk.bold.magentaBright(`Select Magic Item: `),
                            choices: magics.names,
                        },
                    ]);
                    if (magic_item.item != "Go Back") {
                        let confirm = await inquirer.prompt({
                            name: "ask",
                            type: "list",
                            message: chalk.bold.cyanBright(`Do you really want to use this item?`),
                            choices: ["Yes", "No"],
                        });
                        if (confirm.ask === "Yes") {
                            if (magic_item.item === "Unicorn's Horn") {
                                let life = monster.health * 0.5;
                                monster.health = life;
                                console.log(chalk.bold.magenta(`
                  ╔══════════════*.·:·.✧ ✦✧.·:·.*═════════════════╗

                  \tYou used ${chalk.bold.cyanBright(magic_item.item)}
                  \tMonster health: ${chalk.bold.yellow(life)} 
                  
                  ╚══════════════*.·:·.✧ ✦✧.·:·.*═════════════════╝
                  `));
                                let index = magics.names.indexOf(magic_item.item);
                                magics.number[index] -= 1;
                                if (magics.number[index] <= 0) {
                                    magics.names = removeByFilter(magics.names, magic_item.item);
                                    magics.number = removeByFilter(magics.number, magics.number[index]);
                                }
                            }
                            else if (magic_item.item === "Mirror Image") {
                                monster.attack_percentage = 0.5;
                                console.log(chalk.bold.magenta(`
                  ╔══════════════*.·:·.✧ ✦✧.·:·.*═════════════════╗

                  \tYou used ${chalk.bold.cyanBright(magic_item.item)}
                  \tMonster Attack damage: ${chalk.bold.yellow(`50% down`)} 
                  
                  ╚══════════════*.·:·.✧ ✦✧.·:·.*═════════════════╝
                  `));
                                let index = magics.names.indexOf(magic_item.item);
                                magics.number[index] -= 1;
                                if (magics.number[index] <= 0) {
                                    magics.names = removeByFilter(magics.names, magic_item.item);
                                    magics.number = removeByFilter(magics.number, magics.number[index]);
                                }
                            }
                            else if (magic_item.item === "Wrath of Zeus") {
                                let life = 0;
                                monster.health = life;
                                console.log(chalk.bold.magenta(`
                  ╔══════════════*.·:·.✧ ✦✧.·:·.*═════════════════╗

                  \tYou used ${chalk.bold.cyanBright(magic_item.item)}
                  \tMonster health: ${chalk.bold.yellow(life)} 
                  
                  ╚══════════════*.·:·.✧ ✦✧.·:·.*═════════════════╝
                  `));
                                let index = magics.names.indexOf(magic_item.item);
                                magics.number[index] -= 1;
                                if (magics.number[index] <= 0) {
                                    magics.names = removeByFilter(magics.names, magic_item.item);
                                    magics.number = removeByFilter(magics.number, magics.number[index]);
                                }
                                else if (magic_item === "Go Back") {
                                    fighting = true;
                                }
                            }
                        }
                    }
                    else {
                        fighting = true;
                    }
                }
                //╒════════════ If player select use heal item
                else if (fight_option.opt === "Use Heal Item") {
                    let heal_item = await inquirer.prompt([
                        {
                            name: 'item',
                            type: 'list',
                            message: chalk.bold.cyanBright('Select item: '),
                            choices: heal.names
                        }
                    ]);
                    if (heal_item.item != "Go Back") {
                        let confirm = await inquirer.prompt({
                            name: "ask",
                            type: "list",
                            message: chalk.bold.cyanBright(`Do you really want to use this item?`),
                            choices: ["Yes", "No"],
                        });
                        if (confirm.ask === "Yes") {
                            //---------
                            if (userdata.current_health != userdata.healthconfirm()) {
                                if (heal_item.item === "Hunter's Potion") {
                                    userdata.healthheal(0.2);
                                    userdata.current_health > userdata.healthconfirm() ? (userdata.healthfull()) : (userdata.current_health);
                                    console.log(chalk.bold.greenBright(`
                  ╔════════════════ ❀•°❀°•❀ ════════════════════╗

                  \tYou used ${chalk.bold.magenta(heal_item.item)}
                  \t${userdata.username} health: ${chalk.bold.yellow(userdata.current_health)} 
                  
                  ╚════════════════ ❀•°❀°•❀ ════════════════════╝
                  `));
                                    let index = heal.names.indexOf(heal_item.item);
                                    heal.number[index] -= 1;
                                    if (heal.number[index] <= 0) {
                                        heal.names = removeByFilter(heal.names, heal_item.item);
                                        heal.number = removeByFilter(heal.number, heal.number[index]);
                                    }
                                }
                                else if (heal_item.item === "Elixir of the White Tiger") {
                                    userdata.healthheal(0.4);
                                    userdata.current_health > userdata.healthconfirm() ? (userdata.healthfull()) : (userdata.current_health);
                                    console.log(chalk.bold.greenBright(`
                  ╔════════════════ ❀•°❀°•❀ ════════════════════╗

                  \tYou used ${chalk.bold.magenta(heal_item.item)}
                  \t${userdata.username} health: ${chalk.bold.yellow(userdata.current_health)} 
                  
                  ╚════════════════ ❀•°❀°•❀ ════════════════════╝
                  `));
                                    let index = heal.names.indexOf(heal_item.item);
                                    heal.number[index] -= 1;
                                    if (heal.number[index] <= 0) {
                                        heal.names = removeByFilter(heal.names, heal_item.item);
                                        heal.number = removeByFilter(heal.number, heal.number[index]);
                                    }
                                }
                                else if (heal_item.item === "Shadow Monarch's Blessing") {
                                    userdata.healthheal(0.6);
                                    userdata.current_health > userdata.healthconfirm() ? (userdata.healthfull()) : (userdata.current_health);
                                    console.log(chalk.bold.greenBright(`
                  ╔════════════════ ❀•°❀°•❀ ════════════════════╗

                  \tYou used ${chalk.bold.magenta(heal_item.item)}
                  \t${userdata.username} health: ${chalk.bold.yellow(userdata.current_health)} 
                  
                  ╚════════════════ ❀•°❀°•❀ ════════════════════╝
                  `));
                                    let index = heal.names.indexOf(heal_item.item);
                                    heal.number[index] -= 1;
                                    if (heal.number[index] <= 0) {
                                        heal.names = removeByFilter(heal.names, heal_item.item);
                                        heal.number = removeByFilter(heal.number, heal.number[index]);
                                    }
                                }
                                else if (heal_item.item === "Ice Heart") {
                                    userdata.healthheal(0.8);
                                    userdata.current_health > userdata.healthconfirm() ? (userdata.healthfull()) : (userdata.current_health);
                                    console.log(chalk.bold.greenBright(`
                  ╔════════════════ ❀•°❀°•❀ ════════════════════╗

                  \tYou used ${chalk.bold.magenta(heal_item.item)}
                  \t${userdata.username} health: ${chalk.bold.yellow(userdata.current_health)} 
                  
                  ╚════════════════ ❀•°❀°•❀ ════════════════════╝
                  `));
                                    let index = heal.names.indexOf(heal_item.item);
                                    heal.number[index] -= 1;
                                    if (heal.number[index] <= 0) {
                                        heal.names = removeByFilter(heal.names, heal_item.item);
                                        heal.number = removeByFilter(heal.number, heal.number[index]);
                                    }
                                }
                                else if (heal_item.item === "Giant's Blood") {
                                    userdata.healthfull();
                                    console.log(chalk.bold.greenBright(`
                  ╔════════════════ ❀•°❀°•❀ ════════════════════╗

                  \tYou used ${chalk.bold.magenta(heal_item.item)}
                  \t${userdata.username} health: ${chalk.bold.yellow(userdata.current_health)} 
                  
                  ╚════════════════ ❀•°❀°•❀ ════════════════════╝
                  `));
                                    let index = heal.names.indexOf(heal_item.item);
                                    heal.number[index] -= 1;
                                    if (heal.number[index] <= 0) {
                                        heal.names = removeByFilter(heal.names, heal_item.item);
                                        heal.number = removeByFilter(heal.number, heal.number[index]);
                                    }
                                }
                            }
                            else {
                                console.log(chalk.bold.redBright(`\n
                ╔════════════════ ❀•°❀°•❀ ════════════════════╗

                  You can use Healt item when your Health is max
                \t${userdata.username} health: ${chalk.bold.yellow(userdata.current_health)} 
                
                ╚════════════════ ❀•°❀°•❀ ════════════════════╝
                \n`));
                            }
                        }
                    }
                    else {
                        fighting = true;
                    }
                }
                //╒════════════ If player select Run
                else if (fight_option.opt === "Run ...!") {
                    fighting = false;
                    further_go = false;
                }
                //╒════════════ If monster health less or equal to zero and player health greater than zero player win
                if (monster.health <= 0 && userdata.current_health > 0) {
                    console.log(chalk.bold.greenBright(`
            ╔══════════════✿══╡°˖✧✿✧˖°╞══✿══════════════╗

          \t\t!! You Win !!
          \t\tMoney:${chalk.bold.yellowBright(userdata.money)}

            ╚══════════════✿══╡°˖✧✿✧˖°╞══✿══════════════╝
          `));
                    userdata.money += Math.floor(money);
                    let want_to_continue = await inquirer.prompt([
                        {
                            name: "want_con",
                            type: "list",
                            message: "Want to Continue Advanture in this Dungeon ?",
                            choices: ["Yes", "No"],
                            default: "Yes",
                        },
                    ]);
                    want_to_continue.want_con === "Yes"
                        ? ((further_go = true), (fighting = false))
                        : ((further_go = false), (fighting = false));
                }
                //╒════════════ If player health less or equal to zero and monster health greater than zero player lose 
                else if (userdata.current_health <= 0 && monster.health > 0) {
                    console.log(chalk.bold.redBright(`
            ┍━━━━━━━━━━━━━━━━━━━━☽【❖】☾━━━━━━━━━━━━━━━━━━━━┑

          \t\t!! Game Over !!
          \t\t\t!! You Lose !!
          \t\tMoney:${chalk.bold.yellowBright(userdata.money)}

            ┕━━━━━━━━━━━━━━━━━━━━☽【❖】☾━━━━━━━━━━━━━━━━━━━━┙
          `));
                    userdata.money = Math.floor(userdata.money + money * 0.1);
                    further_go = false;
                    fighting = false;
                    userdata.healthfull();
                }
                //╒════════════ If monster health less or equal to zero and player health less or equal to zero player Draw 
                else if (userdata.current_health <= 0 && monster.health <= 0) {
                    console.log(chalk.bold.magentaBright(`
          ╔══════════════✿══ஓ๑♡๑ஓ══✿══════════════╗

          \t\t!! Game Draw !!
          \t\tMoney:${chalk.bold.yellowBright(userdata.money)}

          ╚══════════════✿══ஓ๑♡๑ஓ══✿══════════════╝
          `));
                    userdata.money = Math.floor(userdata.money + money * 0.5);
                    further_go = false;
                    fighting = false;
                    userdata.healthfull();
                }
            }
        }
    }
    //╚════════════ if user select Start Adventure end here════════════════╝
    //╒════════════ if user select Shop start here ═════════════╕
    else if (opt === "Shop") {
        let want_shop = true;
        do {
            let shop = await inquirer.prompt([
                {
                    name: "items_category",
                    type: "list",
                    message: "Select Items category you want to buy:",
                    choices: [
                        "Weapons",
                        "Shields and Armors",
                        "Healing items",
                        "Magic items",
                        "Leave Shop",
                    ],
                },
                {
                    name: "weapons",
                    type: "list",
                    message: `
          ╔═══━━━───━━━───━━━───━━━───━━━───━━━───━━━─── • ───━━━───━━━───━━━───━━━───━━━───━━━───━━━━═══╗

                                    
                                \t\t${chalk.bold.bgBlueBright(`!!    Category Weapon (Shop)   !!`)}
                                    
  ${chalk.yellowBright(`
              Note: If you purchase Weapons this will increase you Attacking damage to opponent,
                      You will know attacking damage of waepon when you select to purchase it.
                                              !! All wapoens are swords !!
                      !! You can't win with upper class Dungeon monster without Powerful Weapon !! 
              `)} 
          ╚═══━━━───━━━───━━━───━━━───━━━───━━━───━━━─── • ───━━━───━━━───━━━───━━━───━━━───━━━───━━━━═══╝
                        `,
                    choices: [
                        "Kasaka's Venom Fang Sowrd",
                        "Knight Killer Sowrd",
                        "Baruka’s Daggers Sword",
                        "Demon King's Daggers Sowrd",
                        "Demon King's Longsword",
                        "Kamish's Wrath Sowrds",
                        "Go Back",
                    ],
                    when(shop) {
                        return shop.items_category === "Weapons";
                    },
                },
                {
                    name: "armors",
                    type: "list",
                    message: `
          ╔═══━━━───━━━───━━━───━━━───━━━───━━━───━━━─── • ───━━━───━━━───━━━───━━━───━━━───━━━───━━━━═══╗

                      \t\t${chalk.bold.bgGrey(`!!    Category Shields and Armors (Shop)   !!`)}
                         
${chalk.yellowBright(`
          Note: If you purchase Shields and Armors this will decrease oppenent Attacking damage,
                You will know desrease in attacking damage of oppenent when you select to purchase it.
                !! You can't win with upper class Dungeon monster without Powerful Shields and Armors !! 
        `)} 
          ╚═══━━━───━━━───━━━───━━━───━━━───━━━───━━━─── • ───━━━───━━━───━━━───━━━───━━━───━━━───━━━━═══╝
                      `,
                    choices: [
                        "Red Knight’s Helmet",
                        "Red Knight’s Chestplate",
                        "Red Knight’s legging",
                        "Red Knight’s  Shoes",
                        "High Magician’s Ring",
                        "Gatekeeper's Necklace",
                        "Red Knight’s Shield",
                        "Go Back",
                    ],
                    when(shop) {
                        return shop.items_category === "Shields and Armors";
                    },
                },
                {
                    name: "healing",
                    type: "list",
                    message: `
          ╔═══━━━───━━━───━━━───━━━───━━━───━━━───━━━─── • ───━━━───━━━───━━━───━━━───━━━───━━━───━━━━═══╗
        
              \t\t${chalk.bold.bgGreenBright(`!!    Category Healing items (Shop)   !!`)}
              
            ${chalk.yellowBright(`
            Note:       If you purchase Healing items this will increase your health.
                    You will know increase in health items detail when you select to purchase it.
            !! You can't win with upper class Dungeon monster without Healing items !! 
            `)} 
          ╚═══━━━───━━━───━━━───━━━───━━━───━━━───━━━─── • ───━━━───━━━───━━━───━━━───━━━───━━━───━━━━═══╝
                `,
                    choices: [
                        "Hunter's Potion",
                        "Elixir of the White Tiger",
                        "Shadow Monarch's Blessing",
                        "Ice Heart",
                        "Giant's Blood",
                        "Go Back",
                    ],
                    when(shop) {
                        return shop.items_category === "Healing items";
                    },
                },
                {
                    name: "magic",
                    type: "list",
                    message: `
          ╔═══━━━───━━━───━━━───━━━───━━━───━━━───━━━─── • ───━━━───━━━───━━━───━━━───━━━───━━━───━━━━═══╗

                \t\t${chalk.bold.bgGreenBright(`!!    Category Magic items (Shop)   !!`)}
                
${chalk.yellowBright(`
              Note: If you purchase Magic item this will depends on your items eithr to decrease
                        monster health or increase your attacking damage.
                    You will know Magic item detail when you select to purchase it.
              !! You might need magics items to win with upper class Dungeon monsters !! 
                `)} 
          ╚═══━━━───━━━───━━━───━━━───━━━───━━━───━━━─── • ───━━━───━━━───━━━───━━━───━━━───━━━───━━━━═══╝
                `,
                    choices: [
                        "Unicorn's Horn",
                        "Mirror Image",
                        "Wrath of Zeus",
                        "Go Back",
                    ],
                    when(shop) {
                        return shop.items_category === "Magic items";
                    },
                },
            ]);
            let want_to_purchase = async (name, price, detail, item_cat) => {
                let question = await inquirer.prompt({
                    name: "verify",
                    type: "list",
                    message: `
              ╭─━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━─╮

                    Item name: ${chalk.greenBright(name)}
                    Price: ${chalk.yellow(price)}
                    Detail: ${detail}

              ╰─━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━─╯
                        `,
                    choices: ["Yes", "No"],
                });
                if (question.verify === "Yes") {
                    if (userdata.money >= price) {
                        if (item_cat === "weapons") {
                            if (!weapon.names.includes(name)) {
                                userdata.money -= price;
                                console.log(chalk.bold.greenBright(`
              ┌──────────── ∘°❉°∘ ────────────┐

                     Purchase Successful

              └──────────── ∘°❉°∘ ────────────┘  
              \n`));
                                weapon.names.push(name);
                                if (name === "Kasaka's Venom Fang Sowrd") {
                                    userdata.attack_percentage += 0.25;
                                }
                                else if (name === "Knight Killer Sowrd") {
                                    userdata.attack_percentage += 0.4;
                                }
                                else if (name === "Baruka’s Daggers Sword") {
                                    userdata.attack_percentage += 0.6;
                                }
                                else if (name === "Demon King's Daggers Sowrd") {
                                    userdata.attack_percentage += 0.8;
                                }
                                else if (name === "Kamish's Wrath Sowrds") {
                                    userdata.attack_percentage += 1;
                                }
                            }
                            else {
                                console.log(chalk.bold.red(`
                ╔══════════ஓ๑♡๑ஓ══════════╗

                    You already have this

                ╚══════════ஓ๑♡๑ஓ══════════╝   
              `));
                            }
                        }
                        else if (item_cat === "Armor") {
                            userdata.money -= price;
                            if (!armor.names.includes(name)) {
                                console.log(chalk.bold.greenBright(`
              ┌──────────── ∘°❉°∘ ────────────┐

                     Purchase Successful

              └──────────── ∘°❉°∘ ────────────┘  
              \n`));
                                armor.names.push(name);
                                if (name === "Red Knight’s Helmet" ||
                                    name === "Red Knight’s Chestplate" ||
                                    name === "Red Knight’s legging" ||
                                    name === "Red Knight’s  Shoes") {
                                    userdata.healthupgrade(0.2);
                                    monster.attack_percentage += 0.1;
                                }
                                else if (name === "High Magician’s Ring") {
                                    userdata.healthupgrade(0.4);
                                    monster.attack_percentage += 0.05;
                                }
                                else if (name === "Gatekeeper's Necklace") {
                                    userdata.healthupgrade(0.5);
                                    monster.attack_percentage += 0.15;
                                }
                                else if (name === "Red Knight’s Shield") {
                                    monster.attack_percentage += 0.2;
                                }
                            }
                            else {
                                console.log(chalk.bold.red(`
                  ╔══════════ஓ๑♡๑ஓ══════════╗
  
                      You already have this
  
                  ╚══════════ஓ๑♡๑ஓ══════════╝   
                `));
                            }
                        }
                        else if (item_cat === "healing") {
                            userdata.money -= price;
                            if (!heal.names.includes(name)) {
                                console.log(chalk.bold.greenBright(`
                  ┌──────────── ∘°❉°∘ ────────────┐
    
                         Purchase Successful
    
                  └──────────── ∘°❉°∘ ────────────┘  
                  \n`));
                                heal.names.push(name);
                                heal.number.push(1);
                            }
                            else {
                                userdata.money -= price;
                                console.log(chalk.bold.greenBright(`
                  ┌──────────── ∘°❉°∘ ────────────┐
    
                         Purchase Successful
    
                  └──────────── ∘°❉°∘ ────────────┘  
                  \n`));
                                let index = heal.names.indexOf(name);
                                heal.number[index] += 1;
                            }
                        }
                        else if (item_cat === "magic") {
                            userdata.money -= price;
                            if (!magics.names.includes(name)) {
                                console.log(chalk.bold.greenBright(`
                  ┌──────────── ∘°❉°∘ ────────────┐
    
                         Purchase Successful
    
                  └──────────── ∘°❉°∘ ────────────┘  
                  \n`));
                                magics.names.push(name);
                                magics.number.push(1);
                            }
                            else {
                                userdata.money -= price;
                                console.log(chalk.bold.greenBright(`
              ┌──────────── ∘°❉°∘ ────────────┐

                     Purchase Successful

              └──────────── ∘°❉°∘ ────────────┘  
              \n`));
                                let index = magics.names.indexOf(name);
                                magics.number[index] += 1;
                            }
                        }
                    }
                    else {
                        console.log(chalk.bold.red(`
                      ╔════════════════════ஓ๑♡๑ஓ════════════════════╗
    
                           You haven't enough money to purchase it
    
                      ╚════════════════════ஓ๑♡๑ஓ════════════════════╝   
                  `));
                    }
                }
            };
            let { items_category, weapons, armors, healing, magic } = shop;
            //------------------------------------------------------
            if (items_category === "Weapons") {
                if (weapons === "Kasaka's Venom Fang Sowrd") {
                    await want_to_purchase("Kasaka's Venom Fang Sowrd", 250, "This will increase attack damage upto 25", "weapons");
                    console.log(weapon.names);
                }
                else if (weapons === "Knight Killer Sowrd") {
                    await want_to_purchase("Knight Killer Sowrd", 350, "This will increase attack damage upto 40", "weapons");
                }
                else if (weapons === "Baruka’s Daggers Sword") {
                    await want_to_purchase("Baruka’s Daggers Sword", 400, "This will increase attack damage upto 60", "weapons");
                }
                else if (weapons === "Demon King's Daggers Sowrd") {
                    await want_to_purchase("Demon King's Daggers Sowrd", 470, "This will increase attack damage upto 80", "weapons");
                }
                else if (weapons === "Demon King's Longsword") {
                    await want_to_purchase("Demon King's Longsword", 540, "This will increase attack damage upto 100", "weapons");
                }
                else if (weapons === "Kamish's Wrath Sowrds") {
                    await want_to_purchase("Kamish's Wrath Sowrds", 600, "This will increase attack damage upto 130", "weapons");
                }
                else if (weapons === "Go Back") {
                    want_shop = true;
                }
            }
            //---------------------------------------------------------
            else if (items_category === "Shields and Armors") {
                if (armors === "Red Knight’s Helmet") {
                    await want_to_purchase("Red Knight’s Helmet", 250, "This will increase health 20% and decrease oppenent damage 10%", "Armor");
                }
                else if (armors === "Red Knight’s Chestplate") {
                    await want_to_purchase("Red Knight’s Chestplate", 250, "This will increase health 20% and decrease oppenent damage 10%", "Armor");
                }
                else if (armors === "Red Knight’s legging") {
                    await want_to_purchase("Red Knight’s legging", 250, "This will increase health 20% and decrease oppenent damage 10%", "Armor");
                }
                else if (armors === "Red Knight’s  Shoes") {
                    await want_to_purchase("Red Knight’s  Shoes", 250, "This will increase health 20% and decrease oppenent damage 10%", "Armor");
                }
                else if (armors === "High Magician’s Ring") {
                    await want_to_purchase("High Magician’s Ring", 280, "This will increase health 40% and decrease oppenent damage 5%", "Armor");
                }
                else if (armors === "Gatekeeper's Necklace") {
                    await want_to_purchase("Gatekeeper's Necklace", 280, "This will increase health 5% and decrease oppenent damage 15%", "Armor");
                }
                else if (armors === "Red Knight’s Shield") {
                    await want_to_purchase("Red Knight’s Shield", 250, "This will decrease oppenent damage 20%", "Armor");
                }
                else if (armors === "Go Back") {
                    want_shop = true;
                }
            }
            //---------------------------------------------------------------
            else if (items_category === "Healing items") {
                if (healing === "Hunter's Potion") {
                    await want_to_purchase("Hunter's Potion", 20, "This will increase health 20%", "healing");
                }
                else if (healing === "Elixir of the White Tiger") {
                    await want_to_purchase("Elixir of the White Tiger", 40, "This will increase health 40%", "healing");
                }
                else if (healing === "Shadow Monarch's Blessing") {
                    await want_to_purchase("Shadow Monarch's Blessing", 60, "This will increase health 60%", "healing");
                }
                else if (healing === "Ice Heart") {
                    await want_to_purchase("Ice Heart", 80, "This will increase health 80%", "healing");
                }
                else if (healing === "Giant's Blood") {
                    await want_to_purchase("Giant's Blood", 100, "This will increase health 100%", "healing");
                }
                else if (healing === "Go Back") {
                    want_shop = true;
                }
            }
            //---------------------------------------------------------------
            else if (items_category === "Magic items") {
                if (magic === "Unicorn's Horn") {
                    await want_to_purchase("Unicorn's Horn", 250, "This will reduce oppenent health 50%", "magic");
                }
                else if (magic === "Mirror Image") {
                    await want_to_purchase("Mirror Image", 280, "This will decrease oppnent attacking damage 50%", "magic");
                }
                else if (magic === "Wrath of Zeus") {
                    await want_to_purchase("Wrath of Zeus", 350, "This will reduce oppenent health 100%", "magic");
                }
                else if (magic === "Go Back") {
                    want_shop = true;
                }
            }
            //---------------------------------------------------------------
            else if (items_category === "Leave Shop") {
                want_shop = false;
            }
        } while (
        //---------------------------------------------------------------
        want_shop);
    }
    //╚════════════ if user select Shop end here════════════════╝
    else if (opt === "Game Info") {
        console.log(`
      ╔════════════════════════ ❀•°❀°•❀ ════════════════════════════╗

                Welcome To Solo Leveling Adventure game info 

      ╰┈➤  You can play 6 level here and each level hare
            their own unique monster so you can enjoy it.

      ╰┈➤  You will get money by defiting oppenent with 
            that money you can buy item and weapons,armors.
            You already have 100 money so you can purchase 
            healing items for wining.

      ╰┈➤  Shop have severl item like weapons, armors,
            healing items & magics items.

      ╰┈➤  When you purchase Weapons and armor which mean 
            you are using it and when you collect all 
            set of weapons and armors your attacking damage 
            and health will be much more powerful and you can 
            eassly beat Rank S monster.

      ╰┈➤  You can use healing items and magics item during battle.

      ╚════════════════════════ ❀•°❀°•❀ ════════════════════════════╝
      `);
    }
    //╒════════════ if user select Leave Game start here ═════════════╕
    else if (opt === "Leave Game") {
        start_tab = false;
        //after end of program it will print this credit
        console.log(chalk.bold.cyan(`
\n\n
‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵୨˚̣̣̣͙୧ - -୨˚̣̣̣͙୧‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵

                  Thanks For Checking my program !!
                        -:Follow me on:-
          Github: https://github.com/ZaeemUddinWork
          Linkedin: https://www.linkedin.com/in/zaeem-uddin/
  
‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵୨˚̣̣̣͙୧ - -୨˚̣̣̣͙୧‿︵‿︵‿︵‿︵‿︵‿︵‿︵‿︵
`));
    }
}
//╚════════════ if user select Leave Game end here════════════════╝
//╚════════════ Game start loop end here════════════════╝
