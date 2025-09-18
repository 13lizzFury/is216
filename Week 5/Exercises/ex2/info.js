function getData() {
    // http://localhost/is216/Week5/Exercises/ex2/getData.php?type=products&limit=2

    let limit = document.getElementById('limit').value;
    console.log("limit: " + limit);

    let select = document.getElementsByTagName('select')[0].value;
    console.log(select);

    let api_endpoint_url = `http://localhost/is216/Week5/Exercises/ex2/getData.php?type=${select}&limit=${limit}`;

    axios.get(api_endpoint_url).
    then(response => {
        console.log(response.data.records); // Array of Objects

    }).
    catch(error => { // Case 2 - API endpoint was not valid or any type of error
        console.log(error.message);
    })
}