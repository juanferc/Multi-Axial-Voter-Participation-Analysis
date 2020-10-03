d3.json('/static/FinalProjectData.geojson').then(function (data) {
    var points = data.features;

    var map = L.map("map", {
        center: [27.6648, -81.5158],
        zoom: 7,
    });

    var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v9",
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

    info.onAdd = function () {
        var div = L.DomUtil.create("div", "legend");
        return div;
    };

    info.addTo(map);


    var legend = L.control({ position: 'bottomright' });

});

// async function info() {
//     const data = await d3.json(data_url);
//     var markers = L.markerClusterGroup();
//     for (var i = 0; i < info.length; i++) {
//         zip_markers.push(
//             L.circle(info[i].geometry.coordinates, {
//                 stroke: false,
//                 fillOpacity: 0.75,
//                 color: "white",
//                 radius: markerSize(info[i].properties.average_income)
//             })
//         );
//         // markers.addLayer(L.marker([info.geometry.coordinates[1], info.geometry.coordinates[0]])
//         //     .bindPopup(info[i].descriptor));

//     }

//     var avg_inc = L.layerGroup(zip_markers);



//     map.addLayer(avg_inc);
// };

// console.log(info);