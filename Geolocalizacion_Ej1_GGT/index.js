function initMap() {
    var lugares = [
        { lat: 43.2569, lng: -2.9234, nombre: 'Euskadi' },
        { lat: 53.3498, lng: -6.2603, nombre: 'Dublin' },
        { lat: 48.9356, lng: 2.3588, nombre: 'Saint-Denis' }
    ];

    var map = L.map('map').setView([46.603354, 1.888334], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
    }).addTo(map);

    var greenIcon = L.icon({
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
        className: 'leaflet-green-icon' 
    });

    for (var i = 0; i < lugares.length; i++) {
        var lugar = lugares[i];
        L.marker([lugar.lat, lugar.lng], { icon: greenIcon }).addTo(map)
            .bindPopup(lugar.nombre);
    }
}

initMap();