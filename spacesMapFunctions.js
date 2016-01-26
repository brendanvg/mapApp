require ('leaflet')
var gmf = require ('./genericMapFunctions.js')
var leaf = L
var hyperquest = require('hyperquest')
var listen = require('listenify')

module.exports = 
  
function (mapDivId, lat, lon) {
  
 // var map = window.map 
    var gmfReturn = gmf(mapDivId, lat, lon)

    //var form = createElement(form)

  function onMapClick(e) {
    var popup = L.popup()
    var latlng = e.latlng


    var form = document.createElement('form')
    var button = document.createElement('button')
    button.type="button"
    var input = document.createElement('input')
    form.appendChild(input)
    form.appendChild(button)
    button.addEventListener('click', function(evt){
       console.log('wooooo')
        gmfReturn.addMarker(e.latlng.lat, e.latlng.lng, '<h1>'+input.value+'</h1>') 

    })
    // add form child elements...

    popup
      .setLatLng(e.latlng)
      .setContent(form)
      .openOn(map) //used in leaflet docs as similar to addTo(map)

    //document.getElementById('latlngForm').value=[latlng.lat,latlng.lng]

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


//  

//hyperquest('http://localhost:5001/loadMarkers')

/*.pipe(loadMarkers(data))

function loadMarkers (data) {
  console.log(data)
  for each (i in ) {

  
  }

  //gmfReturn.addMarker()
}
*/
