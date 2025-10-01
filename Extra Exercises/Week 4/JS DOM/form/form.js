// Add Code here

function getName() {
    
    // Add Code here
    let input_name = name_fields[0].value + " " + name_fields[1].value;

    let name = document.getElementById("name");

    console.log(input_name);

    if (input_name != " ") {
        name.textContent = "You entered: " + input_name;
    }
    else {
        name.textContent = "";
    }
}

var name_fields = document.getElementsByTagName("input");

for (field of name_fields) {
    field.addEventListener("keyup", getName);
};
