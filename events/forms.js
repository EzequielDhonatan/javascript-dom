function register (event) {
    swal('Cadastrando...', '', 'success');

    event = event || window.event // IE

    if (event.preventDefault) event.preventDefault();
    if (event.returnValue) event.returnValue();

    return false;
}