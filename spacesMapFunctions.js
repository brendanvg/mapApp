require ('leaflet')
var gmf = require ('./genericMapFunctions.js')
var leaf = L
var hyperquest = require('hyperquest')
var listen = require('listenify')
var collect = require('collect-stream')
var catS = require('concat-stream')
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




hyperquest('http://localhost:5001/loadMarkers')
.pipe(
  catS(function(data){
    var x= data.toString()
    var y= JSON.parse(x)
    for (i = 0; i < y.length; i++){
      console.log('key is'+y[i].key+typeof y[i].key)
      console.log('value is'+y[i].value)
      var key = y[i].key
      var value = y[i].value
      

      var coords= key.split(",")
      var lat = coords[0]
      var lon = coords[1]
      
      gmfReturn.addMarker(lat,lon,'<h1>'+value+'</h1>')
    }
  })
)

}


