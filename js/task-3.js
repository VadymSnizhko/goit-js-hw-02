function getElementWidth(content, padding, border) {

    let totalWidth = parseFloat(content) + (parseFloat(padding) * 2) + (parseFloat(border) * 2);

    let message = totalWidth;
    
    return message;
}
console.log(getElementWidth("50px", "8px", "4px")); //  74
console.log(getElementWidth("60px", "12px", "8.5px")); //  101
console.log(getElementWidth("200px", "0px", "0px")); //  200
/*function calculateTotal(number) {
  let result = 0;
    //console.log("in:"+number);
    for (let i = 0; i <= number; i++) {
        //console.log(number +"\t"+!(number % 2));
        
        if (!(i % 2)) {
            //console.log(result + "\t" + i);
            result += i;
        }
      //console.log("result: "+result);
    }
  return result;
}
console.log(calculateTotal(1)); //1
console.log(calculateTotal(3)); //6
console.log(calculateTotal(7)); //0
console.log(calculateTotal(18)); //171
console.log(calculateTotal(27)); //300
*/
/*const start = 17;
const end = 25;
let number = 0;
for (let i = start; i < end; i++){
  if (!(i % 5)) {
      number += i;
      break;
  }
}
console.log(number);
*/
/*
function findNumber(start, end, divisor) {
  for (let i = start; i < end; i++){
  if (!(i % divisor)) {
      return i;
  }
}
}
console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
console.log(findNumber(6, 9, 4));
console.log(findNumber(16, 35, 7));
*/