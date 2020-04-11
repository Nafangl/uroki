'use strict';



let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();



let appData = {

    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt("Во сколько обойдется?", "");
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a !='' && b !='' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    
        
    }    
}
chooseExpenses();

/*let i = 0;
    while (i < 2) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt("Во сколько обойдется?", "");
        i++;

        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a !='' && b !='' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
    
        }
        

        
    }
*/
/*let i = 0;
    do {

        let a = prompt("Введите обязательную статью расходов в этом месяце", "");
        let b = prompt("Во сколько обойдется?", "");
        i++;  111

        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a !='' && b !='' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
    
        }

}
while (i < 2);
*/

function detectDayBudget() { 

    appData.moneyPerDay = (appData.budget / 30).toFixed();

    alert("ежедневный бюджет: " + appData.moneyPerDay);
  
}

detectDayBudget();

function detectLevel() {

    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }   

}

detectLevel();


function chooseOptExspenses() {
for (let i = 0; i < 3; i++) {
    let vopros = prompt("Статья необязательных расходов?", "");
        if ( (typeof(vopros))=== 'string' && (typeof(vopros)) != null) {
            console.log("done");
            appData.optionalExpenses["1: " + i] = vopros;
        } else {
            i--;
        }

}

}





function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накопление?"),
            percent = +prompt("Под какой проецент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();