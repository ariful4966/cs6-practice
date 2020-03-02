function add (num1, num2 = 20){
    /*if(num2 == undefined){
        num2 = 0;
    }*/
    num2 = num2 || 0;
    return num1 + num2;
}
const total = add(14, 2);
console.log(total);