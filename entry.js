var gmf= require('./genericMapFunctions.js') 
var smf = require ('./spacesMapFunctions.js')
var hyperquest=require('hyperquest')
var collect = require('collect-stream')
var mapDivId = document.getElementById('map')

var lat = 39.96
var lon = -75.16

smf(mapDivId, lat, lon)

var mapMe = document.getElementById('whereAmI')

// hyperquest('localhost:5001/loadMarkers').pipe(process.stdout)
	// collect(stream,(err,data)=>{
	// 	console.log(JSON.stringify(data))
	// })



