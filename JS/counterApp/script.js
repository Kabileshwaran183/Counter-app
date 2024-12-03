//creating model for the object save-el
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    // inner text will not show the human unreadable string (" - ") 
    countEl.textContent = 0
    count = 0
}