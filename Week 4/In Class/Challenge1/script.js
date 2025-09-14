function calculate() {

    // YOUR CODE GOES HERE
    let num1 = Number(document.getElementById("number1").value);
    let num2 = Number(document.getElementById("number2").value);    

    let result = 0;

    for (count = num1; count <= num2; count++) {
        result += count;
    }

    document.getElementById("result").textContent = "The sum is: " + result;
}