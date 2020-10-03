d3.csv("../static/Florida_data.csv").then(function(data) {
    console.log(data)

var zip_code = data.map(function(point){
    //return point["Zip_CoDE"]
    return (point['Zip_CoDE'])
});
console.log(zip_code)
var voter_turnout = data.map(function(point){
    return point.turnout_rate
    // Change this to turnout later
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
  xaxis: { title: "Zip Code", autorange:true },
  yaxis: { title: "Turnout Rate", autorange:true},
  barmode: "group"
};


Plotly.newPlot("bar-plot", data_bar, layout);

map_geojson = {
  "type": "FeatureCollection",
  "features" : []
}

data.map(function(p){
  //console.log(p)

  
    map_geojson['features'].push(genFeatureDict(p));
});

console.log(map_geojson);


  }).catch(function(error) {
    console.log(error);
    
  });


  function genFeatureDict(info){
    f = {
        "type" : "Feature",
        "geometry":{
            "type": "Point",
            "coordinates": [info.Latitude,info.Longitude]
        },
        "properties" : {
            "City" : info.City,
            "zipcode" : info.Zip_CoDE,
            "Turnout Rate" : info.turnout_rate
        },
        
    }
    return f;
  };
   


