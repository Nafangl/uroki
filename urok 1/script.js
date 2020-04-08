'use strict';

let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let a2 = prompt("Во сколько обойдется?", "");
let a3 = prompt("Введите обязательную статью расходов в этом месяце", "");
let a4 = prompt("Во сколько обойдется?", "");

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

alert(appData.budget / 30);


<<<<<<< HEAD
/*
1. Типы данных в JS: числа, строки, буевеы(так и не понял что это за тип данных), специальные значения(null, undefined)
символы и объекты
2. Информацию в консоль выводят командый - console.log();
3. Функции операторов: && и || - функции сверяют данные переменных */

=======
>>>>>>> master

