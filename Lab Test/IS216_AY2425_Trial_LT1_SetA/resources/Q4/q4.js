/*
  Name:  Benjamin Ho
  Email: benjamin.ho.2024
*/
const API_URL = 'api.php';

//Part A: Define getStations function which uses Axios GET request for 
//retrieving all bike stations and availability information. The getStations function
//should also call displayStations and populateStationDropdowns functions. (1 m)
function getStations () {    
    axios.get(API_URL)
    .then((result) => {
        let stations = result.data;
        console.log(stations);

        displayStations(stations)
        populateStationDropdowns(stations);
    }).catch((err) => {
        console.log(err.message);
    });
}


function displayStations(stations) {
    const stationList = document.getElementById('station-list');
    stationList.textContent = '';
    //Part A: Display the list of bike stations and the availability of bicycles and docks in each (1 m)

    for (station of stations) {
        let station_item = document.createElement("div");
        station_item.className = "station-item";
        
        let station_name = document.createElement("h3");
        station_name.textContent = station.name;

        let avail_bikes = document.createElement("p");
        avail_bikes.textContent = "Available Bikes: " + station.available_bikes;

        let avail_docks = document.createElement("p");
        avail_docks.textContent = "Available Docks: " + station.available_docks;

        station_item.appendChild(station_name);
        station_item.appendChild(avail_bikes);
        station_item.appendChild(avail_docks);

        stationList.appendChild(station_item);
    }
}

function populateStationDropdowns(stations) {
    const stationSelect = document.getElementById('station-select');
    const returnStationSelect = document.getElementById('return-station-select');
    //Part B: Populate list of bike stations in drop down list (1 m)
    stationSelect.textContent = "";
    returnStationSelect.textContent = "";

    for (station of stations) {
        let station_option = document.createElement("option");
        station_option.value = station.id;
        station_option.textContent = station.name;

        let return_station_option = station_option.cloneNode(true);

        stationSelect.appendChild(station_option);
        returnStationSelect.appendChild(return_station_option);
    }
}

async function postAction(action, stationId) {
    //Part C: Use Axios POST request for bike rental or return at selected bike station (1.5 m)

    //Part D: Handle erroneous cases for bike rental or return (0.5 m)
    axios.post(API_URL,
        {
            "action": action,
            "station_id": stationId
        }
    )
    .then((result) => {
        console.log(result);
        alert(result.data.message);
    }).catch((err) => {
        console.log(err.message);
        alert("Error " + action + "ing bike");
    });
}

async function rentBike() {
    const stationId = document.getElementById('station-select').value;
    if (!stationId) {
        alert('Please select a station');
        return;
    }
    
    await postAction('rent', stationId);
    getStations();
    
}

async function returnBike() {
    const stationId = document.getElementById('return-station-select').value;
    if (!stationId) {
        alert('Please select a station');
        return;
    }
    
    await postAction('return', stationId);
    getStations();
    
}

// Add event listeners
document.getElementById('rent-btn').addEventListener('click', rentBike);
document.getElementById('return-btn').addEventListener('click', returnBike);

// Initial load of stations
getStations();