//Задание 1(forEach)
//1. Дан массив с числами(сам придумай). Создай новый массив, состоящий из квадратов этих чисел.

const numbers = [1,2,3,4];  const newnumbers = [];

numbers.forEach( number => {
newnumbers.push( Math.pow(number,2) ) } )
console.log(newnumbers);

// Задание 2(forEach)
//2. Дан массив с числами. Найди сумму этих чисел.

let sum=0;
numbers.forEach((el) => { sum += el; } );
console.log(sum);
// Задание 3(map())
//3. Дан массив с числами. Преобразуй в массив, состоящий из квадратов этих чисел

const powMap = numbers.map(number=>{
  return Math.pow(number,2); } );

console.log(powMap);

//Задание 4(every,some)
//4. Дан массив с числами. Проверь то, что все элементы в массиве больше нуля.

const  check = numbers.every( number=>{ return number>0; } );

console.log(check);

//Задание 5
//5. Дан массив с числами. Проверь то, что в нем есть отрицательные элементы.

const numbersArray=[1,-2,3,-4];

const containsNegative=numbersArray.some(number=>number<0)

console.log(containsNegative);

//Задание 6(filter)
//6. Дан массив с числами. Оставь в нем только отрицательные числа

const containsNegativeTwo=numbersArray.filter(number=>{return number<0;})

console.log(containsNegativeTwo);

//Задание 7(filter())
//7. Дан массив с числами. Оставь в нем только четные числа.

const parnNumbers = numbers.filter(number=>{return number%2==0})

console.log(parnNumbers);

//Задание 8(filter())
//8. Дан массив со строками. Оставь в нем только те строки, длина которых больше 5-ти символов.

const stringArray = ['one','seventeen','three',
'four','eleven','seven',];

console.log(stringArray.filter(number=>number.length>5))

// Задание 9(filter())
//9. Дан массив, в нем могут быть обычные элементы и подмассивы,
//например [1, 2, [3, 4], 5, [6, 7]]. Оставь в нем только подмассивы.

let arr = [1, 2, [3, 4, 5]];

let filter = arr.filter(isArray => Array.isArray(isArray));

console.log(filter)

//Задание 10(filter())
//Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]].
//Оставь в нем только подмассивы.

const negative_three=numbersArray.filter( number=>{ return number<0 } );

console.log(negative_three.length);

//Задание 11(reduce(), reduceRight())
//11. Дан массив с числами. Найди сумму этих чисел.

const reduceArray = numbers.reduce( ( accumulator,currentValue )=>{ return currentValue+accumulator; } )

console.log(reduceArray);
