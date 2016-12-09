(function() {
    var margin = { top: 0, left: 0, right: 0, bottom: 0},
    height = 945 - margin.top - margin.bottom,
    width = 630 - margin.left - margin.right;

  var svg = d3.select("#base")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  d3.select("svg")
    .append("image")
    .attr("xlink:href", "base.png")
    .attr("height", "945")
    .attr("width", "630")
    .attr("x", "0")
    .attr("y", "0")




})();
