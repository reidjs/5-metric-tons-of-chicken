export const chart1Data = {
    type: 'line',
    data: {
      labels: ['Farm', 'Truck', 'Processing Plant', 'Factory', 'Truck #2', 'Packaging Plant', 'Truck #3', 'Retailer'],
      datasets: [
        { // one line graph
          label: 'Temperature',
          data: [99, 65, 1, 2, 67, 2, 27, 4],
          backgroundColor: [
            'rgba(254,73,93,0)',
            // 'rgba(254,73,93,.5)',
            // 'rgba(254,73,93,.5)',
            // 'rgba(254,73,93,.5)',
            // 'rgba(254,73,93,.5)',
            // 'rgba(254,73,93,.5)',
            // 'rgba(254,73,93,.5)',
            // 'rgba(254,73,93,.5)',
            // 'rgba(254,73,93,.5)',
          ],
          borderColor: [
            'rgba(254,73,93,.5)',
          ],
          borderWidth: 3
        },
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true,
            padding: 25,
          }
        }]
      }
    }
  }
  
  export default chart1Data;