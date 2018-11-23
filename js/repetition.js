console.log("=======================================ITERATION=========================================\n");

let count;
for (count = 0; count <= 10; ++count){
    console.log(`THE COUNT IS AT ${count}`);
}
console.log('\n\tFOR LOOP\n\n');
let fruits = ['banana', 'papaya', 'apple', 'watermelon'];
for (count = 0; count < fruits.length; count++){
    console.log(fruits[count]);
}
console.log('\n\tWHILE LOOP\n\n');

let i = 0;
while (i < fruits.length) {
    console.log(`FRUIT IS ${fruits[i]}`);
    i++;
}
