function add() {
    var sum;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    // let ans = document.getElementById('ans').value;
    if (num1 === num2) {
        sum = (num1 + num2) * 3;
    } else {
        sum = num1 + num2;
    }
    document.getElementById('ans').value = sum;
    console.log(sum);
}