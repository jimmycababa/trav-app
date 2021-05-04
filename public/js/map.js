// front end JS
mapboxgl.accessToken = 'pk.eyJ1IjoiamltbXljYWJhYmEiLCJhIjoiY2tvYWhpdWV4MGQzejJubW5maXFoZG5zZyJ9.uEY74FxZS4sU_812OWg7Ng';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 9,
center: [-87.9065, 43.0389]
});