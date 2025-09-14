let greeting = document.getElementById("greeting");
console.log(greeting);

let paras = document.getElementsByTagName("p");
console.log(paras);

for (para of paras) {
    // console.log(para.innerText);
    para.innerText = "Booyah";
}