require ('leaflet')
var gmf = require ('./genericMapFunctions.js')
var leaf = L
var hyperquest = require('hyperquest')
var listen = require('listenify')

module.exports = 
  
function (mapDivId, lat, lon) {
  
    var gmfReturn = gmf(mapDivId, lat, lon)

  function onMapClick(e) {
    var popup = L.popup()
    var latlng = e.latlng

    var form = document.createElement('form')
    form.method = 'POST'
    form.action='/submitMarker'

    var inputCoords = document.createElement('input')
    inputCoords.type = 'hidden'
    inputCoords.name='coords'
    inputCoords.value= [e.latlng.lat, e.latlng.lng]

    var input = document.createElement('input')
    input.name='markerLabel'

    var button = document.createElement('button')
   // button.type="button"


    form.appendChild(input)
    form.appendChild(inputCoords)
    form.appendChild(button)
    button.addEventListener('click', function(evt){
       console.log('wooooo')
        gmfReturn.addMarker(e.latlng.lat, e.latlng.lng, '<h1>'+input.value+'</h1>') 

      // hyperquest
    })

    popup
      .setLatLng(e.latlng)
      .setContent(form)
      .openOn(map) 

    function addMarker2() {
      var markerLabel = document.labelForm.markerLabel.value
      console.log('the Label is!'+ markerLabel)
    }
    return latlng    
  }

  

  function organizeTensionToPeaceDay (){
    //the idea is that people would be trying to resolve points of tension together
  }
  
  gmfReturn.map.on('click', onMapClick)

}



//hyperquest('http://localhost:5001/loadMarkers')

/*.pipe(loadMarkers(data))

function loadMarkers (data) {
  console.log(data)
  for each (i in ) {

  }
  //gmfReturn.addMarker()
}
*/
