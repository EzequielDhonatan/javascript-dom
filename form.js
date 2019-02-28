function onSubmit (event) {
    var name = document.getElementsByName('name')[0].value;
    document.getElementsByClassName('result')[0].innerText = 'Olá ' + name;
    
    console.log(document.getElementsByName('email')[0].value);
    console.log(document.getElementsByName('password')[0].value);

    return false;
}