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
  let data = [
    ['Alabama', 32.377716, -86.300568, 45, 20, 34, 46, 46, 50],
    ['Alaska', 58.301598, -134.420212, 8, 22, 29, 39, 22, 14],
    ['Arizona', 33.448143, -112.096962, 28, 38, 30, 48, 30, 21],
    ['Arkansas', 34.746613, -92.288986, 48, 3, 48, 35, 44, 38],
    ['California', 38.576668, -121.493629, 6, 49, 36, 36, 21, 3],
    ['Colorado', 39.739227, -104.984856, 11, 42, 46, 8, 15, 17],
    ['Connecticut', 41.764046, -72.682198, 5, 33, 9, 4, 3, 11],
    ['Delaware', 39.157307, -75.519722, 16, 23, 31, 9, 16, 13],
    ['Florida', 30.438118, -84.281296, 37, 29, 19, 42, 23, 4],
    ['Georgia', 33.749027, -84.388229, 29, 28, 40, 33, 40, 25],
    ['Hawaii', 21.307442, -157.857376, 4, 47, 28, 40, 2, 1],
    ['Idaho', 43.617775, -116.199722, 34, 32, 2, 29, 32, 49],
    ['Illinois', 39.798363, -89.654961, 17, 43, 32, 21, 18, 26],
    ['Indiana', 39.768623, -86.162643, 35, 15, 20, 24, 41, 33],
    ['Iowa', 41.591087, -93.603729, 27, 24, 12, 18, 24, 29],
    ['Kansas', 39.048191, -95.677956, 30, 7, 44, 28, 33, 45],
    ['Kentucky', 38.186722, -84.875374, 44, 5, 21, 31, 47, 48],
    ['Louisiana', 30.458283, -91.14032, 47, 11, 50, 50, 49, 9],
    ['Maine', 44.307167, -69.781693, 32, 36, 4, 6, 14, 8],
    ['Maryland', 39.063946, -76.802101, 1, 30, 17, 12, 8, 23],
    ['Massachusetts', 42.358162, -71.063698, 3, 44, 6, 6, 4, 6],
    ['Michigan', 42.733635, -84.555328, 33, 14, 15, 32, 25, 19],
    ['Minnesota', 44.955097, -93.102211, 13, 46, 24, 16, 10, 16],
    ['Mississippi', 32.303848, -90.182106, 50, 19, 39, 37, 48, 44],
    ['Missouri', 38.579201, -92.172935, 38, 10, 41, 26, 42, 43],
    ['Montana', 46.585709, -112.018417, 40, 8, 26, 28, 28, 34],
    ['Nebraska', 40.808075, -96.699654, 25, 18, 18, 21, 29, 47],
    ['Nevada', 36.114647, -115.172813, 26, 35, 35, 49, 35, 18],
    ['New Hampshire', 43.008452, -71.452391, 7, 1, 1, 2, 7, 37],
    ['New Jersey', 40.221741, -74.756138, 2, 37, 5, 1, 13, 7],
    ['New Mexico', 35.667231, -105.964575, 46, 26, 49, 47, 20, 42],
    ['New York', 42.659829, -73.781339, 14, 48, 8, 11, 6, 12],
    ['North Carolina', 35.771, -78.638, 39, 25, 33, 45, 39, 27],
    ['North Dakota', 46.805372, -100.779334, 19, 9, 27, 23, 31, 31],
    ['Ohio', 39.962245, -83.000647, 36, 21, 22, 15, 34, 35],
    ['Oklahoma', 35.482309, -97.534994, 43, 12, 43, 39, 50, 40],
    ['Oregon', 44.931109, -123.029159, 18, 45, 42, 25, 12, 5],
    ['Pennsylvania', 40.269789, -76.875613, 22, 31, 14, 10, 11, 20],
    ['Rhode Island', 41.82355, -71.422132, 15, 39, 13, 23, 9, 10],
    ['South Carolina', 34, -81.035, 41, 17, 45, 44, 43, 41],
    ['South Dakota', 44.367966, -100.336378, 31, 2, 23, 15, 27, 39],
    ['Tennessee', 36.165, -86.784, 42, 16, 37, 43, 38, 30],
    ['Texas', 30.27467, -97.740349, 21, 6, 38, 41, 13, 45],
    ['Utah', 40.777477, -111.888237, 12, 40, 25, 31, 38, 36],
    ['Vermont', 44.260059, -72.575386, 23, 41, 3, 3, 5, 35],
    ['Virginia', 37.538857, -77.43364, 10, 13, 7, 8, 28, 20],
    ['Washington', 47.035805, -122.905014, 9, 50, 47, 18, 27, 28],
    ['West Virginia', 38.336246, -81.61233, 49, 34, 10, 35, 17, 41],
    ['Wisconsin', 43.074722, -89.384444, 24, 27, 11, 19, 11, 22],
    ['Wyoming', 41.145548, -104.802042, 20, 4, 16, 13, 45, 24]
];

// Create the bar chart
var openCharts = []; // array to store all open chart divs

function createBarChart(cityData) {
  var trace1 = {
    x: ["Income", "Cost of Living", "Crime", "Education", "Healthcare", "Quality of Life"],
    y: [cityData[3], cityData[4], cityData[5], cityData[6], cityData[7], cityData[8]],
    type: "bar",
    marker: { // set marker color for each bar
      color: ['#FF4136', '#0074D9', '#B10DC9', '#2ECC40', '#FFDC00', '#7FDBFF']
    }
  };

  var data = [trace1];

  var layout = {
    title: cityData[0],
    xaxis: {title: "Category"},
    yaxis: {title: "Ranking"},
    margin: {t: 40},
    showlegend: false,
    width: 400,
    height: 400,
    showCloseButton: true
  };

  var chartDiv = document.createElement("div");
  chartDiv.id = "chartDiv";
  document.body.appendChild(chartDiv);

  Plotly.newPlot("chartDiv", data, layout);

  var closeButton = document.createElement("button");
  closeButton.innerHTML = "Close";
  closeButton.style.position = "absolute";
  closeButton.style.top = "5px";
  closeButton.style.right = "5px";
  chartDiv.appendChild(closeButton);

  openCharts.push(chartDiv); // add the new chart div to the array of open charts

  closeButton.onclick = function() {
    for (var i = 0; i < openCharts.length; i++) {
      openCharts[i].remove(); // remove all open chart divs
    }
    openCharts = []; // clear the array of open chart divs
  };
}



// Adding markers for each capital to the map:
for (let i = 0; i < data.length; i++) {
  let popupContent = "<h2>" + data[i][0] + "</h2>";
  popupContent += "<p>Income: " + data[i][3] + "</p>";
  popupContent += "<p>Cost of Living " + data[i][4] + "</p>";
  popupContent += "<p>Crime: " + data[i][5] + "</p>";
  popupContent += "<p>Education: " + data[i][6] + "</p>";
  popupContent += "<p>Healthcare: " + data[i][7] + "</p>";
  popupContent += "<p>Quality of Life: " + data[i][8] + "</p>";
  
  let marker = L.marker([data[i][1], data[i][2]]).addTo(myMap);
  marker.bindPopup(popupContent);

  marker.on('click', function(e) {
    createBarChart(data[i]);
    let chartDiv = document.getElementById('chartDiv');
    chartDiv.style.display = 'block';
  });

  marker.on('mouseover', function(e) {
    this.openPopup();
  });

  marker.on('mouseout', function(e) {
    this.closePopup();
  });
}


let income, costLiving, crime, education, healthcare, qualityLife, keyword;

// Select the button element by ID
let submitButton = document.getElementById("submit-rankings");

submitButton.addEventListener("click", function() {
  // Retrieve the values of the input fields and store them in variables
  let income = document.getElementById("income").value;
  let costLiving = document.getElementById("cost-living").value;
  let crime = document.getElementById("crime").value;
  let education = document.getElementById("education").value;
  let healthcare = document.getElementById("healthcare").value;
  let qualityLife = document.getElementById("quality-life").value;
  let keyword = document.getElementById("keywords").value;

  // Do something with the variables (e.g. pass them to a function)
  console.log(income, costLiving, crime, education, healthcare, qualityLife, keyword);


  let states = data.map(arr => arr[0]);

  // Loop through the data and calculate the score for each state
  const scores = data.map(state => {
    const score = state[3] * income +
                  state[4] * costLiving +
                  state[5] * crime +
                  state[6] * education +
                  state[7] * healthcare +
                  state[8] * qualityLife;
    return { state: state[0], score };
  });

  // Sort the scores in descending order
  scores.sort((a, b) => a.score - b.score);

  // Print the top 10 states
  for (let i = 0; i < 10; i++) {
    console.log(scores[i].state, scores[i].score);
  }

// Display the top 10 states
let output = document.getElementById("output");
output.innerHTML = "<h2>Most Compatible States</h2>";
for (let i = 0; i < 10; i++) {
  let stateElement = document.createElement("div");
  let stateIndex = document.createElement("span");
  stateIndex.textContent = `${i+1}. `;
  let stateLink = document.createElement("a"); // create anchor tag
  let stateName = document.createElement("span");
  stateName.textContent = `${scores[i].state}`;
  stateLink.href = `https://www.indeed.com/jobs?q=${keyword}&l=${scores[i].state}`; // set href attribute
  stateLink.setAttribute("target", "_blank");
  stateLink.appendChild(stateName); // wrap stateName inside the anchor tag
  stateElement.appendChild(stateIndex);
  stateElement.appendChild(stateLink);
  output.appendChild(stateElement);
}
});

