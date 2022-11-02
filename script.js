const dobHolder = document.querySelector("#dob");

const checkBtn = document.querySelector("#checkBtn");
const resultHolder = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
    let dob = dobHolder.value;
    console.log(dob);
    let result = checkPalindrome(dob)
    updateUi(result);
});

function checkPalindrome(dob) {
    dob = dob.split("-").join("");
    console.log(dob);
    let revDob = dob.split("").reverse().join("");
    return revDob === dob
}


function updateUi(result) {
    let msg = "";
    if(result === true) {
        msg = "Your birthday is palindrome";
    } 
    else {
        msg = "Your birthday is not palindrome";
    }
    resultHolder.textContent = msg;   
}
