
const map = L.map('map').setView([56.335, -4.103], 7);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
}).addTo(map);


$.getJSON('../../warehouse/care_and_coarse_catchments.geojson', function (source){




})

