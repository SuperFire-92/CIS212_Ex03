function clearTextbox()
{
  //Clears the text of the newCar textbox
  document.getElementById("txt_html_newCar").value = "";
}

function addCar()
{
  var table = document.getElementById("carsTable");
  //this does not work since it creates a new table every time it runs
  //table.innerHTML += "<tr><td>test</td></tr>"

  var numRows = table.rows.length;
  var numCols = table.rows[0].cells.length - 1;
  var row;
  var cell;

  var newCarInfo = document.getElementById("txt_html_newCar").value;

  var anchor = document.createElement("a");
  anchor.href = "carInfo.html";
  anchor.setAttribute("onclick","getCarName(this.id)");
  anchor.innerText = newCarInfo;
  anchor.setAttribute("id",newCarInfo);

  row = table.insertRow(numRows);
  cell = row.insertCell(numCols);
  //cell.innerHTML = newCarInfo;
  cell.appendChild(anchor);


  clearTextbox();
}

function getCarName(clickedId)
{
  var car = document.getElementById(clickedId).innerHTML;
  sessionStorage.setItem("carName", car);
}

function setTitle()
{
  var tag = document.getElementById("carTitle");
  var carTitle = sessionStorage.getItem("carName");

  tag.innerHTML = carTitle;
}
