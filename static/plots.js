d3.csv("/static/FinalProjectData.csv").then(function (data) {
  // y axis
  var voter_turnout = data.map(function (point) {
    return point.turnout_rate
  });

  // y axis
  var voter_registration = data.map(function (point) {
    return point.registration_rate
  });

  var zip_code = data.map(function (point) {
    return point['Zip_CoDE'].toString()
  });

  var trace1 = {
    x: zip_code,
    y: voter_turnout,
    name: 'Voter Turnout',
    type: 'bar',
  };

  var trace2 = {
    x: zip_code,
    y: voter_registration,
    name: 'Voter Registration',
    type: 'bar',
  };

  var data = [trace1, trace2];
  var layout = {
    width: 1000,
    barmode: 'group',
    bargap: 100,
    xaxis: {
      type: 'category',
      tickangle: -45,
      autorange: true
    },
    yaxis: {
      tickformat: ',.0%',
      range: [0, 1],
    }
  };

  Plotly.newPlot('bar-plot', data, layout);
});
