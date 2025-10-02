function getData() {
    // http://localhost/is216/Week5/Exercises/ex2/getData.php?type=products&limit=2

    let limit = document.getElementById('limit').value;
    console.log("limit: " + limit);

    let select = document.getElementsByTagName('select')[0].value;
    console.log(select);

    let api_endpoint_url = `http://localhost/is216/Week%205/Exercises/ex2/getData.php?type=${select}&limit=${limit}`;

    axios.get(api_endpoint_url).
    then(response => {
        console.log(response.data.records); // Array of Objects

        let results = response.data.records;

        let result = document.getElementById("result");
        result.textContent = "";

        let table = document.createElement("table");
        table.className = "table";
        let th_row = table.insertRow();

        for (obj_info in results[0]) {
            console.log(obj_info);
            let th = document.createElement("th");
            th.textContent = obj_info;
            th_row.appendChild(th);
        }

        for (obj of results) {
            console.log(obj);
            let row = table.insertRow();

            for (obj_info in obj) {
                row.insertCell().textContent = obj[obj_info];
            }
        }
        
        result.appendChild(table);
    }).
    catch(error => { // Case 2 - API endpoint was not valid or any type of error
        console.log(error.message);
    })
}