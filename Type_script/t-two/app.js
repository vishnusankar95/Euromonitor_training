// function add(n1 : number | string , n2 : number | string){
//    if(typeof n1 === 'number' && typeof n2 === 'number'){
//         return n1+n2;
//     }else {
//         return n1.toString() + n2.toString()
function add(n1, n2, resultconversion) {
    if (typeof n1 === 'number' && typeof n2 === 'number' && resultconversion == 'as-num') {
        return n1 + n2;
    }
    else if (resultconversion == 'as-text') {
        return n1.toString() + n2.toString();
    }
}
;
var number1 = 'five';
var number2 = 10;
var result = 'as-text';
console.log(add(number1, number2, result));
