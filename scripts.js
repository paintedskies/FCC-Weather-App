$(document).ready(function(){
	var temp;
	var APIKEY = "0d6aad61c1bfbceaa19be31b553e451b";
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(location) {
			console.log(location);
			$.ajax({
				url:"https://api.darksky.net/forecast/"+APIKEY+"/"+location.coords.latitude+", "+location.coords.longitude,
				method:"GET",
				dataType:"jsonp"
			})
			.done(function(res){

				temp = ((res.currently.temperature-32.0)*(5.0/9.0))+273.15;
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
					var img = "<img src =\"images/"+res.currently.icon+".png\">";
				
				var desc = "<p id=\"temp\">" + disptemp+"&deg;" + "</p>" + "<p>" + res.currently.summary + "</p>";
				console.log(res);
				var loc = "<p>" + res.timezone+"</p>";
				$("#weather-info").hide().html(img+desc+loc).fadeIn("slow");
				console.log("WORKS");
				
			})
			.fail(function(){
				$("#weather-info").html("<p> Unable to obtain weather data </p>");
			});
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
