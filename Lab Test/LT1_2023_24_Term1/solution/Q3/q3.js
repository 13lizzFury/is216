var i=0;
recipes = [
    {name: "Banana Smoothie", ingredients: ["2 bananas", "1/2 cup vanilla yogurt", "1/2 cup skim milk", "2 teaspoons honey", "pinch of cinnamon"]},
    {name: "Spaghetti", ingredients: ["Noodles", "Tomato Sauce", "Meatballs"]},
    {name: "Split Pea Soup", ingredients: ["1 pound split peas", "1 onion", "6 carrots", "4 ounces of ham"]}
]

function displayRecipe() {
  document.getElementById("recipeName").innerHTML = recipes[i].name;
  //a. 2 marks
  var ulist = document.getElementById("ingredientList");
  ulist.innerHTML = "";
  for (item of recipes[i].ingredients) {
    var list_item = document.createElement("li");
    list_item.innerHTML = item
    ulist.appendChild(list_item)
  }
  //a. 0.5 mark
  updateButtonState()
}

function updateButtonState() {
  //c. 1.5 marks
  if (i==recipes.length-1)
    document.getElementById("btnNext").disabled = true
  else
    document.getElementById("btnNext").disabled = false
  if (i==0)
    document.getElementById("btnPrev").disabled = true
  else
    document.getElementById("btnPrev").disabled = false
}

function changeRecipe(advance) {
  //b. 1 mark
  if (advance)
    i++;
  else
    i--;
  
  displayRecipe();
}