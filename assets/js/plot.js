// Filter the sensor data according to the time range
function filterDataByTime(data, startTime, endTime) {
    return data.filter(function(d) {
      return (d.time >= startTime) && (d.time <= endTime);
    });
  }
  
  // Setting plotting parameters
  var margin = { top: 20, right: 20, bottom: 30, left: 50 };
  var width = 400 - margin.left - margin.right;
  var height = 250 - margin.top - margin.bottom;
  
  // The graph corresponding to each sensor is processed in a loop
  for (var i = 1; i <= 6; i++) {
    // Get sensorData from the data source
    var sensorData = getDataForSensor(i);
  
    // Create a canvas element
    var canvas = document.getElementById("sensor" + i);
    canvas.width = width + margin.left + margin.right;
    canvas.height = height + margin.top + margin.bottom;
  
    // Create a drawing area
    var svg = d3.select(canvas)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
    // Filter data
    var filteredData = filterDataByTime(sensorData, startTime, endTime);
  
    // Create X-axis coordinates
    var x = d3.scaleTime()
      .range([0, width])
      .domain(d3.extent(filteredData, function(d) { return d.time; }));
  
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
  
    // Create Y-axis coordinates
    var y = d3.scaleLinear()
      .range([height, 0])
      .domain([d3.min(filteredData, function(d) { return d.value; }), d3.max(filteredData, function(d) { return d.value; })]);
  
    svg.append("g")
      .call(d3.axisLeft(y));
  
    // Create a line chart
    var line = d3.line()
      .x(function(d) { return x(d.time); })
      .y(function(d) { return y(d.value); });
  
    svg.append("path")
      .datum(filteredData)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  }