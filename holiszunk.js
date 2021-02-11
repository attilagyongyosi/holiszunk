const GOOGLE_MAPS_URL = 'https://www.google.com/maps/embed/v1/place?q=';
const CITY = 'debrecen';
const API_KEY = 'AIzaSyACo5ZaV23_t-CKSOUfbLoqFxXMqRs5hS0';
const PLACES = [
    'ibolya',
    'füredi söröző',
    'árkád',
    'vitaminsarok',
    'korzó',
    'arizóna',
    'funcity',
    'svejk',
    'mob',
    'nagyállomás resti',
    'krajcáros kortyoló',
    'station',
    'róna',
    'seven',
    'szóda',
    'mátyás pince',
    'after presszó',
    'fácán',
    'say hello',
    'pikoló',
    'hidas',
    'roncs',
    'valhalla',
    'zöldfa vendéglő',
    'zugivó',
    'prémium söröző',
    'beer and wurst',
    'miami',
    'the wall',
    'susmus',
    'laguna presszó',
    'aranypart söröző'
];

window.onload = () => {
    let randomPlace;

    do {
        randomPlace = PLACES[ Math.floor(Math.random() * PLACES.length) ];
    } while (randomPlace === localStorage.getItem('place'));

    localStorage.setItem('place', randomPlace);
    document.getElementById('holiszunk').innerText = randomPlace;

    document.getElementById('map').src = `${GOOGLE_MAPS_URL}${randomPlace},${CITY}&key=${API_KEY}`;
};
