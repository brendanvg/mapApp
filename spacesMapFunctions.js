require ('leaflet')
var gmf = require ('./genericMapFunctions.js')
var leaf = L

module.exports = 
  
function (mapDivId, lat, lon) {
  
 // var map = window.map 
    var gmfReturn = gmf(mapDivId, lat, lon)

  function onMapClick(e) {
    var popup = L.popup()
    var latlng = e.latlng

    popup
      .setLatLng(e.latlng)
      .setContent('<form><input label="describe your tensions"></input></form>')
      .openOn(map) //used in leaflet docs as similar to addTo(map)

    return latlng    
  }

  function organizeTensionToPeaceDay (){

  }
  
  gmfReturn.map.on('click', onMapClick)
}
