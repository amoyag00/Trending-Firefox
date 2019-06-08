var maxTrends =10;
$(document).ready(function(){

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	     	replaceTrends(this.responseText);
	    }
	};

	xhttp.open("GET", "http://127.0.0.1:8081/trends", true);
	xhttp.send();

});

function replaceTrends(responseText){
	var jsonRes = JSON.parse(responseText);
	var trends = jsonRes[0].trends;
	trends.splice(maxTrends, trends.length-maxTrends);
	trends.forEach(function(trend){
		console.log(trend.name);
		var word = trend.name.replace(/#/g,"");
		if(!word.includes(" ")){
			word = word.split(/(?=[A-Z])/).join(" ");
		}
		
		console.log(word);
		var regex = new RegExp("("+word+")","gi");
		var replaced = $("body").html().replace(regex,'<a class="myLink" href="'+trend.url+'" >$1</a>');
		$("body").html(replaced);
	});
	
	$(".myLink").css("color","hotpink");
}

