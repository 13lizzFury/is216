/*
  Name: Benjamin Ho
  Email: benjamin.ho.2024
*/
// Global variables provided
let logNumber = 0;
const maxLogs = 10;

// Add any other global variables you need here
//
// End of add global variables

function addLog(newLog) {
    const logBox = document.getElementById("logs");

    for(log of newLog) {
        // Part C: Add code below
        logEntry = document.createElement("li");
        logEntryMsg = document.createTextNode(log);

        logEntry.appendChild(logEntryMsg);
        logBox.appendChild(logEntry);

        logNumber += 1;
        // End of Part C
    }
}

function halveLogs() {
    const logBox = document.getElementById("logs");
    const logItems = logBox.getElementsByTagName('li');

    // Part E: Add code below

    logsToRemove = Math.floor(logNumber / 2);

    if (logNumber > 1) {
        document.getElementById("errorMsg").innerText  = "";

        for (count = 0; count < logsToRemove; count += 1) {
            logBox.removeChild(logItems[0]);
        }

        logNumber -= logsToRemove;
    }
    else {
        document.getElementById("errorMsg").innerText  = "Not enough logs to remove";
    }

    
    // End of Part E
}

function changeColor() {
    const toggleButtonIsDisabled = document.getElementById('toggleButton').disabled;
    if (!toggleButtonIsDisabled) {
        // Part D: Debug the following block of if code
        if(logNumber + 3 > maxLogs) {
            document.getElementById("errorMsg").innerText  = "Clear some logs before proceeding";
        }
        // End debugging task Part D

        else {
            const bulb = document.getElementById('bulb');
            // Part A: Add code below
            document.getElementById("errorMsg").innerText  = "";

            if(bulb.style.fill == '') {
                bulb.style.fill = 'yellow';
            }
            else {
                bulb.style.fill = '';
            }
            // End of Part A
            
            delayButton();

            if(bulb.style.fill == 'yellow') {
                addLog(["User interacts.", "ON.", "Bulb lights up."]);
            }
            else {
                addLog(["User interacts.", "OFF.", "Bulb turns off."]);
            }
        }
    }
}

function delayButton() {
    // Part B: Add code below
    document.getElementById("toggleButton").disabled = true;

    setTimeout(() => {
        document.getElementById("toggleButton").disabled = false;
    }, 1000);
    // End of Part B
}