// 1. Сумма чисел:
// Написать программу, которая будет суммировать
// все числа от 1 до 100.

function sum(number) {
  let total = 0;
  for (let i = 1; i <= number; i += 1){
    total += i;
  }
  return total
}


// 2. Факториал числа:
// Создать функцию которая будет считать факториал числа

function getFactorial(number) {
    if (number === 1) {
       return number
    } else {
        return number * getFactorial(number-1)
   }
}



function getFactorialLoop(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i += 1){
        factorial *= i
    }
    return factorial
}




// 3. Проверка на четность:
// Функция которая должна проверять является ли число четным

function isEven(number) {
  if (number % 2 === 0) {
    return "Even!"
  } else {
    return "Odd!"
  }
}

// isEven(3)

// 4. Поиск максимального числа:
// Программа должна находить 

function maxNumber(arr) {
  return Math.max(...arr)
}




// 5. Обратная строка:
// Нужно реализовать функцию, которая будет 
// переворачивать строку задом наперед

const string = 'Hello world';

function toReverse(str) {
return str.split('').reverse().join('')
}





function showResults(...args) {
    const div = document.getElementById('wrapper');
    const ul = div.querySelector('ul');
    const fragment = document.createDocumentFragment();
    args.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        fragment.appendChild(li)
    }) 
    ul.appendChild(fragment)
}

showResults(sum(100),getFactorial(6),getFactorialLoop(5),isEven(2),maxNumber([1,4,6]),toReverse('Hello'))


