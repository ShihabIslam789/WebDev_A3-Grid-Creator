let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
    //First we obtain elements by DOM method
    let grid = document.getElementById("grid");
    // store appended row elements to grid 
    let row = grid.insertRow(0);
    // starting from the first position  we add more rows based on columns
    row.insertCell(0);
    let number_columns = grid.rows[grid.rows.length - 1].cells.length - 1;
    //loop through the columns to add the needed rows 
    if(number_columns  >= 1)
    {
        for (let i = 0; i < number_columns; i++) {
            row.insertCell(0);
        }
    }
}
//Add a column
function addC() {
   //first we need to access the elements of the grid  using DOM methods
    let grid = document.getElementById("grid");
    //access to every row on the grid
    let everyRow = document.querySelectorAll("tr");

    for(let i = 0; i < everyRow.length; i++)
    { //iterate through every row to add cells horizontially
        // Fundamentally creates a new column each time
        let selectedRow = everyRow[i];

        selectedRow.insertCell(0);
    }
    if(everyRow.length < 1)
    {
        let newcolumn = grid.insertRow(0);
        newcolumn.insertCell(0);
    }

}
//Remove a row
function removeR() {
        // Access grid elements by DOM method
        let grid = document.getElementById("grid");
        // Delete the last inserted row 
        grid.deleteRow(numRows-1);
        // iterate integer number to track to continuously delete
     if(numRows > 1){ 
        numRows--;
     }// reset counter, can't delete if negative itneger
     else {
         numCols = 0;
         numRows = 0;
     }
        
    }
function removeC() 
{
    // Gets every row currently exsisting
    let everyRow = document.querySelectorAll("tr");
    //will go through each row and delete a column
    for (let i = 0;  i < everyRow.length; i++) {

        let selectedRow = everyRow[i];
        selectedRow.deleteCell(0);
    } //this line of code double checks the columns and deletes extra columns
     if (everyRow[0].cells.length === 0){
         for (let k = 0; k < everyRow.length; k++) {
             document.getElementById("grid").deleteRow(0);
         }
     }
}
//sets global var for selected color from html file
function selected() {
    
    colorSelected = document.getElementById("selectedID").value;

    //function created to force selected color is used
    function clickChanger(color)
    {
        //looks at grid if it sees "td" conditions from css file
        if(color.target.nodeName.toLowerCase() === "td")
        {
            // corrects the color
            color.target.style.backgroundColor = colorSelected;
        }
    }

    // obtains elements from grid to respond to function
    document.getElementById("grid").addEventListener("click", clickChanger);    
}
//press to color every space in the grid
function fill() {
    //Go through each open space in grid and color from what is selected.
    document.querySelectorAll('td').forEach(td => td.style.backgroundColor = document.getElementById("selectedID").value);
}
//button to wipe away all colors present
function clearAll() {
    //Easierst solution is to make everything white since that is the default
    document.querySelectorAll('td').forEach(td => td.style.backgroundColor = "white");
}
// the function will iterate through all grid spaces and replace no color or white 
// with the selected color from selected function
function fillU() {
    document.querySelectorAll('td').forEach(function(td)
    {
        if(td.style.backgroundColor === "white" || td.style.backgroundColor === "")
        {
            td.style.backgroundColor = document.getElementById("selectedID").value;
        }
    });
}
