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
    'neon',
    'zöldfa vendéglő',
    'zugivó'
];

window.onload = () => {
    let randomPlace;

    if (isWeddingDate()) {
        randomPlace = 'Erdőspuszta Club Hotel, Arbo Borozó';
    } else {
        do {
            randomPlace = places[ Math.floor(Math.random() * places.length) ];
        } while (randomPlace === localStorage.getItem('place'));
    }

    localStorage.setItem('place', randomPlace);
    document.getElementById('holiszunk').innerText = randomPlace;
};

function isWeddingDate() {
    const weddingDate = new Date('2019-04-26');
    return new Date().toDateString() === weddingDate.toDateString();
}
