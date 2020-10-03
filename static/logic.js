var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
    });

// create map

var layers = {
    Population: new L.LayerGroup(),
    Turnout: new L.LayerGroup(),
    Registration: new L.LayerGroup()
};

var map = L.map ("map", {
    center: [27.6648, -81.5158],
    zoom: 7,
    layers: [
        darkmap
    ]
    });

darkmap.addTo(map);

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


// pull all data

var data_url = 'features.geojson';

// assign color variables for turnout rate intensity (green to red)

var colors = ['#E53935', '#FB8C00', '#FFB300', '#FDD835', '#C0CA33', '#7CB342']

d3.json (data_url, (response) => {

    L.geoJSON (response, {
        onEachFeature: (feature) => {
            var Turnout = feature.properties.turnout_rate;
            var coords = feature.geometry.coordinates;
            var Registration = feature.geometry.registration_rate;
            var Population = feature.geometry.population

            
            var trnColor = ''

            if (turnout_rate > 0.45) {trnColor = colors[0];}
            else if (turnout_rate > 0.50) {trnColor = colors[1];}
            else if (turnout_rate > 0.55) {trnColor = colors[2];}
            else if (turnout_rate > 0.60) {trnColor = colors[3];}
            else if (turnout_rate > 0.65) {trnColor = colors[4];}
            else {trnColor = colors[5];}
            
            L.circle([coords[1], coords[0]], {
                radius: Math.pow (turnout_rate, 3) * 1500,
                color: magColor
            }).bindPopup (`<strong>turnout ${turnout_rate}</strong><hr>${feature.properties.place}`)
            .addTo(map);
        }
    });
});

//create legend

legend.onAdd = ((map) => {
    var div = L.DomUtil.create ('div', 'info legend');

    rates = ['>5', '4-5', '3-4', '2-3', '1-2', '<1'];

    div.innerHTML = '<strong>turnout</strong><hr>';

    for (var x = 0; x < colors.length; x++) {
        div.innerHTML += `<i style = "background: ${colors[x]}"></i>${rates[x]}<br>`;
    }
    return div;
});

legend.addTo(map);
