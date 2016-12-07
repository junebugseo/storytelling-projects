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

  var stationdata = [
    {"short_name": "cooper", "name": "Cooper Square & E 7 St", "x": 312.09, "y": 493.78},
    {"short_name": "allen", "name": "Allen St & Stanton St", "x": 321.736, "y": 536.972},
    {"short_name": "w4st", "name": "W 4 St & 7 Ave S", "x": 258.611, "y": 465.219}];

  svg.selectAll("circle")
    .data(stationdata)
    .enter()
    .append("circle")
    .attr("id", function(d) {
      return d.short_name
    })
    .attr("cx", function(d) {
      return d.x
    })
    .attr("cy", function(d) {
      return d.y
    })
    .attr("r", 10)
    .attr("fill", "blue")
    .on("mouseover", function(d) {
      // svg.append("objects")
      //   .attr("class", d.short_name + "dissolve")
      //   .attr("data", d.short_name + ".svg")
      //   .attr("width", 630)
      //   .attr("height", 945)
      //   .attr("type", "image/svg")
      //   .attr("opacity", 100);
    })
    .on("mouseout", function(d) {

    })

    // .on("mouseover", function() {
    //   d3.select(this)
    //   .attr("fill","black")
    //
    // })
    // .on("mouseout", function() {
    //   d3.select(this)
    //   .attr("fill","blue")
    // })



  d3.json("borough.json", function(error, data) {
    if (error) throw error;



    var boros = topojson.feature(data, data.objects.boroughgeo).features

    var projection = d3.geoTransverseMercator()
    .center([-73.30, 40.30])
    .scale(200)
    .translate([width / 2, height / 2])

    var path = d3.geoPath().projection(projection);

    var g = svg.append("g")

    g.selectAll("path")
      .data(boros)
      .enter().append("path")
      .attr("d", path)
      .attr("fill", "none")
      .style("stroke", "black")
      .style("stroke-width", 0.5)
      .style("opacity", 0.5);

});

  d3.select("svg")
    .append("image")
    .attr("xlink:href", "base.png")
    .attr("height", "945")
    .attr("width", "630")
    .attr("x", "0")
    .attr("y", "0")




})();
