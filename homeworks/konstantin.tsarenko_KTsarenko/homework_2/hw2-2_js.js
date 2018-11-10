const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ведите минимальное значение: ', (answer) => {
    let minNum = parseInt(answer);
    rl.question('Ведите максимальное значение: ', (answer2) => {
        if (!isNaN(Math.round(answer2)) && !isNaN(Math.round(answer))) {
            let maxNum = parseInt(answer2);
            for (i = minNum; i <= maxNum; i++) {
                let num = i.toString();
                if (num === num.split('').reverse().join('')) {
                    console.log(num)
                }
            }
            rl.close();
        } else {
            console.log('Ошибка ввода.');
            rl.close();
        }
    });
});
