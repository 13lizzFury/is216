/* Task 6 - API call */
function get_all_drinks() {
    console.log("[START] get_all_drinks()");

    const api_endpoint_url = 'drinks.json'; // local file

    axios.get(api_endpoint_url).
    then(response => {
        console.log("Axios call completed successfully!");

        let section_results = document.getElementById('results');

        // Build a string of Bootstrap cards
        let result_str = ``;
        let drinks_array = response.data.drinks; // Array of drink objects
        console.log(drinks_array); // Array of drink objects

        // Task 4 - Display Drinks
        //   Each drink is a Bootstrap card
        // Replace all the hard-coded strings with actual values as read from the JSON file
        // for(let drink of drinks_array) {
        //     result_str += `
        //         <div class="col">
        //             <div class="card h-100">
        //                 <img src="placeholder.png" 
        //                      class="card-img-top"
        //                      alt="Drink Name">
        //                 <div class="card-body">
        //                     <h5 class="card-title">
        //                         Drink Name
        //                     </h5>
        //                     <p class="card-text small text-muted mb-0">
        //                         Drink Category • Alcoholic Or Not
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //     `;
        // }

        // Inject the cards into the #results section
        section_results.innerHTML = result_str;
    }).
    catch(error => {
        console.log(error.message);

        // Task 5 - Data can't be loaded, display alert
        //   "Failed to load drinks data."
        // YOUR CODE GOES HERE
    });

    console.log("[END] get_all_drinks()");
}


/* Task 7 - Category Dropdown Menu */
function populate_category_dropdown() {
    console.log("[START] populate_category_dropdown()");

    const api_endpoint_url = ''; // API endpoint

    axios.get(api_endpoint_url).
    then(response => {

        console.log("Axios call completed successfully!");

        // YOUR CODE GOES HERE

    }).
    catch(error => {
        console.log(error.message);
    });

    console.log("[END] populate_category_dropdown()");
}


/* Task 8 - Category Dropdown Event Listener */



/* Task 9 - Alcoholic Dropdown Event Listener */



/* Task 10 - Name search input Event Listener */





// DO NOT MODIFY THE BELOW LINES
get_all_drinks();
populate_category_dropdown();