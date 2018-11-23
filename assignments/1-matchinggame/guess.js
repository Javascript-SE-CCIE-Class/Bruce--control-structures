let input = document.getElementById('num1');
input.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        guess();
    }
    
})

function guess() {
    let answer = Math.floor(Math.random()*Math.floor(11));
    let input = document.getElementById('num1').value;
    let w_response = ['POLE', '🤦‍ 🤦‍NOT MATCHED', '😥WOIYEE', '😂IZZAH JOO', 'II WACHIE WAJANJEZ', 'WALAI? II TU?', 'KAMA KUMI TU INAKUWEZA ...', 'WACHA JOKES', '🤣🤣🤣', '😜😜'];
    let r_response = '💯🎉🎉GOOD WORK';
    if (answer!==0) {
        if (answer != input) {
            console.log(`answer ni ${answer}`);
            document.getElementById('ans').value = w_response[input];
    
        } else if (answer == input) {
            console.log('🎉🎉🎉');
            document.getElementById('ans').value = r_response;
    
        }
        else if (input > 10) {
            input = "";
            document.getElementById('ans').value = "WEWE IYO NI KUBWA SANA!! 😡😡💢";
        }
        else if (input < 1) {
            input = "";
            document.getElementById('ans').value = "WEWE IYO NI NDOGO SANA!! 😡😡💢";
        }
    } else {
        answer = Math.floor(Math.random()*Math.floor(11));    
    }
    
   
}

