const txtInput = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
infoTxt = document.querySelector(".info-text");
let fillerInput = "";

checkBtn.addEventListener("click", () => {
    if (!fillerInput) return console.log("Please enter a word");
    
    // Reverse the cleaned input
    let reversedInput = fillerInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if (fillerInput !== reversedInput) {
        console.log("This is not a palindrome");
        return infoTxt.innerHTML = `No, <span>${txtInput.value}</span> is not a palindrome`;
    }
    
    else {
        console.log("This is a palindrome");
        return infoTxt.innerHTML = `Yes, <span>${txtInput.value}</span> is a palindrome`;
    }
});

txtInput.addEventListener("keyup", () => {
    // Clean the input: lowercase, remove spaces and special chars
    fillerInput = txtInput.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    if (fillerInput) {
        checkBtn.classList.add("active");
    } else {
        infoTxt.style.display = "none";
        checkBtn.classList.remove("active");
    }
});