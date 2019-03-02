// document.addEventListener('click', eventClick);

/*
function eventClick () {
    alert('Clicou');
}
 */

function changeColor (event, color) {
    swal("Sucesso", "Alterou a Cor!", "success");

    document.body.style.background = color;

    event = event || window.event // IE

    console.log(event);

    if (event.preventDefault) event.preventDefault();
    if (event.returnValue) event.returnValue();

    return false;
}

/* ********************** Eventos de Carregar ************************** */
function loadPage () {
    swal('Fez o load!', '', 'success');
}

function resizePage (event) {
    var width = window.innerWidth;
    var body = document.body;

    if (width <= 700) {
        body.style.background = '#000';
    } else if (width > 700 && width < 1200) {
        body.style.background = '#999';
    } else {
        body.style.background = '#FFF';
    }
}