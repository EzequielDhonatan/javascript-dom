var body = document.body
// body.style.backgroundColor = '#000';
// body.style.color = '#FFF';

setTimeout(function () {
    // body.style.backgroundColor = '#000';
    // body.style.color = '#FFF';
}, 2000);

var title = document.getElementById('title');
title.style.border = "2px solid #999";
title.style.padding = "10px";


function setBackground (color) {
    body.style.color = '#FFF';
    body.style.backgroundColor = color;
};

var piscaPisca = document.getElementsByClassName('pisca-pisca')[0];

// pisca();

function pisca () {
    piscaPisca.style.backgroundColor = 'red'; 

    setTimeout(pisca2, 1000);
}

function pisca2 () {
    piscaPisca.style.backgroundColor = 'blue';

    setTimeout(pisca, 1000);
}