const showAttempts = document.getElementById("showAttempts")
const showCustomInput = document.getElementById("showCustomInput")
const customNum = document.getElementById("customNum")
const attempt = document.getElementById("attempt")
const attempts = document.getElementById("attempts")
const numInput = document.getElementById("numInput")
const radioFour = document.getElementById("radioFour")
const radioFive = document.getElementById("radioFive")
const radioSix = document.getElementById("radioSix")
const radios = document.getElementById("radios")
const custom = document.getElementById("custom")
const addText = document.getElementById("addText")

const randomNum = Math.floor(Math.random() * 100) + 1

console.log(randomNum)

getRechnen = () => {
    if (radioFour.checked) {
        attempts.innerHTML = radioFour.value
        radios.style.display = "none"
        showCustomInput.style.display = "none"
        showAttempts.style.display = "block"
    } else if (radioFive.checked) {
        attempts.innerHTML = radioFive.value
        radios.style.display = "none"
        showCustomInput.style.display = "none"
        showAttempts.style.display = "block"
    } else if (radioSix.checked) {
        attempts.innerHTML = radioSix.value
        radios.style.display = "none"
        showCustomInput.style.display = "none"
        showAttempts.style.display = "block"
    } else if (custom.checked) {
        attempts.innerHTML = customNum.value
        radios.style.display = "none"
        showCustomInput.style.display = "none"
        showAttempts.style.display = "block"
    }

    getBingo()

}

getBingo = () => {
    if (numInput.value < 100 && numInput.value != 0) {
        if (numInput.value == randomNum) {
            addText.innerHTML = `<p>Yes!! You got me in ${index}, i'm ${randomNum}. <a href="index.html">You win!! Play Again</a></p>`
            return
        } else if (numInput.value < randomNum && numInput.value < 100) {
            addText.innerHTML = `<p>${index + 1}- You need to guess HIGHER than ${numInput.value}, try again...</p>`
        } else if (numInput.value > randomNum && numInput.value < 100) {
            addText.innerHTML = `<p>${index + 1}- You need to guess LOWER than ${numInput.value}, try again...</p>`
        }
    } else {
        addText.innerHTML = `<p>Error</p>`
        return
    }
    counter()
}

let index = 0
counter = () => {
    if (radioFour.checked && index >= radioFour.value || radioFive.checked && index >= radioFive.value || radioSix.checked && index >= radioSix.value || custom.checked && index >= customNum.value) {
        addText.innerHTML = `<p>Unlucky, attempts ended :( <a href="index.html">Play Again</a></p></p>`
        return
    }
    index++
    attempt.innerHTML = index
}

attemptsFunc = () => {
    attempt.innerHTML = 0
    if (radioFour.checked) {
        attempts.innerHTML = radioFour.value
        showCustomInput.style.display = "none"
        showAttempts.style.display = "none"
    } else if (radioFive.checked) {
        attempts.innerHTML = radioFive.value
        showCustomInput.style.display = "none"
        showAttempts.style.display = "none"
    } else if (radioSix.checked) {
        attempts.innerHTML = radioSix.value
        showCustomInput.style.display = "none"
        showAttempts.style.display = "none"
    } else if (custom.checked) {
        attempts.innerHTML = customNum.value
        showCustomInput.style.display = "block"
        showAttempts.style.display = "none"
    }
}