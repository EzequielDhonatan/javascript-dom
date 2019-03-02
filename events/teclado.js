function keyPress (event) {
    console.log(event);
}

function keyDown (event, prm) {
    console.log(prm);
    console.log(event);
}

function keyUp (event) {
    console.log(event);
}

document.onkeydown = applyKey;

function applyKey (event) {
    console.log(event);

    if (event.ctrlKey && event.keyCode == 85) {
        swal('Não permitido!', '', 'error');

        event = event || window.event // IE

        if (event.preventDefault) event.preventDefault();
        if (event.returnValue) event.returnValue();

        return false;
    }
}