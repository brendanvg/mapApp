var gmf= require('./genericMapFunctions.js') 
var smf = require ('./spacesMapFunctions.js')
var hyperquest=require('hyperquest')
var collect = require('collect-stream')
var mapDivId = document.getElementById('map')

var lat = 39.96
var lon = -75.16
//Create Map
// var map1 = gmf(mapId, 37.8, -122.269)
// window.map1=map1

smf(mapDivId, lat, lon)

//AddMarker
// map1.addMarker(37.835004 -122.264125, 'Omni',  '<h1>This is Omni</h1>') 

var mapMe = document.getElementById('whereAmI')
// var mapTA = document.getElementById('mapTensionArea')

// hyperquest('localhost:5001/loadMarkers').pipe(process.stdout)
	// collect(stream,(err,data)=>{
	// 	console.log(JSON.stringify(data))
	// })

function addMarker2() {
      var markerLabel = document.labelForm.markerLabel.value
      console.log('the Label is!'+ markerLabel)
    }