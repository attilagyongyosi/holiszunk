var places = [
    'ibolya',
    'füredi',
    'árkád',
    'vitaminsarok',
    'korzó',
    'arizóna',
    'funcity',
    'svejk',
    'mob',
    'nagyállomás resti',
    'station',
    'róna',
    'seven',
    'szóda',
    'mátyás pince',
    'after',
    'fácán',
    'say hello',
    'pikoló',
    'hidas'
];

var randomPlace = places[ Math.floor(Math.random() * places.length) ];

window.onload = function () {
    document.getElementById('holiszunk').innerText = randomPlace;
}
