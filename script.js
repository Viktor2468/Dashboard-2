
var xValues = ["01", "02", "03", "04", "05", "06" , "07", "08", "09", "10", "11", "12"];
var yValues = [600, 700, 800, 500, 600, 900, 800, 550, 700, 652, 523, 800];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: "#2a62e9",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {display: true},
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            gridLines: {
                display: false
            }
        }]
    }

  }
  
});


const xValuesL = [0o1, 0o2, 0o3, 0o4, 0o5, 0o6, 0o7, 8, 9, 10, 11, 12, 13, 14];

new Chart("lineChart", {
  type: "line",
  data: {
    labels: xValuesL,
    datasets: [{ 
      data: [50,70,50,55,50,45,60,55,52,75,72,52,60,70],
      borderColor: "#ecf0fc",
      fill: false
    }, { 
      data: [80,100,80,85,80,75,90,65,82,95,72,82,90,60],
      borderColor: "#2a62e9",
      fill: false
    }]
  },
  options: {
    legend: {display: false},
    elements:{
      point:{
          borderWidth: 0,
          radius: 0,
      },
  },
  scales: {
    xAxes: [{
        gridLines: {
            display: false
        }
    }],
    yAxes: [{
        gridLines: {
            display: true
        }
    }]
}
  
  }
  
});