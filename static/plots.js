d3.csv("../static/FinalData.csv").then(function(data) {
  // y axis
  var voter_turnout = data.map(function(point){
    return point.turnout_rate
    // Change this to turnout later
  });

  var zip_code = data.map(function(point){
  // x axis
  return point['Zip_CoDE'].toString()
  });

  var trace1 = {
    x: zip_code,
    y: voter_turnout,
    name: 'SF Zoo',
    type: 'bar'
  };
  var trace2 = {
    x: zip_code,
    y: voter_turnout,
    name: 'LA Zoo',
    type: 'bar'
  };
  var data = [trace1, trace2];
  var layout = {barmode: 'group'};
    
  Plotly.newPlot('myDiv', data, layout);

var zip_code = data.map(function(point){
    //return point["Zip_CoDE"]
    
    return point['Zip_CoDE']
});



var voter_registration = data.map(function(point){
  return point.registration_rate
});


var trace1 = {
  x: zip_code,
  y: voter_turnout,
  name: "Turnout",
  type: "bar"
};

var trace2 = {
  x: zip_code,
  y: voter_registration,
  name: "Registration",
  type: "bar"
};

var data_bar = [trace1, trace2];


var layout = {
  title: "Voter Participation Rates",
  xaxis: { title: "Zip Code", autorange:true,
          showticklabels: true,
          tickangle: 'auto',
          tickfont: {
            family: 'Old Standard TT, serif',
            size: 14,
            color: 'black'
          },
        },
  yaxis: { title: "Turnout Rate", autorange:true,
           showticklabels: true,
           tickangle: 'auto',
           tickfont: {
           family: 'Old Standard TT, serif',
           size: 14,
           color: 'black'
  },
},
  barmode: "group"
};

Plotly.newPlot("bar-plot", data_bar, layout);

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
   


