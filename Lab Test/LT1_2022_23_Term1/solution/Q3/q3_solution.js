// Q3 solution

// DO NOT EDIT: START
const jokeTable = document.getElementById("joke-table");
const jokeTableTbody = jokeTable.getElementsByTagName("tbody")[0];
const jokeText = document.getElementById("jokeText");
// DO NOT EDIT: END


// solution for 3(a)
function getSampleJokes() {
  // DO NOT EDIT: START
  while (jokeTableTbody.lastChild) {
    jokeTableTbody.lastChild.remove();
  }
  
  let serial = 1;
  // DO NOT EDIT: END
  
  // To be completed...
  for(joke of sampleJokes) {
    if (joke.type === "twopart") {
      let tr = document.createElement("tr");
      jokeTableTbody.appendChild(tr);
  
      let contentList = [serial++, joke.category, joke.setup, joke.delivery];
      for (text of contentList) {
        let td = document.createElement("td");
        let textNode = document.createTextNode(text);
        td.appendChild(textNode);
        tr.appendChild(td);
      }
    }	  
  }
}

// solution for 3(b)
function getJoke() {
	let query = document.getElementById('categoriesDD').value;
	let url = "q3_getJoke.php"; // <-- pls use a relative path, not absolute path

	axios.get(url, {
		params: {
			query: query
		}
	})
	.then(response =>  {
		jokeText.innerText = response.data;
	})
	.catch(error => {
		jokeText.innerText = error.message;
	}); 
}

