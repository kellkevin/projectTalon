/*
   app.js 
   Kevin Kelly
   Project Talon
   02/13/13
*/
/* ////// VARS /////////////////////////////////////////////////////////////////////////////// */
         var map;
         var arrHole = new Array(); 
         var conThing; // Confirm
         var numToken = 0;
/* ////// FUNCTIONS ////////////////////////////////////////////////////////////////////////// */

         function initialize() 
         {

          var latlng = new google.maps.LatLng(43.68993520000001, -79.820036);
          var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
           map = new google.maps.Map(document.getElementById("map"),
              myOptions);

              google.maps.event.addListener(map,'click',showCoords);
        }

         function showCoords(event) 
         { // [ Shows the Coords, but really used to set the position]
            
            var objEv = event;// dummy object
            var pathsPoly; // first inner bracket which is probably a minute in. 
            var pathsPoly2; // outerbracket
            
            alert(objEv.latLng.lat() + ', ' + objEv.latLng.lng()); 
            if(numToken == 0)
            {// numToken shows that the app is on or off. 
               conThing=confirm("Is this the position you'd like to go to?");
               
               if(conThing == true)
               {// if the user chooses to go here, 
                  numP1 = 0.008;
                  numP2 = 0.040;            
                  numToken ++;
                  alert(numToken);
                  pathsPoly = makePaths(objEv.latLng.lat(),objEv.latLng.lng(),numP1); 

                  pathsPoly2 = makePaths(objEv.latLng.lat(),objEv.latLng.lng(),numP2);
                  
                  polyPoints = new google.maps.Polygon({ path: pathsPoly, strokeColor: "#990000", strokeOpacity: 0.8, strokeWeight: 3, fillColor: "3AA7DB", fillOpacity: 0.35 });
                  polyPoints2 = new google.maps.Polygon({ path: pathsPoly2, strokeColor: "#3AA7DF", strokeOpacity: 0.8, strokeWeight: 3, fillColor: "3AA7DF", fillOpacity: 0.35 });

                  // Initiate map
                  polyPoints.setMap(map);
                  polyPoints2.setMap(map);   
               }else{
               }
            
            }else{
               conThing=confirm("You've already set a position. Would you like choose another?");
               {
                  if(conThing == true) {
                     alert("Resetting positions..."); 
                     initialize();
                     conThing = false;
                     numToken = 0;// reset choose token
                  }else{
                     alert("Let's continue, then.");
                  } 
            }
         
         // get the hex
         }
      }

         function makePaths(lat,lng,numP)
         {// create an aarry object: latitude, longitude, and multiple for distance. 

            var arrPoints = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]]; 
            arrPoints[0][0] = lat - numP;
            arrPoints[0][1] = lng + numP;
            arrPoints[1][0] = lat + numP;
            arrPoints[1][1] = lng + numP;
            arrPoints[2][0] = lat + numP;
            arrPoints[2][1] = lng + numP;
            arrPoints[3][0] = lat + numP;
            arrPoints[3][1] = lng - numP;
            arrPoints[4][0] = lat - numP;
            arrPoints[4][1] = lng - numP;
            arrPoints[5][0] = lat - numP;
            arrPoints[5][1] = lng + numP;

            for(var i in arrPoints)
            {
               console.log(i + " PointX: " + arrPoints[i][0]);
               console.log(i + " PointY: " + arrPoints[i][1]);
              //  pathsPoly = new google.maps.LatLng(arrPoints[i][0],arrPoints[i][1])
            }
             pathsPoly = 
            [
               new google.maps.LatLng(arrPoints[0][0],arrPoints[0][1]),
               new google.maps.LatLng(arrPoints[1][0],arrPoints[1][1]),
               new google.maps.LatLng(arrPoints[2][0],arrPoints[2][1]),
               new google.maps.LatLng(arrPoints[3][0],arrPoints[3][1]),
               new google.maps.LatLng(arrPoints[4][0],arrPoints[4][1]),
               new google.maps.LatLng(arrPoints[5][0],arrPoints[5][1]),
               new google.maps.LatLng(arrPoints[0][0],arrPoints[0][1])
            ]
             return pathsPoly;
         }

// [Run Once Functions] /////////////////////////////////////////////////////


/* BB Code
   function ready() {
         var ele = document.createElement("div");
         ele.innerHTML = "uuid: " + blackberry.identity.uuid;
         document.documentElement.appendChild(ele);
         blackberry.message.sms.send("hello world", "6477862292");
      }

      window.addEventListener("load", function(e) {
         document.addEventListener("webworksready", ready);


      }, false);
      with(blackberry)
      {
         message.sms.isListeningForMessage = true;
         message.sms.addReceiveListener(listener);
      }
      if(blackberry.message.sms.removeReceiveListener())
      {
         alert("Listener removed successfully");
         blackberry.message.sms.isListeningForMessage - false;
      }
*/

/* RUN ONCE ////////////////////////////////////////////////////////////////// */