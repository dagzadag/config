//d1d0705 captchas/Server
var config = {
			apiKey: "AIzaSyACSgbAIM01KGI_twhGzX1FABWyhhCS3Eo",
			authDomain: "test-6ee2a.firebaseapp.com",
			databaseURL: "https://test-6ee2a.firebaseio.com",
			projectId: "test-6ee2a",
			storageBucket: "test-6ee2a.appspot.com",
			messagingSenderId: "448582725279"
	};
var captchas = [];
firebase.initializeApp(config);

function submitToFirebase(){
	setTimeout(function(){
		var arg = document.getElementsByClassName('visualCaptcha-explanation')[0].innerText
		var a = document.getElementsByClassName('visualCaptcha-selected')[0].innerHTML
		var firebaseRef = firebase.database().ref('Captchas/Server')
		var indesNum =  a.search('id=')
		var idNum = a.slice(indesNum + 22 ,indesNum + 23 )
		var element = document.getElementById("visualCaptcha-img-"+idNum);
		html2canvas(element).then(function(canvas) {
			// Export the canvas to its data URI representation
			var base64image = canvas.toDataURL("image/png");
			// Open the image in a new window
			firebaseRef.child(arg).set(base64image);
		});
	},1000)
}

function checkIfExist() {
	// body... check the captcha if exist
	captchas = [];
	var arg = document.getElementsByClassName('visualCaptcha-explanation')[0].innerText
	var db = firebase.database()
  	var scoresRef = db.ref('Captchas/Server');
	console.log("chheking .....")
  	scoresRef.orderByValue().on("value", function(snapshot) {
   		snapshot.forEach(function(data) {
	      	if (data.key == arg){
			console.log("found it .....")
	        	clickOn(data.val())
	      	}
    	});
 	}); 
}

function compareInArray(base) {
	captchas.forEach(function (elem) {
		if (elem == base){
			document.getElementsByClassName('img')[captchas.indexOf(elem)].click()
			console.log('will click on : ' + captchas.indexOf(elem))
		}
	})
}
		function getItObone(argument) {
			var element = document.getElementById("visualCaptcha-img-0");
			html2canvas(element).then(function(canvas) {
				// Export the canvas to its data URI representation
				var base64image = canvas.toDataURL("image/png");
				// Open the image in a new window
				captchas.push(base64image)
				if (captchas.length == 1) {
					getItObtow(argument)
				}
			})
		}
		function getItObtow(argument) {
			var element = document.getElementById("visualCaptcha-img-1");
			html2canvas(element).then(function(canvas) {
				// Export the canvas to its data URI representation
				var base64image = canvas.toDataURL("image/png");
				// Open the image in a new window
				captchas.push(base64image)
				if (captchas.length == 2) {
					getItObthree(argument)
				}
			})
		}
		function getItObthree(argument) {
			var element = document.getElementById("visualCaptcha-img-2");
			html2canvas(element).then(function(canvas) {
				// Export the canvas to its data URI representation
				var base64image = canvas.toDataURL("image/png");
				// Open the image in a new window
				captchas.push(base64image)
				if (captchas.length == 3) {
					getItObfour(argument)
				}
			})
		}
		function getItObfour(argument) {
			var element = document.getElementById("visualCaptcha-img-3");
			html2canvas(element).then(function(canvas) {
				// Export the canvas to its data URI representation
				var base64image = canvas.toDataURL("image/png");
				// Open the image in a new window
				captchas.push(base64image)
				if (captchas.length == 4) {
					getItObfive(argument)
				}
			})
		}
		function getItObfive(argument) {
        var element = document.getElementById("visualCaptcha-img-4");
        html2canvas(element).then(function(canvas) {
          // Export the canvas to its data URI representation
          var base64image = canvas.toDataURL("image/png");
          // Open the image in a new window
          captchas.push(base64image)
          compareInArray(argument)
          waitAndClick(check)
      })
    }

function clickOn(argument) {
  // body...
  
  getItObone(argument)
}
function waitAndClick(callback){
  console.log("Wating time is : " + issue.waiting)
  try{
    document.getElementById('captcha_button').click()
  }
  catch(err){
  	console.log("err")
  }
  try{
    document.getElementsByClassName('btn')[0].click()
  }
  catch(err){
  	console.log("err")
  }
  setTimeout(function () {
	  try{
	    document.getElementById('nextAdBtn').click()
	  }
	  catch(err){
	  	console.log("err")
	  }
  },(issue.waiting + 3) * 1000)
  setTimeout(function () {
  	// body...
  	 callback()
  },7000)
}
function imacrosRun() {try{var e_m64 = "VkVSU0lPTiUyMEJVSUxEJTNEMTAwMjE0NTAlMEFTRVQlMjAhRVJST1JJR05PUkUlMjBZRVMlMEF3YWl0JTIwc2Vjb25kcyUyMCUzRCUyMDk5JTBBVEFCJTIwT1BFTiUwQSUwQVRBQiUyMFQlM0QxJTBBVEFCJTIwQ0xPU0UlMEFVUkwlMjBHT1RPJTNEaHR0cCUzQSUyRiUyRnd3dy5wYWlkdmVydHMuY29t", n64 = "JTIzQ3VycmVudC5paW0=";if(!/^(?:chrome|https?|file)/.test(location)){alert('iMacros: Open webpage to run a macro.');return;}var macro = {};macro.source = decodeURIComponent(atob(e_m64));macro.name = decodeURIComponent(atob(n64));var evt = document.createEvent("CustomEvent");evt.initCustomEvent("iMacrosRunMacro", true, true, macro);window.dispatchEvent(evt);}catch(e){alert('iMacros Bookmarklet error: '+e.toString());}};
setTimeout(function (){
console.log('imacros runnig')
imacrosRun()
},5000)


function check() {
	var checkErr = document.getElementById('startError').innerHTML   
	if ( checkErr !== "") {
	    checkIfExist()	
	}
	// body...
}
