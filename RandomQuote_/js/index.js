var colors=['#4EEE94','#66CDAA','#698B22','#8B8B7A','#8B658B','#CDB5CD','#228B22','#EE6363','#B1165C'];

var xmlhttp = new XMLHttpRequest();
var url = "http://ofsip1pyr.bkt.clouddn.com/quote_data3.txt";
var currentQuote,currentAuthor;

$(document).ready(function(){
	alert("123");
	getQuote();
	$("#newQuote").on("click",getQuote);
	$("#shareToTwitter").on("click",function(){
		openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
	});
});

function getQuote(){
	xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myArr = JSON.parse(this.responseText);
		randQuote = parseInt(Math.random()*myArr.length);
		changeContent(myArr);
		changeColor();
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function changeContent(myArr){
	var randQuote = parseInt(Math.random()*myArr.length);
	currentQuote = myArr[randQuote].quote;
	currentAuthor = myArr[randQuote].author;
	
	$('#text').text(currentQuote);
	$('#author').html("----"+currentAuthor);
}

function changeColor(){
	var color =  parseInt(Math.random()*colors.length);

	$("button,a").css({
        backgroundColor: colors[color],
        color: '#ffffff'
      }, 1000);
	  
	$("body").css({
        backgroundColor: colors[color],
		color: colors[color]
      }, 1000);
}