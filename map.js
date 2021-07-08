(function () {

    mapboxgl.accessToken = 'pk.eyJ1IjoiY3JlYXRpdmVtYWdnaWUiLCJhIjoiY2txdDU2N2h6MWdiZzJzbmJzdDgyeGF1ZyJ9.zG5QYTG9QbmGZf5ySSA21A';
 
    let map = new mapboxgl.Map({
        container: 'map',
        center: [5.845100783133012, 51.943122857550975],
        zoom: 13,
        style: 'mapbox://styles/mapbox/dark-v10'
    });

    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());

    // create html marker
    let marker = document.createElement('div');
    marker.id = 'marker';
    marker.innerHTML = '<img src="media/map_pin.svg">';

    // create map marker
    let mapMarker = new mapboxgl.Marker(marker);
    // position the marker
    mapMarker.setLngLat([5.845100783133012, 51.943122857550975]);
    //adding marker to our map
    mapMarker.addTo(map);

})();

// from google: 51.943122857550975, 5.845100783133012
// has to be swapped for mapbox