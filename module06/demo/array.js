let a = 10;
console.log(a);

function rand(limit = 10) {
    return Math.floor(Math.random() * limit);
}

// Массивы
let arr = [];

// метод push() добавляет новый элемент в конец массива
for(let i=0; i<5; i++) {
    arr.push(rand());
}

console.log(arr);
console.log(arr.length); // атрибут length возвращает длину массива

console.log(arr[0]); // доступ к отдельным элементам массива осуществляется по индексту, т.е. через квадратные скобки
console.log(arr[1]); // индекс первого элемента 0, второго 1 и т.д.
console.log(arr[2]);

console.log(arr[3]); // undefined

// перебрать все элементы массива
for(let i=0; i<arr.length; i++) { 
    console.log(arr[i]);
}

// Практическое задание.
// Посчитать сумму всех элементов массива arr