//Задание 1

const numbers=[1,2,3,4]
const newnumbers=[];
numbers.forEach((number) => {
  newnumbers.push(number=number*number)
})
/console.log(newnumbers);
// Задание 2

let sum=0;
numbers.forEach((el) => {
  sum=sum+el;
});
console.log(sum);
// Задание 3

const powMap=numbers.map((number)=>{
  return number*number;
});
console.log(powMap);
//Задание 4
const  check=numbers.every(number=>{
  return number>0;
});
console.log(check);
//Задание 5
const numbers_two=[1,-2,3,-4];
const negative=numbers_two.some((number)=>number<0)
console.log(negative);

//Задание 6
const negative_two=numbers_two.filter((number)=>{
  return number<0;
})
console.log(negative_two);

//Задание 7
const parn_numbers=numbers.filter((number)=>{
  return number%2==0
})
console.log(parn_numbers);
//Задание 8
const stroka=['one','seventeen','three',
'four','eleven','seven',];

console.log(stroka.filter((number)=>number.length>5))

// Задание 9

let arr = [1, 2, [3, 4, 5],];

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
