// console.log(document.title = 'JavaScript DOM');

/* ********************** document.write ************************** */
// document.write('Sou o uso do document.write');
// document.write('<h1>Sou o uso do document.write</h1>');
// document.write('<p>Sou um parágrafo</p>');



setTimeout(function () {
    /* ********************** getElementById **************************
    document.getElementById('test');
    console.log(document.getElementById('test'));
    document.getElementById('test').innerHTML = 'Sou um novo texto';
    document.getElementById('test').innerText = 'Sou um novo texto';
    document.getElementById('test-id').innerHTML = '<h3>Sou um P JS</h3>';
    document.getElementById('test-id').innerText = '<h3>Sou um P JS</h3>';
    */

    /* ********************** getElementsByName **************************
    document.getElementsByName('div-name')[1].innerText = 'Alterando o segundo...';
    var nameTag = document.getElementsByName('div-name');
    nameTag[0].innerText = 'Alterando o primeiro...'
    nameTag[1].innerText = 'Alterando o segundo...'
    */

    /* ********************** getElementsByTagName **************************
    var tagsName = document.getElementsByTagName('div');
    tagsName[0].innerHTML = '<h4>Mudando 1...</h4>'
    tagsName[1].innerHTML = '<h4>Mudando 2...</h4>'

    if (tagsName[2]) {
        tagsName[2].innerHTML = '<h4>Mudando 3...</h4>'
    }
    */

    /* ********************** getElementsByClassName **************************
    document.getElementsByClassName('test-class')[0].innerHTML = '<h3>Sou o conteúdo através de um identificador por classe</h3>';
    */

    /* ********************** querySelector **************************
    document.querySelector('div').innerHTML = '<strong>Algo aqui Uhuuu</strong>'
    */

    /* ********************** querySelectorAll **************************
    document.querySelectorAll('div')[2].innerHTML = '<p>Inseriu</p>'
    */

}, 3000); // MUDA O CONTEÚDO DA PÁGINA DEPOIS DE 3 SEGUNDOS