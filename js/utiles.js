let cardTitle =
    "<div class='cardTitle card text-center' style='width: 30%; min-width: 18rem; margin-top: 2rem;'>" +
    "<img aria-hidden='true' class='card-img-top' src='recursos/caratulas/avatar.jpg' alt='Card image cap'>" +
    "<div class='card-body'> " +
    " <h5 tab-index='0' class='card-title'></h5>" +
    " <p tab-index='1' class='card-text'></p>" +
    "<a href='#' id='ct-btn' class='btn btn-primary' data-toggle='modal' data-target='#myModal'>Información</a> " +
    "</div>" +
    "</div>";

var tipos = [{
    title: 'Resultados de la votación:',
    is3D: true
}, {
    title: 'Resultados de la votación:',
    pieHole: 0.4,
}, {
    title: 'Resultados de la votación',
    legend: 'none',
    pieSliceText: 'label',
    slices: {
        4: {
            offset: 0.2
        },
        12: {
            offset: 0.3
        },
        14: {
            offset: 0.4
        },
        15: {
            offset: 0.5
        },
    }

},{
    title: 'Resultados de la votación',
    backgroundColor : "#f1f1f1",
    is3D: true,
    vAxis : {textPosition : 'in'}
}]