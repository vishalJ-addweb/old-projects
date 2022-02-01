const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Write first number ?", function(num1) {
    rl.question("Write second number ? ", function(num2) {
        const sum=parseInt(num1)+parseInt(num2);
        console.log(`Addition of ${num1} and ${num2} is : ${sum}`);
        rl.close();
    });
});

rl.on("close", function() {
    
    process.exit(0);
});

