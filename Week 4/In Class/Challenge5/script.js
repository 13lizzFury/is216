function generate_board() {

    //============================================================================
    // Task 1
    // Retrieve the friend name(s) from the 'friends' multi-select dropdown menu
    //============================================================================

    // Array to contain the names of user-selected friend(s)
    // For example, if the user selected 'Darryl' and 'Yin Kit',
    //   this array's value will be:
    //      [ 'darryl', 'yinkit' ]
    //
    let friends = []; // Initialize to empty


    // YOUR CODE GOES HERE

    let selected_friends = document.getElementById("friends").selectedOptions;

    for (friend_option of selected_friends) {
        friends.push(friend_option.getAttribute("value"));
    }

    // Display user's selection in Developer Tools --> Console.
    console.log(friends);



    //============================================================================
    // Task 2
    // Given one or more selected friends and given 4 fruit names,
    //   generate a 'randomized' Array of finalized card names.
    // 
    // Card names are as follows:
    //    apple_brandon.png
    //    banana_brandon.png
    //    kiwi_brandon.png
    //    orange_brandon.png
    //
    // where 'brandon' can be replaced with another friend's name,
    // e.g.
    //    apple_nick.png
    // (and so on)
    //
    // Display all 4 fruit cards of one or more selected friends.
    //
    // NOTE: Each card must be displayed TWO and ONLY TWO times (thus, a "pair")
    //       (such that the user can attempt to 'match').
    //
    // Check out this utility function (declared at the bottom of this file)
    //   for randomizing the order of Array elements.
    //        shuffleArray()
    //============================================================================
    const fruits = ['apple', 'banana', 'kiwi', 'orange'];

    // YOUR CODE GOES HERE

    cards = [];

    for (friend of friends) {
        for (fruit of fruits) {
            cards.push("cards/" + fruit + "_" + friend + ".png");
            cards.push("cards/" + fruit + "_" + friend + ".png");
        }
    }

    shuffleArray(cards);


    //============================================================================
    // Task 3
    // Display the cards in <div id="game-board">
    //
    // For this, we will make use of Template Literal (using backticks).
    //
    // NOTE: The game board will always have 4 columns and N rows, where N denotes
    //       (number of selected friends) x 2.
    //
    //       For example, if I chose 'Brandon', 'Darryl', and 'Nick' (3 friends),
    //         then the newly generated game board will be
    //         6 (rows) by 4 (columns).
    //============================================================================
    const num_cols = fruits.length;
    const num_rows = friends.length * 2;

    console.log("# of columns: " + num_cols)
    console.log("# of rows: " + num_rows);


    // YOUR CODE GOES HERE

    // You will need to rewrite the value of this result_str (String).

    max_score = friends.length * fruits.length;

    let result_str = ``;

    for (row_count = 1; row_count <= num_rows; row_count++) {
        result_str += `<div class='row'>`;

        for (col_count = 1; col_count <= num_cols; col_count++) {
            let id = (row_count - 1) * 4 + col_count;

            result_str += `
                <div class='column'>
                    <img src='cards/hidden.png' id='${id}' onclick='flipCard(this)'>
                </div>
            `;
        }

        result_str += `</div>`;
    }

    document.getElementById("total-score").innerText = "Total Score: " + total_score;


    // document.getElementById('game-board').innerHTML = ``;

    // for (row_count = 0; row_count < num_rows; row_count++) {
    //     var row = document.createElement("div");
    //     row.className = "row";

    //     for (col_count = 0; col_count < num_cols; col_count++) {
    //         var col = document.createElement("div");
    //         col.className = "column";

    //         var card = document.createElement("img");
    //         card.src = cards.pop();

    //         col.appendChild(card);
    //         row.appendChild(col);
    //     }

    //     document.getElementById("game-board").appendChild(row);
    // }


    // DO NOT MODIFY THE FOLLOWING
    // Replace the innerHTML of <div id="game-board">
    //   with a newly prepared HTML string (result_str).
    document.getElementById('game-board').innerHTML = result_str;
}


// Utility Function
// DO NOT MODIFY
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}


function flipCard(card) {
    cards_flipped.push(card);

    let card_id = card.getAttribute("id");
    card.setAttribute("src", cards[card_id - 1]);

    if (cards_flipped.length == 2) {
        let card_one = cards_flipped.pop();
        let card_two = cards_flipped.pop();

        if (card_one.getAttribute("src") == card_two.getAttribute("src")) {
            console.log("Match!");

            total_score += 1;
            document.getElementById("total-score").innerText = "Total Score: " + total_score;

            setTimeout(() => {
                card_one.setAttribute("style", "filter: opacity(75%)");
                card_one.removeAttribute("onclick");

                card_two.setAttribute("style", "filter: opacity(75%)");
                card_two.removeAttribute("onclick");
            },
                1500
            )
        }
        else {
            console.log("No Match!");

            setTimeout(() => {
                card_one.setAttribute("src", "cards/hidden.png");
                card_two.setAttribute("src", "cards/hidden.png");
            },
                1500
            )
        }
    }

    if (total_score == max_score) {
        document.getElementById("total-score").innerText = "All Matched, Congratulations!";
    }
}

var cards = [];
var cards_flipped = [];
var total_score = 0;
var max_score = 0;