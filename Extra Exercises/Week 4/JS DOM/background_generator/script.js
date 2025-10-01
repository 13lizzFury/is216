// Add code here
function changeBackground() {
    let body = document.getElementById("gradient");

    let color1 = document.getElementById("color1").value;
    let color2 = document.getElementById("color2").value;

    body.style.background = `linear-gradient(to right, ${color1} , ${color2})`;

    document.getElementById("background_info").textContent = `linear-gradient(to right, ${color1} , ${color2})`;
}

document.getElementById("color1").addEventListener("input", changeBackground);
document.getElementById("color2").addEventListener("input", changeBackground);