const dobHolder = document.querySelector("#dob");

const checkBtn = document.querySelector("#checkBtn");
const resultHolder = document.querySelector("#result");

checkBtn.addEventListener("click", () => {
    let dob = dobHolder.value;
    let dobDayFormat = changeDobFormatDayFirst(dob);
    let dobMonthFormat = changeDobFormatMonthFirst(dob);
    let result1 = checkPalindrome(dob, "yyyy-mm-dd");
    let result2 = checkPalindrome(dobDayFormat, "dd-mm-yyyy");
    let result3 = checkPalindrome(dobMonthFormat, "mm-dd-yyyy");
    if(!result1 && !result2 && !result3)
        resultHolder.textContent = "Not a palindrome";
    
});

//changes date to dd-mm-yyyy format
function changeDobFormatDayFirst(dob) {
    let newDob = "";
    let ind1 = -1,
        ind2;
    for (let i = 0; i < dob.length; i++) {
        if (dob[i] === "-") {
            if (ind1 === -1) ind1 = i;
            else ind2 = i;
        }
    }
    for (let i = ind2 + 1; i < dob.length; i++) {
        newDob += dob[i];
    }

    newDob += "-";
    for (let i = ind1 + 1; i < ind2; i++) {
        newDob += dob[i];
    }
    newDob += "-";
    for (let i = 0; i < ind1; i++) {
        newDob += dob[i];
    }
    return newDob;
}

//changes date to mm-dd-yyyy format
function changeDobFormatMonthFirst(dob, format) {
    let newDob = "";
    let ind1 = -1,
        ind2;
    for (let i = 0; i < dob.length; i++) {
        if (dob[i] === "-") {
            if (ind1 === -1) ind1 = i;
            else ind2 = i;
        }
    }
    for (let i = ind1 + 1; i < ind2; i++) {
        newDob += dob[i];
    }
    newDob += "-";
    for (let i = ind2 + 1; i < dob.length; i++) {
        newDob += dob[i];
    }

    newDob += "-";

    for (let i = 0; i < ind1; i++) {
        newDob += dob[i];
    }
    return newDob;
}

function checkPalindrome(dob, format) {
    dob = dob.split("-").join("");
    
    let revDob = dob.split("").reverse().join("");
    //console.log(dob, revDob, dob === revDob);
    let msg = "";
    if (revDob === dob) {
        msg = `Your birthday is a palindrome in ${format} format`;
        resultHolder.textContent = msg;
    } 
    return revDob === dob;
}

