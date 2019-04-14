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
function changeDrow(){
  console.log('changing value');
  //var a = document.getElementsByClassName('visualCaptcha-selected')[0].innerHTML;
  //var indesNum =  a.search('id=');
  //var idNum = a.slice(indesNum,indesNum + 1 );
  setTimeout(function () {
  	// body...
  	var b = document.getElementById('visualCaptcha-img-0').setAttribute("onClick","submitToFirebase()")	
  var c = document.getElementById('visualCaptcha-img-1').setAttribute("onClick","submitToFirebase()")	
  var d = document.getElementById('visualCaptcha-img-2').setAttribute("onClick","submitToFirebase()")	
  var e = document.getElementById('visualCaptcha-img-3').setAttribute("onClick","submitToFirebase()")	
  var f = document.getElementById('visualCaptcha-img-4').setAttribute("onClick","submitToFirebase()")	
  var f = document.getElementsByClassName('visualCaptcha-refresh-button')[0].setAttribute("onClick","changeDrow()")	
  var str = document.getElementsByClassName('visualCaptcha-explanation')[0].innerHTML;
  var firstPart = str.replace('Click or touch the ','');
  secPart = firstPart.replace('<strong>','<strong style="color:black;">');
  document.getElementsByClassName('visualCaptcha-explanation')[0].innerHTML = secPart;
  var img1 = document.getElementsByClassName('imgAnchor')[0].innerHTML ;
  document.getElementsByClassName('imgAnchor')[0].innerHTML = img1 + '<strong style="color: #32c75f;font-size: 20px;">1</strong>';
  var img2 = document.getElementsByClassName('imgAnchor')[1].innerHTML;
  document.getElementsByClassName('imgAnchor')[1].innerHTML = img2 + '<strong style="color: #32c75f;font-size: 20px;">2</strong>';
  var img3 = document.getElementsByClassName('imgAnchor')[2].innerHTML;
  document.getElementsByClassName('imgAnchor')[2].innerHTML = img3 + '<strong style="color: #32c75f;font-size: 20px;">3</strong>';
  var img4 = document.getElementsByClassName('imgAnchor')[3].innerHTML;
  document.getElementsByClassName('imgAnchor')[3].innerHTML = img4 + '<strong style="color: #32c75f;font-size: 20px;">4</strong>';
  var img5 = document.getElementsByClassName('imgAnchor')[4].innerHTML;
  document.getElementsByClassName('imgAnchor')[4].innerHTML = img5 + '<strong style="color: #32c75f;font-size: 20px;">5</strong>';
  },800)
  
  
}
function checkIfExist(argument) {
	// body... check the captcha if exist
	var db = firebase.database()
  	var scoresRef = db.ref();
  	var expl = document.getElementsByClassName('visualCaptcha-explanation')[0].innerHTML
  	var sli = expl.slice(29)
  	var indeNum = sli.search("<")
  	var finalSli = sli.slice(0,indeNum)
  	scoresRef.orderByValue().on("value", function(snapshot) {
   		snapshot.forEach(function(data) {
	      	if (data.key == finalSli){
	        	clickOn(data.val())
	      	}
    	});
 	}); 
}
var captchas = [];
function compareInArray(base) {
	captchas.forEach(function (elem) {
		if (elem == base){
			var element = document.getElementById("visualCaptcha-img-"+captchas.indexOf(elem));
			element.click()
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
			captchas.push(base64image)
			if (captchas.length >= 5) {
				compareInArray(arg)
			}
		})
	}
}
