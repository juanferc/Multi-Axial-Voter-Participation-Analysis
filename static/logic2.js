var map = L.map ("map", {
    center: [27.6648, -81.5158],
    zoom: 7,
   
    });

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: "pk.eyJ1IjoibXJ1Y2tlcjgxMyIsImEiOiJja2V1aW80ZnkwcTQzMnlvMHoxN2xxejU5In0.zsIP2dJ6SC89MbBKSfOwpQ"
}).addTo(map);

var layers = {
    Population: new L.LayerGroup(),
    Turnout: new L.LayerGroup(),
    Registration: new L.LayerGroup()
};

var overlays = {
    "Population": layers.Population,
    "Turnout Rate": layers.Turnout,
    "Registration Rate": layers.Registration
};

L.control.layers(null, overlays).addTo(map);

var info = L.control({
    position: "bottomright"
  });
  
info.onAdd = function() { 
    var div = L.DomUtil.create("div", "legend");
    return div;
  };

info.addTo(map);


var legend = L.control ({position: 'bottomright'});



data = '/static/features.geosjon'

d3.json(data, function(data) {
    
})