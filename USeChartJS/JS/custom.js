window.addEventListener('load', init);

function init() {
    console.log('Window init...');
    alert('Window init...');
    document.querySelector('#showchart').addEventListener('click', doshow);
}

function doshow() {
    console.log('Please show the chart...');
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Charlotte Bardsley','Denise Payet','Mollie Patterson','Jasmin Wong','Annie Hedlund'],
            datasets: [{
                    label: 'Rank',
                    data: [1484,1475,1324,1295,1192]
                }

            ]
        },
        options: {}
    });
    var ctx = document.getElementById('mypieChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Charlotte Bardsley','Denise Payet','Mollie Patterson','Jasmin Wong','Annie Hedlund'],
            datasets: [{
                    label: 'Rank',
                    data: [1484,1475,1324,1295,1192]
                }

            ]
        },
        options: {}
    });
    var ctx = document.getElementById('mydoughnutChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Charlotte Bardsley','Denise Payet','Mollie Patterson','Jasmin Wong','Annie Hedlund'],
            datasets: [{
                    label: 'Rank',
                    data: [1484,1475,1324,1295,1192]
                }

            ]
        },
        options: {}
    });
    var ctx = document.getElementById('myradarChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Charlotte Bardsley','Denise Payet','Mollie Patterson','Jasmin Wong','Annie Hedlund'],
            datasets: [{
                    label: 'Rank',
                    data: [1484,1475,1324,1295,1192]
                }

            ]
        },
        options: {}
    });
    var ctx = document.getElementById('mypolarChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
            labels: ['Charlotte Bardsley','Denise Payet','Mollie Patterson','Jasmin Wong','Annie Hedlund'],
            datasets: [{
                    label: 'Rank',
                    data: [1484,1475,1324,1295,1192]
                }

            ]
        },
        options: {}
    });
    var ctx = document.getElementById('myHoriChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ['Charlotte Bardsley','Denise Payet','Mollie Patterson','Jasmin Wong','Annie Hedlund'],
            datasets: [{
                    label: 'Rank',
                    data: [1484,1475,1324,1295,1192]
                }

            ]
        },
        options: {}
    });

    //     data: {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             backgroundColor: [
    //                 'rgba(255, 99, 132, 0.2)',
    //                 'rgba(54, 162, 235, 0.2)',
    //                 'rgba(255, 206, 86, 0.2)',
    //                 'rgba(75, 192, 192, 0.2)',
    //                 'rgba(153, 102, 255, 0.2)',
    //                 'rgba(255, 159, 64, 0.2)'
    //             ],
    //             borderColor: [
    //                 'rgba(255, 99, 132, 1)',
    //                 'rgba(54, 162, 235, 1)',
    //                 'rgba(255, 206, 86, 1)',
    //                 'rgba(75, 192, 192, 1)',
    //                 'rgba(153, 102, 255, 1)',
    //                 'rgba(255, 159, 64, 1)'
    //             ],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             yAxes: [{
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //             }]
    //         }
    //     }
    // });
}