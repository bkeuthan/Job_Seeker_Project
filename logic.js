// Creating our initial map object:
// We set the longitude, latitude, and starting zoom level.
// This gets inserted into the div with an id of "map".
let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 4
  });
  
  // Adding a tile layer (the background map image) to our map:
  // We use the addTo() method to add objects to our map.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // An array of US capitals and their coordinates
  let capitals = [
    ['Alabama', 32.377716, -86.300568],
    ['Alaska', 58.301598, -134.420212],
    ['Arizona', 33.448143, -112.096962],
    ['Arkansas', 34.746613, -92.288986],
    ['California', 38.576668, -121.493629],
    ['Colorado', 39.739227, -104.984856],
    ['Connecticut', 41.764046, -72.682198],
    ['Delaware', 39.157307, -75.519722],
    ['Hawaii', 21.307442, -157.857376],
    ['Florida', 30.438118, -84.281296],
    ['Georgia', 33.749027, -84.388229],
    ['Idaho', 43.617775, -116.199722],
    ['Illinois', 39.798363, -89.654961],
    ['Indiana', 39.768623, -86.162643],
    ['Iowa', 41.591087, -93.603729],
    ['Kansas', 39.048191, -95.677956],
    ['Kentucky', 38.186722, -84.875374],
    ['Louisiana', 30.457069, -91.187393],
    ['Maine', 44.307167, -69.781693],
    ['Maryland', 38.978764, -76.490936],
    ['Massachusetts', 42.358162, -71.063698],
    ['Michigan', 42.733635, -84.555328],
    ['Minnesota', 44.955097, -93.102211],
    ['Mississippi', 32.303848, -90.182106],
    ['Missouri', 38.579201, -92.172935],
    ['Montana', 46.585709, -112.018417],
    ['Nebraska', 40.808075, -96.699654],
    ['Nevada', 39.163914, -119.766121],
    ['New Hampshire', 43.206898, -71.537994],
    ['New Jersey', 40.220596, -74.769913],
    ['New Mexico', 35.68224, -105.939728],
    ['North Carolina', 35.78043, -78.639099],
    ['North Dakota', 46.82085, -100.783318],
    ['New York', 42.652843, -73.757874],
    ['Ohio', 39.961346, -82.999069],
    ['Oklahoma', 35.492207, -97.503342],
    ['Oregon', 44.938461, -123.030403],
    ['Pennsylvania', 40.264378, -76.883598],
    ['Rhode Island', 41.830914, -71.414963],
    ['South Carolina', 34.000343, -81.033211],
    ['South Dakota', 44.367031, -100.346405],
    ['Tennessee', 36.16581, -86.784241],
    ['Texas', 30.27467, -97.740349],
    ['Utah', 40.777477, -111.888237],
    ['Vermont', 44.262436, -72.580536],
    ['Virginia', 37.538857, -77.43364],
    ['Washington', 47.035805, -122.905014],
    ['West Virginia', 38.336246, -81.612328],
    ['Wisconsin', 43.074684, -89.384445],
    ['Wyoming', 41.140259, -104.820236]]
  
  
  // Adding markers for each capital to the map:
  for (let i = 0; i < capitals.length; i++) {
    let marker = L.marker([capitals[i][1], capitals[i][2]]).addTo(myMap);
    marker.bindPopup(capitals[i][0]);
  }
  