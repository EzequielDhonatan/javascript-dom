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

/* ********************** Eventos do Mouse ************************** */
