let x = Math.floor(Math.random() * 100 + 1) // random number generated by Math method

let guess = 0;

let guessBtn = document.querySelector(".guessSubmit");

guessBtn.addEventListener("click", () => {
    let y = document.querySelector(".guessNumber").value;
    // let cong = document.querySelector(".input-area");


    if (x == y) {
        document.querySelector("body").classList.add("cong");
    } else if (x > y) {
        guess += 1
        alert("Try greater number")
    } else if (x < y) {
        guess += 1
        alert("Try smaller number")
    }
    let attempt = document.querySelector(".attempt span");
    attempt.innerHTML = guess.toString();
})