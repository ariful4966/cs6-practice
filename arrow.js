/*function dubleIt(num){
    return num * 2;
}*/
/*
const dubleIt = function myFun(num){
    return num * 4;
}*/
const dubleIt = num => num * 3;

const add = (m, n) => m * n;

const doMath = (x ,y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}


const result = add(5, 4);

const result3 = doMath(7, 5);
console.log(result3);