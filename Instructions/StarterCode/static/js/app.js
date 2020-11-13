// from data.js
var tableData = data;

// YOUR CODE HERE!

//level 1
//chart 
var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(ufo) {
  console.log(ufo);
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td");
    cell.text(value);
   });
 });

//button
//var button = d3.select("#filter-btn");
//var form = d3.select("form");
//button.on("click", runEnter);
//form.on("submit", runEnter);
//function runEnter() {
//  d3.event.preventDefault();
//  var inputElement = d3.select(".form-control");
//  var inputValue = inputElement.property("value");
//  console.log(inputElement);
//  console.log(inputValue);
//  var results = tableData.filter(ufo => ufo.datetime === inputValue);
//  tbody.html("");
//  console.log(results)
//  if (results == 0){
//    tbody.text("No UFO Sightings")
//  }
//  else {
//    results.forEach((ufo) => {
//      var row = tbody.append("tr");
//      Object.entries(ufo).forEach(function([key, value]) {
//        console.log(key, value);
//        var cell = row.append("td");
//      cell.text(value);
//      });
//    });
//  };
//};

//level 2

var button = d3.select("#filter-btn");
var form = d3.select("form");
button.on("click", runEnter);
form.on("submit", runEnter);
function runEnter() {
  d3.event.preventDefault();
  var inputElement = d3.select(".form-control");
  var inputValue = inputElement.property("value");
  console.log(inputElement);
  console.log(inputValue);
  var results = tableData.filter(ufo => ufo.datetime == inputValue || ufo.city == inputValue || ufo.state == inputValue ||ufo.country == inputValue|| ufo.shape == inputValue);
  tbody.html("");
  console.log(results)
  if (results == 0){
    tbody.text("No UFO Sightings")
  }
  else {
    results.forEach((ufo) => {
      var row = tbody.append("tr");
      Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
      cell.text(value);
      });
    });
  };
}