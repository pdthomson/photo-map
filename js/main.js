var map = L.map('map').setView([39.8283, -98.5795], 3);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var imageUrl = '../state-photos/sanfran.png';
var latLngBounds = L.latLngBounds([41.947669546292914, -124.00378990755621], [32.86955606824197, -114.907133937846]);
var altText = "San Fran!"
// var errorOverlatUrl = ???
var imageOverlay = L.imageOverlay(imageUrl, latLngBounds, {
    opacity: 0.8,
    alt: altText,
    interactive: true
}).addTo(map);