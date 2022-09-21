import { Controller } from "@hotwired/stimulus"
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"

export default class extends Controller {

  static values = {
    apiKey: String,
    markers: Array
  }

  connect() {
    mapboxgl.accessToken = this.apiKeyValue

    this.map = new mapboxgl.Map({
      container: this.element,
      style: "mapbox://styles/mapbox/streets-v10",
      // center: [2.3426, 36.7814109],
      // zoom: 14
    })

    this.#addMarkersToMap()
    this.#fitMapToMarkers()

  }

  // popup = new mapboxgl.Popup({ offset: 25 }).setText(
  //   'Construction on the Washington Monument began in 1848.'
  //   );

  //   const el = document.createElement('div');
  //   el.id = 'marker';

  #addMarkersToMap() {
    console.log("markers")
    this.markersValue.forEach((marker) => {
      new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        // .setPopup(popup)
        .addTo(this.map)
    })
  }

  #fitMapToMarkers() {
    const bounds = new mapboxgl.LngLatBounds()
    this.markersValue.forEach(marker => bounds.extend([ marker.lng, marker.lat ]))
    this.map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 })
  }
}
