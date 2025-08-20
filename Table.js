let arrProblems = [
    ["Croudstrike", 2024, "$5.4B", "Faulty update to security software"],
    ["Facebook", 2020, "$90M", "Misconfiguration which caused downtime"],
    ["Citibank", 2020, "$900M", "Mistaken transfer"],
    ["Mars Climate Orbiter", 1999, "327M", "Metric versus imperial measurement issue"]
];

// for loop to loop through the rows
for (let i=0; i < arrProblems.length; i++){

    // create a tr tag
    let tr = document.createElement("tr");
   
    // for loop for each column of data
    for (let j=0; j < arrProblems[i].length; j++){

        // create a td tag for each piece of data in the row/array
        let td = document.createElement("td");

        // set the data from row i and column j to the td that we just created
        td.textContent = arrProblems[i][j];

        // add the td to the tr
        tr.appendChild(td);
    }

    // add the row to the table
    document.getElementById("tblData").appendChild(tr);
}