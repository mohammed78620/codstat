#!/usr/bin/env node
const http = require('http');
const API = require('call-of-duty-api')( { platform: 'battle', ratelimit: { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 } } );
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function readLineAsync(message) {
return new Promise((resolve, reject) => {
    rl.question(message, (answer) => {
    resolve(answer);
    });
});
} 

async function demoSynchronousPrompt(expenses) {
    var username = await readLineAsync("Username: ");
    var password = await readLineAsync("Password: ");

    API.login(username, password).then(data => {
    API.MWBattleData("mohammed78698", API.platforms.psn).then((output) => {
        a = JSON.stringify(output);
        a = JSON.parse(a);

        exp = process.argv.slice(2)
    switch(exp[0]){
        case "wins": 
            console.log("wins: " + JSON.stringify(a.br_all.wins));
            break;
        case "kd":
            console.log("kd ratio: " + JSON.stringify(a.br_all.kdRatio));
            break;
        case "spm":
            console.log("spm : " + JSON.stringify(a.br_all.scorePerMinute));
            break;

        default:
            return;
    }
    }).catch((err) => {
    console.log(err);
    });
    }).catch(err => {
    console.log(err);
    });


    // console.log("Won't be executed until promptInput is received", promptInput);
    rl.close();
}
demoSynchronousPrompt();
