let jsVotantes;
let jsPeliculas;

$(document).ready(function () {
    makeChart(0);
});

function makeChart(e) {
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = google.visualization.arrayToDataTable(recuperarPeliculas());
        var options = tipos[e];

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
    }
}

function recuperarPeliculas() {
    let pel = [];
    pel.push(['Película', 'Votos']);
    $(ip).each(function (i) {
        pel.push([ip[i].titulo, 0])
    })
    $(jsVotantes).each(function (j) {
        pel[parseInt(this.voto) + 1][1] += 1;
    })
    return pel;
}

function cargar() {
    let local;

    local = localStorage.getItem("jsVotantes");
    if (local != null) {
        jsVotantes = JSON.parse(local);
        /*
        jsVotantes.forEach(function (value, indice, array) {
            console.log(value);
        })
        */
    } else {
        jsVotantes = [];
    }
}