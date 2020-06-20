//Задание 1

const numbers=[1,2,3,4]
const newnumbers=[];
numbers.forEach((number) => {
  newnumbers.push(Math.pow(number,2))
})
/console.log(newnumbers);
// Задание 2

let sum=0;
numbers.forEach((el) => { sum+=el;});
console.log(sum);
// Задание 3

const powMap=numbers.map((number)=>{
  return Math.pow(number,2);
});
console.log(powMap);
//Задание 4
const  check=numbers.every(number=>{return number>0;});
console.log(check);
//Задание 5
const numbers_two=[1,-2,3,-4];

const containsNegative=numbers_two.some((number)=>number<0)
console.log(containsNegative);

//Задание 6
const containsNegativeTwo=numbers_two.filter((number)=>{return number<0;})
console.log(containsNegativeTwo);

//Задание 7
const parnNumbers=numbers.filter(number=>{return number%2==0})
console.log(parnNumbers);
//Задание 8
const stringArray=['one','seventeen','three',
'four','eleven','seven',];

console.log(stringArray.filter(number=>number.length>5))

// Задание 9

let arr = [1, 2, [3, 4, 5]];

let filter = arr.filter(function(elem){
if(Array.isArray(elem)){
return true
} else return false
})
console.log(filter)

//Задание 10
const negative_three=numbers_two.filter((number)=>{return number<0});
console.log(negative_three.length);
//Задание 11
const reduceArray=numbers.reduce((accumulator,currentValue)=>{
  return currentValue+accumulator;
})
 console.log(reduceArray);
