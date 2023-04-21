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
    ['Alabama', 32.377716, -86.300568, 45, 33, 34, 41, 46, 50],
    ['Alaska', 58.301598, -134.420212, 36, 11, 29, 46, 22, 14],
    ['Arizona', 33.448143, -112.096962, 21, 32, 30, 50, 30, 21],
    ['Arkansas', 34.746613, -92.288986, 37, 34, 48, 24, 44, 38],
    ['California', 38.576668, -121.493629, 41, 49, 36, 47, 21, 3],
    ['Colorado', 39.739227, -104.984856, 8, 46, 46, 27, 15, 17],
    ['Connecticut', 41.764046, -72.682198, 24, 45, 9, 3, 3, 11],
    ['Delaware', 39.157307, -75.519722, 5, 26, 31, 21, 16, 13],
    ['Florida', 30.438118, -84.281296, 7, 24, 19, 40, 23, 4],
    ['Georgia', 33.749027, -84.388229, 16, 36, 40, 42, 40, 25],
    ['Hawaii', 21.307442, -157.857376, 40, 50, 28, 44, 2, 1],
    ['Idaho', 43.617775, -116.199722, 2, 20, 2, 33, 32, 49],
    ['Illinois', 39.798363, -89.654961, 38, 29, 32, 23, 18, 26],
    ['Indiana', 39.768623, -86.162643, 31, 6, 20, 34, 41, 33],
    ['Iowa', 41.591087, -93.603729, 23, 17, 12, 8, 24, 29],
    ['Kansas', 39.048191, -95.677956, 33, 37, 44, 11, 33, 45],
    ['Kentucky', 38.186722, -84.875374, 46, 13, 21, 26, 47, 48],
    ['Louisiana', 30.458283, -91.14032, 48, 39, 50, 48, 49, 9],
    ['Maine', 44.307167, -69.781693, 25, 28, 4, 14, 14, 8],
    ['Maryland', 39.063946, -76.802101, 18, 44, 17, 22, 8, 23],
    ['Massachusetts', 42.358162, -71.063698, 26, 48, 6, 1, 4, 6],
    ['Michigan', 42.733635, -84.555328, 47, 15, 15, 37, 25, 19],
    ['Minnesota', 44.955097, -93.102211, 13, 42, 24, 12, 10, 16],
    ['Mississippi', 32.303848, -90.182106, 50, 21, 39, 38, 48, 44],
    ['Missouri', 38.579201, -92.172935, 34, 25, 41, 18, 42, 43],
    ['Montana', 46.585709, -112.018417, 3, 22, 26, 16, 28, 34],
    ['Nebraska', 40.808075, -96.699654, 9, 31, 18, 5, 29, 47],
    ['Nevada', 36.114647, -115.172813, 28, 10, 35, 49, 35, 18],
    ['New Hampshire', 43.008452, -71.452391, 10, 12, 1, 9, 7, 37],
    ['New Jersey', 40.221741, -74.756138, 19, 41, 5, 2, 13, 7],
    ['New Mexico', 35.667231, -105.964575, 49, 18, 49, 45, 20, 42],
    ['New York', 42.659829, -73.781339, 44, 47, 8, 10, 6, 12],
    ['North Carolina', 35.771, -78.638, 14, 19, 33, 39, 39, 27],
    ['North Dakota', 46.805372, -100.779334, 4, 5, 27, 7, 31, 31],
    ['Ohio', 39.962245, -83.000647, 43, 4, 22, 25, 34, 35],
    ['Oklahoma', 35.482309, -97.534994, 29, 35, 43, 31, 50, 40],
    ['Oregon', 44.931109, -123.029159, 30, 43, 42, 36, 12, 5],
    ['Pennsylvania', 40.269789, -76.875613, 35, 9, 14, 20, 11, 20],
    ['Rhode Island', 41.82355, -71.422132, 42, 40, 13, 19, 9, 10],
    ['South Carolina', 34.000, -81.035, 12, 38, 45, 43, 43, 41],
    ['South Dakota', 44.367966, -100.336378, 17, 2, 23, 4, 27, 39],
    ['Tennessee', 36.165, -86.784, 22, 3, 37, 35, 38, 30],
    ['Texas', 30.27467, -97.740349, 42, 20, 14, 32, 13, 45],
    ['Utah', 40.777477, -111.888237, 17, 27, 38, 19, 38, 36],
    ['Vermont', 44.260059, -72.575386, 6, 8, 7, 7, 5, 35],
    ['Virginia', 37.538857, -77.43364, 15, 11, 27, 35, 28, 20],
    ['Washington', 47.035805, -122.905014, 20, 14, 42, 31, 27, 28],
    ['West Virginia', 38.336246, -81.61233, 22, 43, 11, 30, 17, 41],
    ['Wisconsin', 43.074722, -89.384444, 29, 4, 16, 13, 11, 22],
    ['Wyoming', 41.145548, -104.802042, 12, 45, 25, 25, 45, 24]
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

