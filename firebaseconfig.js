var config = {
			apiKey: "AIzaSyACSgbAIM01KGI_twhGzX1FABWyhhCS3Eo",
			authDomain: "test-6ee2a.firebaseapp.com",
			databaseURL: "https://test-6ee2a.firebaseio.com",
			projectId: "test-6ee2a",
			storageBucket: "test-6ee2a.appspot.com",
			messagingSenderId: "448582725279"
	};
	firebase.initializeApp(config);
function submitToFirebase(){
	setTimeout(function(){
		var a = document.getElementsByClassName('visualCaptcha-selected')[0].innerHTML
		var firebaseRef = firebase.database().ref()

		var indesNum =  a.search('id=')
		var idNum = a.slice(indesNum + 22 ,indesNum + 23 )
		var expl = document.getElementsByClassName('visualCaptcha-explanation')[0].innerHTML
		var sli = expl.slice(29)
		var indeNum = sli.search("<")
		var finalSli = sli.slice(0,indeNum)

		var element = document.getElementById("visualCaptcha-img-"+idNum);
		html2canvas(element).then(function(canvas) {
			// Export the canvas to its data URI representation
			var base64image = canvas.toDataURL("image/png");
			// Open the image in a new window
			firebaseRef.child(finalSli).set(base64image);
		});
	},1000)
}
