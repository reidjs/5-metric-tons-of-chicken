export const chart1Data = {
    type: 'doughnut',
    data: {
      labels: ['Distribution', 'Packaging', 'Aggregation', 'Transit'],
      datasets: [
        {
          label: 'Moisture',
          data: [99, 65, 12, 23],
          backgroundColor: [
            'rgba(254,73,93,0.5)',
            'rgba(254,173,93,.5)',
            'rgba(54,73,193,.5)',
            'rgba(54,254,93,.5)',
            // 'rgba(254,73,93,.5)',
            // 'rgba(254,73,93,.5)',
            // 'rgba(254,73,93,.5)',
            // 'rgba(254,73,93,.5)',
            // 'rgba(254,73,93,.5)',
          ],
          borderColor: [
            // 'rgba(254,73,93,.5)',
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