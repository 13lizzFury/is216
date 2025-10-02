/*
    NAME: Benjamin
    EMAIL: benjamin.ho.2024
*/
var url1 = "sales1.json"
var url2 = "sales2.json"


function mergeSales(elem, title, url1, url2) {
    var data = []
    // ADD CODE HERE

    let author_sales = [];

    axios.get(url1).
    then(response => {
        book_sales = response.data.books
        // console.log(book_sales); // Array of Objects
        
        for (book of book_sales) {
            if (book.author in author_sales) { 
                author_sales[book.author] += book.sales;
            }
            else {
                author_sales[book.author] = book.sales;
            }  
        }

        console.log("URL1");
        console.log(author_sales);
    }).
    catch(error => { // Case 2 - API endpoint was not valid or any type of error
        console.log(error.message);
    });


    axios.get(url2).
    then(response => {
        book_sales = response.data.books
        // console.log(book_sales); // Array of Objects
        
        for (book of book_sales) {
            if (book.author in author_sales) { 
                author_sales[book.author] += book.sales;
            }
            else {
                author_sales[book.author] = book.sales;
            }  
        }

        console.log("URL2");
        console.log(author_sales);
    }).
    catch(error => { // Case 2 - API endpoint was not valid or any type of error
        console.log(error.message);
    });

    for (author of author_sales) {
        console.log(author);
        data.push({ "author": author, "sales": author_sales[author] });
    }

    console.log(data)

    display(elem, data, title)
     
}

function sortSales(elem, title, url1, url2) {
    var data = []
    // ADD CODE HERE
    
    display(elem, data, title)
     
}