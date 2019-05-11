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
function clickOn(arg) {
	// body...
	for (var i = 0 ; i < 5; i++) {	
		var element = document.getElementById("visualCaptcha-img-"+i);
		html2canvas(element).then(function(canvas) {
			// Export the canvas to its data URI representation
			var base64image = canvas.toDataURL("image/png");
			// Open the image in a new window
			if (captchas.length < 5){
				captchas.push(base64image)
			} 
			if (captchas.length == 5) {
				compareInArray(arg)
			}
		})
		setTimeout(function (argument) {
				console.log('lag laga laga')
		},600)
	}
}
