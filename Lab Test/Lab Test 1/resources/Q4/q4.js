/*
  Name:  Benjamin Ho
  Email: benjamin.ho.2024
*/
const API_URL = 'api.php';

//Part A: Define getStations function which uses Axios GET request for 
//retrieving all bike stations and availability information. The getStations function
//should also call displayStations and populateStationDropdowns functions. (1 m)
function getStations () {
    for (station in stations) {
        document.createElement();
    }
}


function displayStations(stations) {
    const stationList = document.getElementById('station-list');
    stationList.textContent = '';
    //Part A: Display the list of bike stations and the availability of bicycles and docks in each (1 m)

}

function populateStationDropdowns(stations) {
    const stationSelect = document.getElementById('station-select');
    const returnStationSelect = document.getElementById('return-station-select');
    //Part B: Populate list of bike stations in drop down list (1 m)

}

async function postAction(action, stationId) {
    //Part C: Use Axios POST request for bike rental or return at selected bike station (1.5 m)

    //Part D: Handle erroneous cases for bike rental or return (0.5 m)

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