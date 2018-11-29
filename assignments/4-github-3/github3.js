let res = document.getElementById('grade');
let input = document.getElementById('mark');
let marks = function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
// console.log(marks(1,100));
function getGrade(mark) {
    mark = marks(1, 100);
    input.value = mark;
    if (mark > 90) {
        res.value = 'AA';
    } else if (mark >= 80 && mark <= 90) {
        res.value = 'AB';
    } else if (mark >= 70 && mark <= 80) {
        res.value = 'AB';
    } else if (mark >= 60 && mark <= 70) {
        res.value = 'AB';
    } else if (mark >= 50 && mark <= 60) {
        res.value = 'AB';
    } else if (mark >= 40 && mark <= 50) {
        res.value = 'AB';
    } else if (mark >= 30 && mark <= 40) {
        res.value = 'AB';
    } else {
        res.value = 'FF';
    }
}