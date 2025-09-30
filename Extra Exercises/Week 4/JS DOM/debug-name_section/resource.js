// Make minimal changes to make this work as described

function addDelBtn(tr) {
   const tdList = tr.getElementsByTagName('td');
   const lastTd = tdList[tdList.length - 1];

   let delBtn = document.createElement('button');
   lastTd.append(delBtn);

   delBtn.value = "DEL";
   delBtn.classList.add("btn", "btn-warning");
   delBtn.addEventListener('onclick', function () {
      tr.remove();
   });
}

function doAdd() {
   const studentName = document.getElementById("student").value;
   const sections = document.getElementsByName("section");
   const tbody = document.getElementsByTagName("tbody");

   // append a new row
   let tr = document.createElement("tr");
   tbody.append(tr);

   // 1st column - student name
   let th = document.createElement("th");
   tr.append(th);
   th.setAttribute("scope", "row");
   th.innerText = studentName;

   // 2nd column - section
   let td = document.createElement('td');
   tr.append(td);
   td.textContent = sections.value;

   // 3rd column - del button
   let td2 = document.createElement('td');
   tr.append(td2);

   addDelBtn(tr);

   // clear student input field
   studentName.value = '';
}


// main
const addBtn = document.getElementsByTagName("button");
// setup the event handler for the click event of the Add button
addBtn.addEventListener("onclick", doAdd());

// Add delete button to all existing rows
const tbody = document.getElementsByTagName("tbody");
for (let tr of tbody.getElementsByTagName("tr")) {
   addDelBtn(tr);
}
