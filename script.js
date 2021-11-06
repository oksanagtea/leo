// Написать функцию, которая берет массив и
// возвращает индекс первых двух элементов,
// которые дают в сумме 12

let a = [1, 8, 9, 4, 6, 2, 8, 9, 3, 7];
let b = [8, 7, 9, 3, 5, 7, 1, 6, 7, 8];

function sum12(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i+1; j < arr.length; j += 1) {
      let sum = arr[i] + arr[j];
      if(sum==12){
        console.log(i, j);
        return;
      }
    }
  }
}

sum12(a)
sum12(b)
