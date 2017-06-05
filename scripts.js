$(document).ready(function(){
	console.log("HI");
	var temp;
	var APIKEY = "17e119976e3b2664d8c23d0e04e1cb23";
	$.ajax({
		url:"http://ip-api.com/json",
		method:"GET"
		})
		.done(function(location){


			console.log(location);
			$.ajax({
				url:"http://api.openweathermap.org/data/2.5/weather?lat="+location.lat+"&lon="+location.lon+"&APPID="+APIKEY,
				method:"GET"
				})
				.done(function(res){
					$("#weather-info").append("<p>" + res.weather[0].main + "</p>");
					temp = res.main.temp;


					$("#weather-info").append("<p>" + temp + "</p>");
					$("#weather-info").append("<p>" + location.city + ", " + location.country+"</p>");
					console.log("WORKS");
				})
				.fail(function(){
					console.log("Weather doesn't work");
				});
		})
		.fail(function(){
			alert("Couldn't obtain user location");
		});
	
	
});
