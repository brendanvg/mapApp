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
      .setContent('<form name="labelForm"><p>Label the marker</p><input name="markerLabel"></input><input type="hidden" name="coords" id="latlngForm"</input><button type="button" id="formButton" value="submit" onclick="return addMarker2()"></button></form>')
      .openOn(map) //used in leaflet docs as similar to addTo(map)

    document.getElementById('latlngForm').value=[latlng.lat,latlng.lng]

    function addMarker2() {
      var markerLabel = document.labelForm.markerLabel.value
      console.log('the REALSEST Label is!'+ markerLabel)
    }
    return latlng    
  }

 
  function organizeTensionToPeaceDay (){

  }
  
  gmfReturn.map.on('click', onMapClick)
  // var sb = document.getElementById('somethingButton')
  // console.log(sb + 'woo')

//hyperquest('http://localhost:5001/loadMarkers')

/*.pipe(loadMarkers(data))

function loadMarkers (data) {
  console.log(data)
  //gmfReturn.addMarker()
}
*/