$(document).ready(function(){
	var temp;
	var APIKEY = "17e119976e3b2664d8c23d0e04e1cb23";
 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(location) {
		console.log(location.lat);
		$.ajax({
			url:"http://api.openweathermap.org/data/2.5/weather?lat="+location.lat+"&lon="+location.lon+"&APPID="+APIKEY,
			method:"GET",
			dataType:"json"
		})
		.done(function(res){
			console.log(res);
			temp = res.main.temp;
			var iconlink = "http://openweathermap.org/img/w/"+res.weather[0].icon+".png";
			var disptemp = (this.checked ? ((9.0/5.0)*(temp-273)+32) : (temp-273)).toFixed(2);
			if(this.checked)
			{
				$("h1").css({"color":"#ff206e"});
				$("#temp").css({"color":"#4ba3c3"});
				$("#weather-info").css({"color":"#ff206e","margin-top":"0px"});

			}
			else{
				$("h1").css({"color":"#4ba3c3"});
				$("#temp").css({"color":"#ff206e"});
				$("#weather-info").css({"color":"#4ba3c3"});
			}
			var img = "<img src =\""+iconlink+"\">";
			var desc = "<p id=\"temp\">" + disptemp+"&deg;" + "</p>" + "<p>" + res.weather[0].main + "</p>";
			var loc = "<p>" + location.city + ", " + location.country + "</p>";
			$("#weather-info").hide().html(img + desc + loc).fadeIn("slow");
			console.log("WORKS");
		})
	 });
}
	

	$("#switch > :checkbox").change(function()
			{
				console.log("temp"+temp);
				var disptemp = (this.checked ? ((9.0/5.0)*(temp-273)+32) : (temp-273)).toFixed(2);
				if(this.checked)
				{
					$("h1").css({"color":"#ff206e"});
					$("#temp").css({"color":"#4ba3c3"});
					$("#weather-info").css({"color":"#ff206e"});

				}
				else{
					$("h1").css({"color":"#4ba3c3"});
					$("#temp").css({"color":"#ff206e"});
					$("#weather-info").css({"color":"#4ba3c3"});
				}
				$("#temp").html(disptemp+"&deg;");
			});


});
