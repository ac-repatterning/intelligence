
const map = L.map('map').setView([58.786111, -4.114052], 8);

L.tileLayer('/{z}/{x}/{y}.png', {
    attribution: '© Europa Technologies'
}).addTo(map);

/* On Map Click */
var popup = L.popup();
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Point: " + e.latlng.toString())
        .openOn(map);
}
map.on('click', onMapClick);

$.getJSON('../../warehouse/care_and_coarse_catchments.geojson', function (source){




})
