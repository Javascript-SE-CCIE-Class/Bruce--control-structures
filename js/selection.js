console.log("=======================================IF STATEMENTS=====================================\n");

let x = 75;
if (x < 18) {
    console.log(`Yay! It's a success`);
}

if (x>20) {
    console.log(`The ${x} is greater than 20`);            
} else {
    console.log(`The ${x} is less than 20`);
}

if (x>40) {
    console.log(`The ${x} is greater than 20`);            
} else if(x>30){
    console.log(`The ${x} is greater than 30`);
} else if(x>20){
    console.log(`The ${x} is greater than 20`);
} else {
    console.log(`The ${x} is less than 20`);
}


console.log("=======================================SWITCH STATEMENTS=================================\n");
let y = 1;
switch (y) {
    case 0:
        console.log(`The value is zero`);
        break;
    case 1:
        console.log(`The value is one`);
        break;
    case 2:
        console.log(`The value is two`);
        break;
    case 3:
        console.log(`The value is three`);
        break;
    case 4:
        console.log(`The value is four`);
        break;
    case 5:
        console.log(`The value is five`);
        break;
    case 6:
        console.log(`The value is six`);
        break;
    case 7:
        console.log(`The value is seven`);
        break;
    case 8:
        console.log(`The value is eight`);
        break;
    case 9:
        console.log(`The value is nine`);
        break;
    case 10:
        console.log(`The value is ten`);
        break;
}

