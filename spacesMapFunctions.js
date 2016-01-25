require ('leaflet')
var gmf = require ('./genericMapFunctions.js')
var leaf = L
var hyperquest = require('hyperquest')
var listen = require('listenify')

module.exports = 
  
function (mapDivId, lat, lon) {
  
 // var map = window.map 
    var gmfReturn = gmf(mapDivId, lat, lon)

  function onMapClick(e) {
    var popup = L.popup()
    var latlng = e.latlng

    popup
      .setLatLng(e.latlng)
      .setContent('<form name="labelForm" id="labelFormId"><input type="text" name="markerLabel"></input><input type="hidden" name="coords" id="latlngForm" </input><button type="button" name="submit" id="submitBut" value="submit" onclick="return addMarker3()"></button></form><script>document.getElementById("submitBut").addEventListener("click", function() {console.log("2oooo")})</script>')
      .openOn(map) //used in leaflet docs as similar to addTo(map)

    document.getElementById('latlngForm').value=[latlng.lat,latlng.lng]

    function addMarker2() {
      var markerLabel = document.labelForm.markerLabel.value
      console.log('the Label is!'+ markerLabel)
    }
    return latlng    
  
    //document.getElementById('submitBut').addEventListener('click',console.log('2oooo'))
  }

  

  function organizeTensionToPeaceDay (){

  }
  
  gmfReturn.map.on('click', onMapClick)

  var clicked = listen('#submitBut', 'click')
function addMarker22(e) {
      var markerLabel = document.labelForm.markerLabel.value
      console.log('the Label is!'+ markerLabel)
  }
  clicked(addMarker22)

}


//hyperquest('http://localhost:5001/loadMarkers')

/*.pipe(loadMarkers(data))

function loadMarkers (data) {
  console.log(data)
  //gmfReturn.addMarker()
}
*/
