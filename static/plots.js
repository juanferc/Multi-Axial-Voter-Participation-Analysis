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
    barmode: 'group',
    bargap: 0.5,
    xaxis: {
      type: 'category',
      tickangle: -45,
      autorange: true
    },
    yaxis: {
      range: [0, 1]
    }
  };

  Plotly.newPlot('myDiv', data, layout);
});
// map_geojson = {
//   "type": "FeatureCollection",
//   "features" : []
// }

// data.map(function(p){
//   //console.log(p)


//     map_geojson['features'].push(genFeatureDict(p));
// });

// console.log(map_geojson);


//   }).catch(function(error) {
//     console.log(error);

//   });


//   function genFeatureDict(info){
//     f = {
//         "type" : "Feature",
//         "geometry":{
//             "type": "Point",
//             "coordinates": [info.Latitude,info.Longitude]
//         },
//         "properties" : {
//             "City" : info.City,
//             "zipcode" : info.Zip_CoDE,
//             "Turnout Rate" : info.turnout_rate
//         },

//     }
//     return f;
//   };



