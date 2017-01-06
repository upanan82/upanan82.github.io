var listText,
    status = "",
    arr = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
    message = "<p><img src='images/error.png' width='50'></p>We're Sorry, but you can not use twitch streamers now!<br>Please, try again later.";

function table() {
	arr.forEach(function(item) {
		$.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + item + "?callback=?", function(trs) {
			$.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + item + "?callback=?", function(json) {
				if(json.stream == null) 
					status = "<h4>offline</h4>";
				else 
					status = "<h4 style='color: #d26c22'>" + json.stream.game + "</h4>";
				listText = document.createElement('li');
				listText.innerHTML = "<img class='img' src='" + trs.logo + "'><a class='a' target='_blank' href='" + trs.url + "'>" + item + "</a>" + status;
				list.appendChild(listText);
			})
			.fail(function() { $(".block").html(message); })
		})
		.fail(function() { $(".block").html(message); })
	});
};

$(document).ready(function () {
	table();
	$(".footer").html("by <a target='_blank' href='https://github.com/upanan82'>upanan82</a>");
});