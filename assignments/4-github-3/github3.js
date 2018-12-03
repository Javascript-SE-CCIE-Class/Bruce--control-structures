const _ans = document.getElementById( 'answer' );
const p = document.querySelector( '#desc' );
const dropdown = document.querySelector( 'select' );
var form = document.querySelector( 'form' );
const _val = document.getElementById( 'value' );
p.style = 'color:lightblue';


//Used this to test random integers with number 1,2,12
let randnum = function getRandomInt( min, max ) {
    min = Math.ceil( min );
    max = Math.floor( max );
    return Math.floor( Math.random() * ( max - min ) + min );
}

//TRIGGERED when reset button clicked to reset the info paragraph
function resetForm() {
    p.innerText = '';
}


function getGrade() {

    p.innerText = 'Enter Marks to get grade';

    _val.focus();
    _val.onchange = () => {
        let mark = parseInt( _val.value );
        console.log( mark );

        if ( mark > 90 && mark <= 100 ) {
            _ans.value = 'AA';
        } else if ( mark >= 80 && mark <= 90 ) {
            _ans.value = 'AB';
        } else if ( mark >= 70 && mark <= 80 ) {
            _ans.value = 'BB';
        } else if ( mark >= 60 && mark <= 70 ) {
            _ans.value = 'BC';
        } else if ( mark >= 50 && mark <= 60 ) {
            _ans.value = 'CC';
        } else if ( mark >= 40 && mark <= 50 ) {
            _ans.value = 'CD';
        } else if ( mark >= 30 && mark <= 40 ) {
            _ans.value = 'DD';
        } else {
            _ans.value = 'FF';
        }
    }



}


function getWord() {
    // num = randnum( 1, 10 );
    // _num.value = num;
    p.innerText = 'Enter Number to get English word';

    _val.focus();
    _val.onchange = () => {
        let num = parseInt( _val.value );
        console.log( num );
        switch ( num ) {
            case 1:
                _ans.value = 'ONE';
                break;
            case 2:
                _ans.value = 'TWO';
                break;
            case 3:
                _ans.value = 'THREE';
                break;
            case 4:
                _ans.value = 'FOUR';
                break;
            case 5:
                _ans.value = 'FIVE';
                break;
            case 6:
                _ans.value = 'SIX';
                break;
            case 7:
                _ans.value = 'SEVEN';
                break;
            case 8:
                _ans.value = 'EIGHT';
                break;
            case 9:
                _ans.value = 'NINE';
                break;

            default:
                _ans.value = 'PLEASE TRY AGAIN';
                break;
        }
    }
}

console.log( "Number 3\n========================================" );
( function () {
    let a = 3;
    let b = 4;
    console.log( `A = ${ a } and B = ${ b }\n` );
    let add = a + b;
    let sub = a - b;
    let multi = a * b;
    let div = a / b;
    let inc = ++a;
    let dec = --b;
    console.log(
        `\t A + B = ${add}
     A - B = ${sub}
     A x B = ${multi} 
     A / B = ${div} 
     ++ A = ${inc} 
     -- B = ${dec} 

    ` );
} )();

//called after selecting task
function setTest() {
    let testing = document.getElementById( 'testing' );
    if ( testing.value == 'marks' ) {
        form.onsubmit = getGrade();
    } else if ( testing.value == 'number' ) {
        form.onsubmit = getWord();
    } else {
        form.onsubmit = testTwenty( parseInt( _val.value ) );
    }
}


//Number 12
function testTwenty( x ) {

    p.innerText = 'Enter Number to get Test if it is of 20 in 100 or 400';

    _val.focus();
    _val.onchange = () => {
        x = parseInt( _val.value );
        console.log( x );
        ( ( Math.abs( 100 - x ) <= 20 ) ||
            ( Math.abs( 400 - x ) <= 20 ) ) ? _ans.value = `${ x } is correct`: _ans.value = `${x} is wrong Please try again`;




    }
}