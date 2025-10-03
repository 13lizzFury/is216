/*
    NAME: Benjamin Ho
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
        
        for (book of book_sales) {
            if (book.author in author_sales) { 
                author_sales[book.author] += book.sales;
            }
            else {
                author_sales[book.author] = book.sales;
            }  
        }

        axios.get(url2).
        then(response => {
            book_sales = response.data.books
            
            for (book of book_sales) {
                if (book.author in author_sales) { 
                    author_sales[book.author] += book.sales;
                }
                else {
                    author_sales[book.author] = book.sales;
                }  
            }

            for (author in author_sales) {
                data.push({ "author": author, "sales": author_sales[author] });
            }
            
            display(elem, data, title);
        }).
        catch(error => {
            console.log(error.message);
        });
    }).
    catch(error => {
        console.log(error.message);
    });
}

function sortSales(elem, title, url1, url2) {
    var data = []
    // ADD CODE HERE
    let author_sales = [];

    axios.get(url1)
    .then((result) => {
        let sales1 = result.data.books;

        axios.get(url2)
        .then((result) => {
            let sales2 = result.data.books;

            let combined_sales = sales1.concat(sales2); 

            for (book_sale of combined_sales) {
                if (book_sale.author in author_sales) { 
                    author_sales[book_sale.author] += book_sale.sales;
                }
                else {
                    author_sales[book_sale.author] = book_sale.sales;
                }  
            }

            for (author in author_sales) {
                if (author_sales[author] < 5) {
                    delete author_sales[author];
                }
            }


            console.log(author_sales);

            for (author in author_sales) {
                console.log(author);
                data.push({ "author": author, "sales": author_sales[author] });
            }

            console.log(data);
            data.reverse(function(a, b){return a.sales - b.sales});
            console.log(data);
            
            display(elem, data, title);

        }).catch((err) => {
            console.log(err.message);
        });

    }).catch((err) => {
        console.log(err.message);
    });  
}