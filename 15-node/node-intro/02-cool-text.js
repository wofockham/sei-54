const readline = require('readline');
const chalk = require('chalk');
const figlet = require('figlet');

// it really is this much trouble:
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter some text: ', function (response) {
    console.log(
        chalk.green(
            figlet.textSync(response, {
              font: 'Cricket',
              verticalLayout: 'default',
              horizontalLayout: 'default'  
            })
        )
    );
    rl.close();
});