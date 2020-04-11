'use strict';


/*

if (2*4 == 8) {
    console.log("Верно!");
} else {
    console.log("Неверно!");
};

*/


/*let num = 50;

if (num < 49) {
    console.log("Неверно!")
} else if (num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
};

switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;
    case num  > 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Все еще много!");
        break;
    case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что-то пошло не так!");
    break;

}


let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}



do {
    console.log(num);
    num++;
}
while (num <55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i);
}


*/
/*let num = 20;
function showFirstMessage(text) {
    alert(text);
    let num = 10;
    console.log(num);
    
}
showFirstMessage("Hello world!");
console.log(num);
*/



function calc(a,b) {                                           //функция работает всегда с запуска кода 
    return (a + b);                                            //потому команды вызова ретерн могут работать влюбом месте кода 
}
console.log(calc(3,4));
console.log(calc(8,4));

function retVar() {
    let num = 50;
    return num;

}

let anotherNum = retVar();
console.log(anotherNum);

let calc2 = function(a,b) {                                   //экспрешн функция - функциональное выражение, вызвать функцию 
    return (a + b);                                             //зарание как это сделать выше нельзя

}


//новый синтаксис функции - ниже

let calc3 = (a,b) => a+b

console.log(calc3(3,4));
console.log(calc3(8,4));

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

//console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));