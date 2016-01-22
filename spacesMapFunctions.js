require ('leaflet')
var gmf = require ('./genericMapFunctions.js')
var leaf = L
var hyperquest = require('hyperquest')

module.exports = 
  
function (mapDivId, lat, lon) {
  
 // var map = window.map 
    var gmfReturn = gmf(mapDivId, lat, lon)

  function onMapClick(e) {
    var popup = L.popup()
    var latlng = e.latlng

    popup
      .setLatLng(e.latlng)
      .setContent('<form action="/submitMarker" method="POST"><input type="text" name="markerLabel"></input><input type="hidden" name="coords" id="latlngForm" </input><input type="submit" name="submit" value="submit"></input></form>')
      .openOn(map) //used in leaflet docs as similar to addTo(map)

    document.getElementById('latlngForm').value=[latlng.lat,latlng.lng]
    return latlng    
  }

  function organizeTensionToPeaceDay (){

  }
  
  gmfReturn.map.on('click', onMapClick)
}

hyperquest('http://localhost:5001/loadMarkers')

/*.pipe(loadMarkers(data))

function loadMarkers (data) {
  console.log(data)
  //gmfReturn.addMarker()
}
*/
