// Task 1
// Add an event listner to the button (the user drags his mouse over the button)

function buttonEnter() {
    let result = document.getElementById("result");

    result.textContent = "Welcome to My Heart";
    result.style.backgroundColor = "pink";
    result.style.color = "blue";
}

document.getElementById("justin-btn").addEventListener("mouseenter", buttonEnter);

// Task 2
// Add an event listner to the button (the user drags his mouse out of the button)
function buttonLeave () {
    let result = document.getElementById("result");

    result.textContent = "Don't Leave Me Please";
    result.style.backgroundColor = "black";
    result.style.color = "red";
}

document.getElementById("justin-btn").addEventListener("mouseleave", buttonLeave);