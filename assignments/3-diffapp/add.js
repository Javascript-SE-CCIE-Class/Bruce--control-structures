function add() {
    var diff;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = 19;
    // let ans = document.getElementById('ans').value;
    if (num1 > num2) {
        diff = (Math.abs(num1 - num2)) * 3;
    } else {
        diff = Math.abs(num1 - num2);
    }
    document.getElementById('ans').value = diff;
    console.log(diff);
}