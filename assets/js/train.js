// Get the data from train.log and plot a line chart
let trainData = []; // store data in train.log
// fetch('https://github.com/ubicom-dsd-2023/dsd_mvps/tree/main/log/train.log')
fetch('../log/train.log')
  .then(response => response.text())
  .then(data => {
    trainData = data.split('\n'); // split data by row

    // transform data to x axis and y axis 
    trainData = trainData.map((line, index) => {
      let coordinates = line.split(' ');
      return { x: index, y: parseFloat(coordinates[1]) };
    });

    // plot line chart
    var chart = new CanvasJS.Chart("chartContainer", {
      title: {
        text: "Train Data Line Chart"
      },
      data: [{
        type: "line",
        dataPoints: trainData
      }]
    });

    chart.render();
  });

// plot dot chart 
let testData = []; // store data in test.log
// fetch('https://github.com/ubicom-dsd-2023/dsd_mvps/tree/main/log/test.log')
fetch('../log/test.log')
  .then(response => response.text())
  .then(data => {
    testData = data.split('\n'); // split by row

    // transfor data to x axis and y axis
    testData = testData.map((line, index) => {
      let coordinates = line.split(' ');
      return { x: index, y: parseFloat(coordinates[1]) };
    });

    // paint dot graph
    var chart = new CanvasJS.Chart("chartContainer", {
      title: {
        text: "Test Data Scatter Chart"
      },
      data: [{
        type: "scatter",
        dataPoints: testData
      }]
    });

    chart.render();
  });