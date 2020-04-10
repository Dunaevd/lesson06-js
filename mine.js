"use strict";

let learnNumber = () => {

    let xNumber = Math.floor(Math.random() * 100 + 1);

    console.log(xNumber);

        let userNumber = +prompt('Угадай число от 1 до 100');

        console.log(Boolean(userNumber));

        if (userNumber === false) {
            confirm('Вы угадали число! Хотите сыграть ещё?');
        } 

        if ( userNumber < xNumber) {
            confirm('Ваше число меньше');
            return learnNumber();
        } else if (userNumber === xNumber) {
            confirm('Поздравляем Вы угадали число');
        }

        if ( userNumber > xNumber) {
            confirm('Ваше число больше');
            return learnNumber();
        } else if (userNumber === xNumber) {
            confirm('Поздравляем Вы угадали число');
        } 

        if ( Number.isNaN(parseFloat(userNumber))) {
            confirm('Введите число');
            return learnNumber();
        } 


};
learnNumber();
