let jsVotantes;
let jsPeliculas;

$(document).ready(function () {
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    //let d = [];
    //d[0] = recuperarPeliculas();

    function drawChart() {
        var data = google.visualization.arrayToDataTable([recuperarPeliculas()]);
        var options = {
            title: 'Resultados de la votacion'
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }
});

function recuperarPeliculas() {
    let pel = [];
    pel.push(['Película', 'Votos']);
    $(ip).each(function (i) {
        pel.push([ip[i].titulo, 0])
    })
    return pel;
}

function cargar() {
    let local;

    local = localStorage.getItem("jsVotantes");
    if (local != null) {
        jsVotantes = JSON.parse(local);
        console.log(local);
        jsVotantes.forEach(function (value, indice, array) {
            console.log(value);
        })
    } else {
        jsVotantes = [];
    }
}