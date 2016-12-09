(function() {
    var margin = { top: 0, left: 0, right: 0, bottom: 0},
    height = 400 - margin.top - margin.bottom,
    width = 400 - margin.left - margin.right;

  var svg = d3.select("#chart")
        .append("svg")
        .attr("height", height + margin.top + margin.bottom)
        .attr("width", width + margin.left + margin.right)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var lPositionScale = d3.scalePoint().domain(['1', '2', '3', '4', '5']).range([35, 135])
  var tPositionScale = d3.scalePoint().domain(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']).range([185,385])
  var xPositionScale = d3.scaleLinear().domain([1296, 9016]).range([150, 350])

  var x1 = 110
  var x2 = x1+100
  var xtext = x1-20

  var legenddata = [
      {"ind": "1", "count": "1-10", "lineweight": 0.25},
      {"ind": "2", "count": "10-20", "lineweight": 0.75},
      {"ind": "3", "count": "20-40", "lineweight": 2},
      {"ind": "4", "count": "20-80", "lineweight": 3},
      {"ind": "5", "count": "80-282", "lineweight": 4}];

  svg.selectAll(".legendline")
    .data(legenddata)
    .enter().append("line")
    .attr("class", "legendline")
    .attr("x1", x1)
    .attr("y1", function(d) {
      return lPositionScale(d.ind)
    })
    .attr("x2", x2)
    .attr("y2", function(d) {
      return lPositionScale(d.ind)
    })
    .attr("stroke", "#343434")
    .attr("stroke-width", function(d) {
      return d.lineweight
    })

  svg.selectAll(".legendtext")
    .data(legenddata)
    .enter().append("text")
    .attr("class", "legendtext")
    .attr("x", xtext)
    .attr("y", function(d) {
      return lPositionScale(d.ind) + 3
    })
    .style("font-size", "12px")
    .style("text-align", "center")
    .style("text-anchor", "end")
    .text(function(d) {
      return d.count
    })

  var timedata = [
    {"ind": "1", "time": "00:00", "linelength": 9016},
    {"ind": "2", "time": "00:30", "linelength": 6389},
    {"ind": "3", "time": "01:00", "linelength": 4712},
    {"ind": "4", "time": "01:30", "linelength": 3417},
    {"ind": "5", "time": "02:00", "linelength": 2760},
    {"ind": "6", "time": "02:30", "linelength": 1958},
    {"ind": "7", "time": "03:00", "linelength": 1728},
    {"ind": "8", "time": "03:30", "linelength": 1302},
    {"ind": "9", "time": "04:00", "linelength": 1296},
    {"ind": "10", "time": "04:30", "linelength": 1598}]

  svg.selectAll(".timeline")
    .data(timedata)
    .enter().append("line")
    .attr("class", "timeline")
    .attr("x1", x1)
    .attr("y1", function(d) {
      return tPositionScale(d.ind)
    })
    .attr("x2", function(d) {
      return xPositionScale(d.linelength)
    })
    .attr("y2", function(d) {
      return tPositionScale(d.ind)
    })
    .attr("stroke", "#343434")
    .attr("stroke-width", 0.75)

  svg.selectAll(".timetext")
    .data(timedata)
    .enter().append("text")
    .attr("class", "timetext")
    .attr("x", xtext)
    .attr("y", function(d) {
      return tPositionScale(d.ind) + 3
    })
    .style("font-size", "12px")
    .style("text-align", "center")
    .style("text-anchor", "end")
    .text(function(d) {
      return d.time
    })

    svg.selectAll(".blehtext")
      .data(timedata)
      .enter().append("text")
      .attr("class", "blehtext")
      .attr("x", function(d) {
        return xPositionScale(d.linelength) + 3
      })
      .attr("y", function(d) {
        return tPositionScale(d.ind) + 3
      })
      .style("font-size", "12px")
      .style("text-align", "left")
      // .style("text-anchor", "end")
      .text(function(d) {
        return d.linelength
      })








  // svg.append("line")
  //   .attr("x1", 100)
  //   .attr("y1", 50)
  //   .attr("x2", 200)
  //   .attr("y2", 50)
  //   .attr("stroke", "#343434")
  //   .attr("stroke-width", 0.25)
  //
  // svg.append("line")
  //   .attr("x1", 100)
  //   .attr("y1", 70)
  //   .attr("x2", 200)
  //   .attr("y2", 70)
  //   .attr("stroke", "#343434")
  //   .attr("stroke-width", 0.75)
  //
  //
  // svg.append("line")
  //   .attr("x1", 100)
  //   .attr("y1", 90)
  //   .attr("x2", 200)
  //   .attr("y2", 90)
  //   .attr("stroke", "#343434")
  //   .attr("stroke-width", 2)
  //
  // svg.append("line")
  //   .attr("x1", 100)
  //   .attr("y1", 110)
  //   .attr("x2", 200)
  //   .attr("y2", 110)
  //   .attr("stroke", "#343434")
  //   .attr("stroke-width", 3)
  //
  //
  // svg.append("line")
  //   .attr("x1", 100)
  //   .attr("y1", 130)
  //   .attr("x2", 200)
  //   .attr("y2", 130)
  //   .attr("stroke", "#343434")
  //   .attr("stroke-width", 4)



})();
