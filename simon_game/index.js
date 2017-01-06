var	arrOne = [],
    arrTwo = [],
    ch = 0,
    j = 0;
	
myAudio = new Audio;

//Start function
function go() {
	arrOne = [];
	arrTwo = [];
	j = 1;
	arrOne.push(Math.floor(Math.random() * 4));
	$(".m1").html(arrOne.length);
	dis(1);
	rec();
}

//Recolor function
function rec() {
	for (var i = 0; i < arrOne.length; i++)
		func(i);
}

function func(i) {
	setTimeout(function() {
		if (arrOne.length - 1 == i) {
			j = 1;
			dis(1);
		}
		func2(arrOne[i]);
	}, 600 * i);
}

function func2(arg) {
	$("#a" + arg).css({'opacity':'1'});
	myAudio.src = "https://s3.amazonaws.com/freecodecamp/simonSound" + (arg + 1) + ".mp3";
	myAudio.play();
	setTimeout(function() {
		$("#a" + arg).css({'opacity':'.5'});
	}, 300);
}

//Check function
function check(arg) {
	if (j != 0) {
		func2(arg);
		arrTwo.push(arg);
		if (arrTwo.join('') != arrOne.slice(0, arrTwo.length).join('')) {
			dis(0);
			j = 0;
			if (ch == 0)
				$(".m1").html("GAME OVER");
			else {
				arrTwo = [];
				$(".m1").html("WRONG");
				setTimeout(function() {
					rec();
					$(".m1").html(arrOne.length);
				}, 2000);
			}
		}
		else if (arrTwo.length == arrOne.length) {
			if (arrTwo.length == 20)
				win();
			else {
				dis(0);
				j = 0;
				arrOne.push(Math.floor(Math.random() * 4));
				arrTwo = [];
				setTimeout(function() {
					$(".m1").html(arrOne.length);
					rec();
				}, 1000);
			}
		}
	}
}

//Strict/not strict function
function change() {
	if (ch == 0) {
		ch = 1;
		$(".m2").html("NOT STRICT");
		$(".m2").css({'width':'130px'});
	}
	else if (ch == 1) {
		ch = 0;
		$(".m2").html("STRICT");
		$(".m2").css({'width':'70px'});
	}
}

//Disabled function
function dis(k) {
	if (k == 0)
		document.getElementById("again").disabled = true;
	else document.getElementById("again").disabled = false;
}

//Win function
function win() {
	$(".m1").html("YOU WIN");
	setTimeout(function() {
		go();
	}, 2500);
}