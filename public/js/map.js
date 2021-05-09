// front end JS
mapboxgl.accessToken = 'pk.eyJ1IjoiamltbXljYWJhYmEiLCJhIjoiY2tvYWhpdWV4MGQzejJubW5maXFoZG5zZyJ9.uEY74FxZS4sU_812OWg7Ng';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 9,
center: [-87.9065, 43.0389]
});

function loadMap(){
        map.on('load', function () {
            // Load an image from an external URL.
            // map.loadImage(
            // 'https://upload.wikimedia.org/wikipedia/commons/7/7c/201408_cat.png',
            // function (error, image) {
            // if (error) throw error;
             
            // // Add the image to the map style.
            // map.addImage('cat', image);
             
            // Add a data source containing one point feature.
            map.addSource('point', {
            'type': 'geojson',
            'data': {
            'type': 'FeatureCollection',
            'features': [
            {
            'type': 'Feature',
            'geometry': {
            'type': 'Point',
            'coordinates': [-77.4144, 25.0759],
            properties: {
                storeId: '0001',
               icon: 'shop'
               }
            }
            }
            ]
            }
            });
             
            // Add a layer to use the image to represent the data.
            map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point', // reference the data source
            'layout': {
                'icon-image': '{icon}-15',
                'icon-size': 1.5,
                'text-field': '{storeId}',
                'text-font': ['Open Sans Semibold, Arial Unicode MS Bold'],
                'text-offset': [0, 0.9],
                'text-anchor': 'top'
            }
            });
            }
            );
            
        loadMap();
        }
         // map.on('load', function () {
    //         map.on('load', function () {
    //            map.addLayer({
    //                id: 'points',
    //                type: 'symbol',
    //                source {
    //                    type: 'geojson',
    //                    data: {
    //                        type: 'FeatureCollection',
    //                        features: [
    //                            {
    //                                type: 'Feature',
    //                                geometry: {
    //                                    type: 'Point',
    //                                    coordinates: [-87.9065, 43.0389]
    //                                },
    //                                properties: {
    //                                    storeId: '0001',
    //                                    icon: 'ball'
    //                                }
    //                            }
    //                        ]
    //                    }
    //                },
    //                layout: {
    //                    'icon-image': '{icon}-15',
    //                    'icon-size': 1.5
    //                    'text-field': '{storeId}'
    //                    'text-font': ['Open Sans Semibold, Arial Unicode MS Bold'],
    //                    'text-offset': [0, 0.9],
    //                    'text-anchor': 'top'
    //                }
    //            });
    //         });
    //     }