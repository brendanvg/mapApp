var gmf= require('./genericMapFunctions.js') 
var smf = require ('./spacesMapFunctions.js')

var mapDivId = document.getElementById('map')

var lat = 37.8
var lon = -122.269
//Create Map
// var map1 = gmf(mapId, 37.8, -122.269)
// window.map1=map1

smf(mapDivId, lat, lon)

//AddMarker
// map1.addMarker(37.835004 -122.264125, 'Omni',  '<h1>This is Omni</h1>') 

var mapMe = document.getElementById('whereAmI')
// var mapTA = document.getElementById('mapTensionArea')

