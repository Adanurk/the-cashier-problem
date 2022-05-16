const prompt = require("prompt-sync")({ sigint: true });


let price;
let paid;
let money = [500.00, 200.00, 100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, .50, .20, .10, .05, .02, .01];
let cash = function(price, paid){
    let change = (paid - price).toFixed(2);
    console.log(`the change is ${change}`);
    for (const i of money) {
        if(change%i>0){
            let num = Math.floor(change/i);
            change -= i*num;
            change = change.toFixed(2);
            if(num != 0){
                console.log(`${num} times ${i} euro`);
            }
            }else if(change%i === 0){
            let num = Math.floor(change/i);
            console.log(`${num} times ${i} euro`);
            break;
            }
        
    }

}
cash(50.77, 100.00);


