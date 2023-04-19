// Массивы

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// let arr2 = [1, true, "str", "hello", null, false, {
//     name: "Alex",
//     age: 18, 
// }, {
//     name: "Alex",
//     age: 18, 

// } 
// ]

// arr[порядковый номер]
// нахождение элемента
// arr.lenth
// длина массива

 
// console.log(arr2.length); // lenth - длина массива

// arr[12] = undefined
// console.log(arr[0], arr[arr.length - 1]); // в этом примере в консоли отобразятся первая и последние цифры. "0 " вытаскивает первую цифру, а "-1" последнюю 


// // // Добавление
// arr.push(0) // "0" добавится в конце, после 12     // можно добавить еще элементы: arr.push({name: "Shakhina", age: 18})
// arr.unshift(0) // добавление элемента в начало

// // // Удаление
// arr.shift() // удаляет первый элемент
// arr.pop() // удаляет последний элемент

// // arr.reverse() // переворачивает порядок 

// let crt_c = arr.slice(0, 3)  // откуда, до куда
// let ctrl_x = arr.splice(0,3) // откуда, сколько
// // Если написать только 1 цифру, то оно будет показывать цифры после этого числа

// console.log(arr.slice(6));
// console.log(arr, ctrl_x);

// arr.concat(ctrl_x,[13,14,15])  // Обьединение массивов

// arr.sort(a, b => a - b) // работает только с типом данных "Number"

// console.log(arr);








// H/T
// Напишите однострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.

// 
let a = [2,4,6,8,7,10]

let answer = []
for(let item of a){
    if (item % 2 == 0) {
        // console.log(item);
     const reduced =   a.reduce((a,b) => Math.sqrt(a) + Math.sqrt(item))
     answer.push(reduced)
    }
}


console.log(Math.floor(answer.at(-1)));


// let b = a.filter(item => item ? item % 2 == 0 : '')


// console.log(b);





