/* Task 6 - API call */
function get_all_drinks() {
    console.log("[START] get_all_drinks()");

    // const api_endpoint_url = 'drinks.json'; // local file
    const api_endpoint_url = 'http://localhost/is216/Week%205/In%20Class/DrinksAPI/api/drink/read.php'; // external API endpoint

    axios.get(api_endpoint_url).
    then(response => {
        console.log("Axios call completed successfully!");

        // console.log(response.data);
        
        let section_results = document.getElementById('results');

        // Build a string of Bootstrap cards
        let result_str = ``;
        // let drinks_array = response.data.drinks; // Array of drink objects
        let drinks_array = response.data.records; // Array of drink objects
        console.log(drinks_array); // Array of drink objects

        /*
            Loop through drinks_array
            - each item is a drink
            - each drink should be a Boostrap card, each card will be a "col"
        */

        // Task 4 - Display Drinks
        //   Each drink is a Bootstrap card
        // Replace all the hard-coded strings with actual values as read from the JSON file
        for(let drink of drinks_array) {

            // console.log(drink);

            drink_photo_url = "http://localhost/is216/Week 5/In Class/DrinksAPI/" + drink.photo_url;

            result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${drink_photo_url}" 
                             class="card-img-top"
                             alt="${drink.name}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink.category} • ${drink.alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }

        // Inject the cards into the #results section
        section_results.innerHTML = result_str;
    }).
    catch(error => {
        console.log(error.message);

        // Task 5 - Data can't be loaded, display alert
        //   "Failed to load drinks data."
        // YOUR CODE GOES HERE

        const error_alert = document.createElement("div");
        error_alert.setAttribute("class", "alert alert-danger");

        const error_message = document.createTextNode("Failed to load drinks data.");

        error_alert.appendChild(error_message);
        document.getElementById("results").replaceWith(error_alert);

        console.log(error_alert);

    });

    console.log("[END] get_all_drinks()");
}


/* Task 7 - Category Dropdown Menu */
function populate_category_dropdown() {
    console.log("[START] populate_category_dropdown()");

    const api_endpoint_url = 'http://localhost/is216/Week%205/In%20Class/DrinksAPI/api/drink/category.php'; // API endpoint

    axios.get(api_endpoint_url).
    then(response => {

        console.log("Axios call completed successfully!");

        // YOUR CODE GOES HERE
        category_list = response.data.records; // Array of category names

        category_form = document.getElementById("category");

        for (category_name of category_list) {
            category_option = document.createElement("option");
            category_option.value = category_name;
            category_option.textContent = category_name;

            category_form.appendChild(category_option);
        }
    }).
    catch(error => {
        console.log(error.message);
    });

    console.log("[END] populate_category_dropdown()");
}


/* Task 8 - Category Dropdown Event Listener */
function get_filtered_drinks() {
    if (this.id == "category") {
        filters["c"] = this.value;
    }
    else if (this.id == "alcoholic") {
        filters["a"] = this.value;
    }
    else if (this.id == "name_search") {
        filters["n"] = this.value;
    }

    let results = document.getElementById('results');

    axios.get(
        "http://localhost/is216/Week%205/In%20Class/DrinksAPI/api/drink/search.php", {
        params: filters
    })
    .then((result) => {
        let drinks_array = result.data.records;
        console.log(drinks_array);

        let result_str = ``;

        for (drink of drinks_array) {
            drink_photo_url = "http://localhost/is216/Week 5/In Class/DrinksAPI/" + drink.photo_url;

            result_str += `
                <div class="col">
                    <div class="card h-100">
                        <img src="${drink_photo_url}" 
                             class="card-img-top"
                             alt="${drink.name}">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${drink.name}
                            </h5>
                            <p class="card-text small text-muted mb-0">
                                ${drink.category} • ${drink.alcoholic}
                            </p>
                        </div>
                    </div>
                </div>
            `;
        }

        results.innerHTML = result_str;
    })
    .catch((err) => {
        console.log(err.message);

        let error_alert = document.createElement("div");
        error_alert.className = "alert alert-danger";
        error_alert.textContent = "Failed to load drinks data.";

        results.replaceWith(error_alert);
    });
}


filters = {
    "c":"",
    "a":"",
    "n":""
};

category_form = document.getElementById("category");
category_form.addEventListener("change", get_filtered_drinks);

/* Task 9 - Alcoholic Dropdown Event Listener */

document.getElementById("alcoholic").addEventListener("change", get_filtered_drinks);

/* Task 10 - Name search input Event Listener */

document.getElementById("name_search").addEventListener("keyup", get_filtered_drinks)

// DO NOT MODIFY THE BELOW LINES
get_all_drinks();
populate_category_dropdown();