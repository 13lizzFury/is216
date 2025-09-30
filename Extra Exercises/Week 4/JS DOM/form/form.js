// Add Code here

function getName() {
    
    // Add Code here
    let name = document.getElementById("name");

    let span = document.createElement("span");

    span.textContent = this.value;

    name.appendChild(span);
}

var name_fields = document.getElementsByTagName("input");

for (field of name_fields) {
    console.log(field);
    field.addEventListener("keyup", getName);
};