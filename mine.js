"use strict";

let learnNumber = () => {

    let xNumber = Math.floor(Math.random() * 100 + 1);

    console.log(xNumber);

        let userNumber = prompt('Угадай число от 1 до 100');

        console.log(typeof(userNumber));
        console.log('cruu ' + userNumber);
        console.log('boolean ' +  Boolean(userNumber));

        if (userNumber > xNumber) {
            confirm('Загаданное число меньше');
            
        } else {
             confirm('Загаданное число больше');
                 
        }
         
};
learnNumber();