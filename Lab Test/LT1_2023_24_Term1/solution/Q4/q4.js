// DO NOT MODIFY THE FOLLOWING URLs
var url1 = "sales1.json"
var url2 = "sales2.json"

 
function mergeSales(elem, title, url1, url2) {

    var data = []
    
    // ADD CODE BELOW
    axios
     .get(url1)
     .then((response) => {
        // retrieve sales from sales
        let sales1 = response.data;
        console.log(sales1)

        // bug 1: second ajax call should not be outside
        axios
        .get(url2)
        .then((response) => {
            // retrieve sales from sales2
            let sales2 = response.data;
            //console.log(sales2)
        
            sales = sales1.books.concat(sales2.books)
            console.log(sales)

            let authorSales = {} 
            
            for(let item of sales) {  
                if(item.author in  authorSales) { 
                    authorSales[item.author] += item.sales 
                } else {
                    authorSales[item.author] = item.sales
                }
            }
    
            for(let author in authorSales) {
                let x = { "author": author, "sales": authorSales[author] }
                data.push(x)
            }
            console.log(data)
            display(elem, data, title)
            
        })
         
     })
     
}

function sortSales(elem, title, url1, url2) {
    var data = []
    axios
     .get(url1)
     .then((response) => {
        // retrieve sales from sales
        let sales1 = response.data;
        console.log(sales1)

        axios
        .get(url2)
        .then((response) => {
            // retrieve sales from sales2
            let sales2 = response.data;
            //console.log(sales2)
        
            sales = sales1.books.concat(sales2.books)
            console.log(sales)

            let authorSales = {} 
    
            for(let item of sales) {  
                if(item.author in  authorSales) { 
                    authorSales[item.author] += item.sales 
                } else {
                    authorSales[item.author] = item.sales
                }
            }
    
            for(let author in authorSales) {
                if(authorSales[author] >= 5) {
                    let x = { "author": author, "sales": authorSales[author] }
                    data.push(x)
                }
            }
            
            data.sort(function(a, b){
                return b.sales - a.sales
            })
            console.log(data)
            display(elem, data, title) 
        })
        
     })     
}
