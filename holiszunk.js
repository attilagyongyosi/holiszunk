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
    'neon',
    'zöldfa vendéglő',
    'zugivó'
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
