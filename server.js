var http = require('http')
var fs = require('fs')
var ecstatic= require('ecstatic')
var st = ecstatic('public')
//var router =require('./router.js')
var body = require('body/any')
var level = require ('level')
var db = level('markers2.db', { valueEncoding:'json'})
var collect = require('collect-stream')

var server = http.createServer(function(req,res){
  // var m = router.match(req.url)

  if (req.url==='/submitMarker' && req.method==='POST'){
    body (req, res, function (err,params) {
    	var markerLabel= params.markerLabel
    	var coords= params.coords
    	console.log('value'+markerLabel)
      console.log('coords'+coords)

      db.put(coords, markerLabel, function(err){
      	if (err) return console.log(err)
        console.log('put coords', coords, markerLabel)
        cb()
      })

      // db.get(coords, function (err, value) {
      // 	if (err) return console.log(err)
      // 	else console.log('get value'+value)
      // })

      function cb() {
      res.writeHead(302, {
        'Location':'localhost:5001'
      })
      res.end()
      } 
	  
    })
    
  }

  else if (req.url === '/loadMarkers') {
    // var dbData=[]
    var stream = db.createReadStream()
    collect(stream, (err, data) => {
      res.writeHead(200, {'content-type': 'application/JSON'})
      res.end(JSON.stringify(data))
    })
  }


  else st(req,res)



}).listen(5001)

