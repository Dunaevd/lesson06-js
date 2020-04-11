"use strict";

let guessNumber = () => {
     
    let xNumber = Math.floor(Math.random() * 100 + 1); //Рондомное число
    
    let userNumber = +prompt('Угадай число от 1 до 100');//число которое вводит прользователь.

    let win; //Число угадано
    

    if ((Number.isNaN(parseFloat(userNumber)))) {
    confirm('Введите число');
    return guessNumber();
    }

    if (userNumber > 0 && userNumber < xNumber) {
        alert('Загаданное число больше');
        return guessNumber();
    } else if (userNumber > xNumber){
        alert('Загаданное число меньше');
        return guessNumber();
    }

    if (userNumber === xNumber){
        win = confirm('Вы угадали число!! Хотите сыграть еще?');
    }

    if (win === true){
        return guessNumber();
    } else {
        alert('Игра закончена');
    }

};

guessNumber();