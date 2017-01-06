var timeSession, 
    timeBreak,
    hour,
    minute, 
    second,
    index,
    str,
    but,
    i,
    j;

$(document).ready(function() {
	clearAll();
});

//Clear function
function clearAll() {
  	$("#h1").html(0);
  	$("#h0").html(0);
  	$("#m1").html(0);
  	$("#m0").html(0);
  	$("#s1").html(0);
  	$("#s0").html(0);
  	$("#num").html("25");
  	$("#num1").html("5");
  	$("#h").html("READY");
  	$("#h").css({'color':'#bbb'});
  	$(".max").css({'color':'#bbb', 'cursor':'pointer'});
  	$(".min").css({'color':'#bbb', 'cursor':'pointer'});
  	index = 0;
  	i = 0;
  	j = 1;
}

//Timing function
function timing(i, g) {
	var d = document.getElementById(g);
  	if (i == 0 && parseInt(d.innerHTML, 10) - 1 > 0 && j == 1)
    	p = parseInt(d.innerHTML, 10) - 1;
  	else if (i == 1 && parseInt(d.innerHTML, 10) + 1 <= 6000 && j == 1)
    	p = parseInt(d.innerHTML, 10) + 1;
  	else return;
  	$("#" + g).html(p);
}

//Start function
function start() {
  	$(".max").css({'color':'#555', 'cursor':'default'});
  	$(".min").css({'color':'#555', 'cursor':'default'});
  	but = document.getElementById("go");
  	but.disabled = true;
  	but = document.getElementById("clear");
  	but.disabled = true;
  	but = document.getElementById("stop");
  	but.disabled = false;
  	j = 0;
  	if (index != 1) {
    	var text = document.getElementById("num");
    	timeSession = parseInt(text.innerHTML, 10);
    	text = document.getElementById("num1");
    	timeBreak = parseInt(text.innerHTML, 10);
    	control(1);
  	}
  	else {
    	$("#h").html(str);
    	if (str == "SESSION")
      		$("#h").css({'color':'green'});
    	else $("#h").css({'color':'#df2434'});
    	index = 0;
	}
	timer();
}

//Control function
function control(p) {
	if (p == 1) {
    	time = timeSession;
    	$("#h").html("SESSION");
    	$("#h").css({'color':'green'})
	}
  	if (p == 0) {
    	time = timeBreak;
    	$("#h").html("BREAK");
    	$("#h").css({'color':'#df2434'})
	}
  	time *= 60;
  	hour = parseInt(time / 3600);
  	minute = parseInt((time - (hour * 3600)) / 60) - 1;
  	second = 59;
}

//Timer function
function timer() {
	var Smin, 
      	Shour, 
      	Ssec;
	if (index != 1) {
    	if (time > 0) { 
      		if (second == -1) {
        		minute--;
        		second = 59;
      		} 
      		if (minute == -1 && second == 59 && hour > 0) {
        		minute = 59;
        		second = 59;
        		hour--;
      		} 
      		if (hour < 10) 
        		Shour = '0' + hour;
      		else Shour = hour; 
      		if (minute < 10) 
        		Smin = '0' + minute;
      		else Smin = minute;
      		if (second < 10) 
        		Ssec = '0' + second;
      		else Ssec = second;
      		second--;
      		time--;
      		Ssec = Ssec.toString();
      		Smin = Smin.toString();
      		Shour = Shour.toString();
      		//Animation
      		if (Shour[1] == 9 && Smin[0] == 5 && Smin[1] == 9 && Ssec[0] == 5 && Ssec[1] == 9)
        		animation($("#h0"), Shour[0]);
      		else $("#h0").html(Shour[0]);
      		if (Smin[0] == 5 && Smin[1] == 9 && Ssec[0] == 5 && Ssec[1] == 9) 
        		animation($("#h1"), Shour[1]);
      		else $("#h1").html(Shour[1]);
      		if (Smin[1] == 9 && Ssec[0] == 5 && Ssec[1] == 9) 
        		animation($("#m0"), Smin[0]);
      		else $("#m0").html(Smin[0]);
      		if (Ssec[0] == 5 && Ssec[1] == 9) 
        		animation($("#m1"), Smin[1]);
      		else $("#m1").html(Smin[1]);
      		if (Ssec[1] == 9) 
        		animation($("#s0"), Ssec[0]);
      		else $("#s0").html(Ssec[0]);
      		animation($("#s1"), Ssec[1]);
		}
    	else {
      		if (i == 0) {
        		control(0);
        		i = 1;
			}
      		else {
        		control(1);
        		i = 0;
			}
		} 
    	setTimeout(timer, 1000);
	}
  	else {
    	but = document.getElementById("go");
    	but.disabled = false;
    	but = document.getElementById("stop");
    	but.disabled = true;
    	but = document.getElementById("clear");
    	but.disabled = false;
    	str = document.getElementById("h").innerHTML;
    	$("#h").html("PAUSE");
    	$("#h").css({'color':'#c6b714'})
    	return;
	}
}

//Animation function
function animation(x, y) {
	x.html(y).css({'marginTop':'-10px','opacity':'0'}).animate({'marginTop':'0px','opacity':'1'});
}