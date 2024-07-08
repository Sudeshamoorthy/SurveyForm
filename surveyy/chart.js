// Doughnut Chart
var xValues = ["cardiac", "Neuro", "Physio", "Cramp"];
var yValues = [55, 49, 44, 24];
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Health Condition",
    }
  }
});

// Bar Chart
var xvalues = ["Terrible", "Not Great", "Average", "Good", "Excellent"];
var yvalues = [13, 18 , 30, 25 , 20];
var barcolors = ["red", "orange","yellow","lightgreen","green"];

new Chart("mychart", {
  type: "bar",
  data: {
    labels: xvalues,
    datasets: [{
      backgroundColor: barcolors,
      data: yvalues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Ratings"
    }
  }
});
 

