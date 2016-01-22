var http = require('http')
var fs = require('fs')
var ecstatic= require('ecstatic')
var st = ecstatic('public')
//var router =require('./router.js')
var body = require('body/any')
var level = require ('level')
var db = level('markers.db', { valueEncoding:'json'})

var server = http.createServer(function(req,res){
  // var m = router.match(req.url)

  if (req.url==='/submitMarker' && req.method==='POST'){
    body (req, res, function (err,params) {
    	var markerLabel= params.markerLabel
    	var coords= params.coords
    	console.log('value'+markerLabel)
      db.put(coords, markerLabel, function(err){
      	if (err) return console.log(err)
      })
      db.get(coords, function (err, value) {
      	if (err) return console.log(err)
      	else console.log('get value'+value)
      })
	  res.end()
    })
    
  }

  function loadMarkers () {
  	var dbData=[]
  	db.createReadStream()
  		.on('data', function (data) {
  			console.log('dataPt'+data)
  			dbData.push(data)
  		})
  		.on('error', function(err){
  			console.log(err)
  		})
  		.on('end', function(){
  			console.log('dbFullData'+dbData)
  		})
  }

  loadMarkers()
  st(req,res)

}).listen(5001)

