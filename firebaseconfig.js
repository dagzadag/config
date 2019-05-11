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
		var firebaseRef = firebase.database().ref('Captchas')
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
	var arg = document.getElementsByClassName('visualCaptcha-explanation')[0].innerText
	var db = firebase.database()
  	var scoresRef = db.ref('Captchas');
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
					try{
						document.getElementById('button_captcha').click()
						document.getElementsByClassName('btn')[0].click()
					}
			})
		}
function clickOn(argument) {
	// body...
	
	getItObone(argument)
}
