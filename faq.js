var map = L.map('mapid').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Mock air quality data
var air_quality_data = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [51.505, -0.09]
      },
      "properties": {
        "aqi": 75
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [48.8566, 2.3522]
      },
      "properties": {
        "aqi": 120
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [35.6895, 139.6917]
      },
      "properties": {
        "aqi": 50
      }
    }
  ]
};

function onEachFeature(feature, layer) {
  var aqi = feature.properties.aqi;
  var aqi_text = "AQI: " + aqi;
  if (aqi <= 50) {
    aqi_text += " (Good)";
  } else if (aqi <= 100) {
    aqi_text += " (Moderate)";
  } else if (aqi <= 150) {
    aqi_text += " (Unhealthy for Sensitive Groups)";
  } else {
    aqi_text += " (Unhealthy)";
  }
  layer.bindPopup(aqi_text);
}

L.geoJSON(air_quality_data, {
  onEachFeature: onEachFeature
}).addTo(map);
