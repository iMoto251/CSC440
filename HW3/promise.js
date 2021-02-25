function getPromise(question){
    return new Promise((resolve, reject) =>{
            const readline = require('readline');
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.question(question, (answer) =>{
                resolve(answer);
                console.log('Oh so your favorite is', answer);
                rl.close();
            });
    });
}

getPromise('What is your favorite class? ')
    .then((result)=>{
        return getPromise('What is your favorite car? ')
    })
    .then((result)=>{
        return getPromise('What is your favorite season? ')
    })