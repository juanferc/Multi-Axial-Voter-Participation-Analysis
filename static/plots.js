d3.csv("../static/FinalProjectData.csv").then(function(data) {
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


var trace1 = {
  x: zip_code,
  y: voter_turnout,
  type: "bar"
};

var data_bar = [trace1];


var layout = {
  title: "Voter Turnout Rate per Zip Code",
  xaxis: { title: "Zip Code" },
  yaxis: { title: "Turnout Rate" }
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
  }