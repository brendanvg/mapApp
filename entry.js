var gmf= require('./genericMapFunctions.js') 
var smf = require ('./spacesMapFunctions.js')
var hyperquest=require('hyperquest')
var collect = require('collect-stream')
var mapDivId = document.getElementById('map')

var lat = 39.96
var lon = -75.16
//Create Map
 //var map1 = gmf(mapId, 39.96, -75.16)
// window.map1=map1

smf(mapDivId, lat, lon)

//AddMarker
 //gmf.addMarker(39.96, -75.16, '<h1>This is Omni</h1>') 

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

function addMarker3() {
	 var markerLabel = document.labelForm.markerLabel.value
      console.log('the REALEST Label is!'+ markerLabel)
}

function addMarker3(){gmf.addMarker(39.96,-75.16,"<h1>heee</h1>")}


// var formButton = document.getElementById('formButton')
// formButton.addEventListener('click', addMarker3())
