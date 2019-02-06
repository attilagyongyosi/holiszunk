const places = [
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
    'hidas',
    'roncs',
    'valhalla',
    'neon'
];

window.onload = () => {
    let randomPlace;
    do {
         randomPlace = places[ Math.floor(Math.random() * places.length) ];
    } while (randomPlace === localStorage.getItem('place'))

    localStorage.setItem('place', randomPlace);
    document.getElementById('holiszunk').innerText = randomPlace;
}
