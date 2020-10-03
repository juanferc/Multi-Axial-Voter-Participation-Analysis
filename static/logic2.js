d3.json('/static/final_data.geojson').then(function (data) {
    var points = data.features;

    console.log(points)

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

    var markers = L.markerClusterGroup();
    var zip_markers = [];

    for (var i = 0; i < points.length; i++) {
        markers.addLayer(L.marker([points[i].geometry.coordinates[1], points[i].geometry.coordinates[0]])
            .bindPopup(`
                This City is ${points[i].properties.City}, 
                which has a population of ${points[i].properties.population}, 
                and where it's etimates that ${points[i].properties.bachelor_degree_est} people have a bachelor's degree.
            `));
        // zip_markers.push(
        //     L.circle(points[i].geometry.coordinates, {
        //         stroke: false,
        //         fillOpacity: 0.75,
        //         color: "white",
        //         // radius: markerSize(points[i].properties.average_income)
        //     })
        // );
        // markers.addLayer(L.marker([points.geometry.coordinates[1], points.geometry.coordinates[0]])
        //     .bindPopup(points[i].descriptor));
    }

    // var avg_inc = L.layerGroup(zip_markers);

    // map.addLayer(avg_inc);
    map.addLayer(markers);

    info.addTo(map);

    var legend = L.control({ position: 'bottomright' });
});
