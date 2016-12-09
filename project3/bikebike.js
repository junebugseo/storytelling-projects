(function() {
    var margin = { top: 0, left: 0, right: 0, bottom: 0},
    height = 945 - margin.top - margin.bottom,
    width = 630 - margin.left - margin.right;

  // var svg = d3.select("#base")
  //       .append("svg")
  //       .attr("height", height + margin.top + margin.bottom)
  //       .attr("width", width + margin.left + margin.right)
  //       .append("g")
  //       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  // var stationdata = [{"name": "Cooper Square & E 7 St", "x": 312.09, "y": 493.78},{"name": "Allen St & Stanton St", "x": 321.736, "y": 536.972},{"name": "W 4 St & 7 Ave S", "x": 258.611, "y": 465.219}]

  // d3.queue()
  //   .defer(d3.csv, "citibike_count.csv")
  //   .await(ready)

  // var projection = d3.geoMercator()
  //   // .center([-73.990134, 40.732707])
  //   .translate([width / 2], [height / 2])
  //   .scale(50);

  // var path = d3.geoPath()
  //   .projection(projection);

  // function ready (error, data)   {
    // console.log(data)

  //   svg.selectAll(".station-circle")
  //     .data(data)
  //     .enter().append("circle")
  //     .attr("class", "station-circle")
  //     .attr("r", 5)
  //     .attr("fill", "red")
  //     .attr("opacity", 0.3)
  //     .attr("cx", function(d) {
  //       var coords = projection([d.dest_x, d.dest_y])
  //       console.log(coords[0])
  //     })
  //     .attr("cy", function(d) {
  //       var coords = projection([d.dest_x, d.dest_y])
  //       console.log(coords[1])
  //     })
  //
  // }

  d3.select("#cooper_dissolve")
   .append("object")
   .attr("class", "cooper_dissolve")
   .attr("data", "cooper.svg")
   .attr("width", 630)
   .attr("height", 945)
   .attr("type", "image/svg")
   .style("visibility", "hidden");


  d3.select("#allen_dissolve")
   .append("object")
   .attr("class", "allen_dissolve")
   .attr("data", "allen.svg")
   .attr("width", 630)
   .attr("height", 945)
   .attr("type", "image/svg")
   .style("visibility", "hidden");

   d3.select("#w4st_dissolve")
    .append("object")
    .attr("class", "w4st_dissolve")
    .attr("data", "w4st.svg")
    .attr("width", 630)
    .attr("height", 945)
    .attr("type", "image/svg")
    .style("visibility", "hidden");



  d3.select("#cooper_button").on("click", function() {
    d3.select(".cooper_dissolve")
      .style("visibility", "visible")

  })

  d3.select("#allen_button").on("click", function() {
    d3.select(".allen_dissolve")
      .style("visibility", "visible")
   })

  d3.select("#w4st_button").on("click", function() {
    d3.select(".w4st_dissolve")
      .style("visibility", "visible")
  })

  d3.select("#default_button").on("click", function() {
    d3.select(".cooper_dissolve")
      .style("visibility", "hidden")
    d3.select(".allen_dissolve")
      .style("visibility", "hidden")
    d3.select(".w4st_dissolve")
      .style("visibility", "hidden")

  })








// cooper.selectAll(".img").data([0]);
//   .enter().append("img")
//   .attr("xlink:href", "@Url.Content(" + "base.png" + ")")
//   .attr("x", 0)
//   .attr("y", 0)
//   .attr("width", "630")
//   .attr("height", "945")

})();
