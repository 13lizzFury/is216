/*
  NAME: Benjamin Ho
  EMAIL: benjamin.ho.2024
*/
var i=0;
var recipes = [
    {name: "Banana Smoothie", ingredients: ["2 bananas", "1/2 cup vanilla yogurt", "1/2 cup skim milk", "2 teaspoons honey", "pinch of cinnamon"]},
    {name: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "Meatballs"]},
    {name: "Split Pea Soup", ingredients: ["1 pound split peas", "1 onion", "6 carrots", "4 ounces of ham"]}
]

function displayRecipe() {
    document.getElementById("recipeName").innerText = recipes[i].name;

    // Add Code Below
    document.getElementById("ingredientList").textContent = "";

    for (ingredient of recipes[i].ingredients) {
      ingr_item = document.createElement("li");
      ingr_item.textContent = ingredient;

      document.getElementById("ingredientList").appendChild(ingr_item);
    }

     updateButtonState();

}

function updateButtonState() {
    // Debug the following code
    // There is no need to add additional code
    if (i==recipes.length - 1)
      document.getElementById("btnNext").disabled = true
    else
      document.getElementById("btnNext").disabled = false
    if (i==0)
      document.getElementById("btnPrev").disabled = true
    else
      document.getElementById("btnPrev").disabled = false
  }


function changeRecipe(advance) {
    // Debug the following code
    // There is no need to add any additional code
    if (advance)
        i++;
    else
        i--;

    displayRecipe();

}