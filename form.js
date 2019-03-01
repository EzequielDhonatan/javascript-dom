function onSubmit (event) {
    var name = document.getElementsByName('name')[0].value;
    document.getElementsByClassName('result')[0].innerText = 'Olá ' + name;

    console.log(document.getElementsByName('email')[0].value);
    console.log(document.getElementsByName('password')[0].value);

    // console.log(document.getElementsByName('terms')[0].checked);
    console.log(document.getElementById('terms').checked);

    var state = document.getElementsByName('state')[0].value;
    if (state == '') {
        alert('Selecione o estado!');
    }

    var sexo = document.getElementsByName('sexo');
    console.log(sexo[0].checked);
    console.log(sexo[1].checked);
    console.log(document.querySelector('input[name="sexo"]:checked').value);

    console.log(document.getElementsByClassName('desc')[0].value);

    return false;
}