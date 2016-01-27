require ('leaflet')
var gmf = require ('./genericMapFunctions.js')
var leaf = L
var hyperquest = require('hyperquest')
var listen = require('listenify')
var collect = require('collect-stream')
var catS = require('concat-stream')
var xhr = require('xhr')

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
    var t = document.createTextNode("submit")
    button.appendChild(t)
   // button.type="button"


    form.appendChild(input)
    form.appendChild(inputCoords)
    form.appendChild(button)
   

   

//POP-UP FORM EVENT LISTENERS 
    button.addEventListener('click', function(evt){
      console.log('wooooo')


      var markerHtml = document.createElement("div")
      
      var h1 = document.createElement("h1")
      var t2 = document.createTextNode(input.value)
      h1.appendChild(t2)
      markerHtml.appendChild(h1)

      var delButton = document.createElement("button")
      var t3 = document.createTextNode("delete1")
      delButton.appendChild(t3)
      markerHtml.appendChild(delButton)
      
        delButton.addEventListener('click', function (evt){
          console.log('soon to be deleted!!!')
        })

      gmfReturn.addMarker(e.latlng.lat, e.latlng.lng, markerHtml) 
    })



    popup
      .setLatLng(e.latlng)
      .setContent(form)
      .openOn(map) 

    
    return latlng    
  }


  function organizeTensionToPeaceDay (){
    //the idea is that people would be trying to resolve points of tension together
  }
  
  gmfReturn.map.on('click', onMapClick)
 

function hey () {
        console.log('wooooo88888888888')
      }


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
      
      //gmfReturn.addMarker(lat,lon,'<h1>'+value+'</h1>'+'<button onclick="hey()">Delete</button>')
    

      var markerHtml = document.createElement("div")
      
      var h1 = document.createElement("h1")
      var t2 = document.createTextNode(value)
      h1.appendChild(t2)
      markerHtml.appendChild(h1)

      var a = document.createElement("a")
      a.href='/delete/'+coords
      var delButton = document.createElement("button")
      var t3 = document.createTextNode("delete1")
      delButton.appendChild(t3)
      a.appendChild(delButton)
      markerHtml.appendChild(delButton)
      
        delButton.addEventListener('click', function (evt){
          

          // xhr({
          //   url:"/delete",
          //   method: "post",
          //   headers: {
          //     "Content-Type": "application/json"
          //   }
          // }, 
          //   function (err, resp, body) {
          //     console.log('ok')
          //   }
          // )
        // xhr.post('/delete', {function(err,resp){
        //   console.log(resp.body)
        // })

        var formDelete = document.createElement("form")
        var input2 = document.createElement("input")
        input2.type = "hidden"
        input2.value = coords
        input2.name = coords
        formDelete.appendChild(input2)


        })

      gmfReturn.addMarker(lat, lon, markerHtml) 


    }
  })
)

// var deleteBtn = document.getElementsByClassName="deleteBtn"
  
// if (deleteBtn) {
//   deleteBtn.addEventListener('click', console.log('soon to be deleted'))
// }



}


