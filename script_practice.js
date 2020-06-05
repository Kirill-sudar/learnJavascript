//Задание 1
var i = 0, j = 0;
// Желаемое количество строк
var max = 5;
var space = "",
    star = "";

while (i < max) {
    space = "";
    star = "";
    for (j = 0; j < max-i; j++) space += " ";
    for (j = 0; j <2*i+1; j++) star += "#";
    console.log(space + star);
    i++;
}
//Задание 3
let a =[1,2,3,4,5,6];
let b=[];
function r1(){
    for(let i=1;i<a.length+1;i++){
        b[i-1]=a[a.length-i];
    }
    return b;
}

console.log(r1(b));
//Задание 2
var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);
//Задание 4
function isLeapYear (year) {
    return year % 4 === 0;
}
var year = +prompt("Введи год:");

if(isLeapYear(year)){
    alert("Год " + year + " - високосный.");
} else {
    alert("Год " + year + " - не високосный.");
}
