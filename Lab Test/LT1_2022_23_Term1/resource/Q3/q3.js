/*
 Name: Benjamin Ho
 Email: benjamin.ho.2024
 */
 
 // DO NOT EDIT: START
const jokeTable = document.getElementById("joke-table");
const jokeTableTbody = jokeTable.getElementsByTagName("tbody")[0];
const jokeText = document.getElementById("jokeText");
// DO NOT EDIT: END

function getSampleJokes() {
  // DO NOT EDIT: START
  while (jokeTableTbody.lastChild) {
    jokeTableTbody.lastChild.remove();
  }
  
  let serial = 1;
  // DO NOT EDIT: END
  
  // To be completed...

  for (joke of sampleJokes) {
    if (joke.type == "twopart") {
      let jokeRow = jokeTableTbody.insertRow();
      jokeRow.insertCell().textContent = serial;
      jokeRow.insertCell().textContent = joke.category;
      jokeRow.insertCell().textContent = joke.setup;
      jokeRow.insertCell().textContent = joke.delivery;

      serial += 1;
    }
  }
}

function getJoke() {
  // To be completed...
  let category = document.getElementById("categoriesDD").value;

  axios.get("q3_getJoke.php", {
    params: {
      "query": category
    }
  })
  .then((result) => {
    console.log(result);
    jokeText.textContent = result.data
  }).catch((err) => {
    console.log(err.message);
  });
}

