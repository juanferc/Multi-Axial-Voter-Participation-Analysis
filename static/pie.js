d3.csv("../static/Florida_data.csv").then(function(data) {
    console.log(data)

var zip_code = data.map(function(point){
    //return point["Zip_CoDE"]
    return String(point['Zip_CoDE'])
});
console.log(zip_code)
var voter_turnout = data.map(function(point){
    return point.turnout_rate
    // Change this to turnout later
});
var voter_registration = data.map(function(point){
  return point.registration_rate
});

var data = [{
    values: voter_turnout[1],
    labels: zip_code[1],
    domain: {colmun: 0},
    name: "Turnout",
    hoverinfo: "label+percent+name",
    hole: .4,
    type: "pie"
  },{
      values: voter_registration[1],
      labels: zip_code[1],
      domain: {column: 1},
      name: "Registration",
      hoverinfo: "label+percent+name",
      hole: .4,
      type: "pie"
  }];
  
  
var layout = {title: "Voter Participation Rates",
    annotations: [
        {
            font: {
                sinze: 20
            },
            showarrow: false,
            text: 'TRN',
            x: 0.17,
            y: 0.5
        },
        {
            font: {
                size:20
            },
            showarrow: false,
            text: 'REG',
            x: 0.82,
            y: 0.5
        }
    ],
    height: 400,
    width: 600,
    showlegend: false,
    grid: {rows: 1, columns:2}
  };
  

Plotly.newPlot("pie", data, layout);
})

