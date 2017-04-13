var playerOne,
    playerTwo,
    xWin,
    oWin,
    turn = 0,
    ar,
    b = 1,
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9;

$(document).ready(function () {
	firstMenu();
});

function firstMenu() {
	$(".block").html("<a class='a' href='#' onclick='onePlayer()'><h3>One Player</h3></a><a class='a' href='#' onclick='twoPlayer()'><h3>Two Player</h3></a>");
}

function secondMenu() {
	$(".block").html("<h3 class='h' style='margin-right: 20px;' onclick='start(1)'>X</h3><h3 class='h' onclick='start(0)'>O</h3><h3 onclick='firstMenu()' class='p'>Back</h3>");
}

function onePlayer() {
	secondMenu();
	xWin = "You win!";
	oWin = "You lose!";
}

function twoPlayer() {
	secondMenu();
	xWin = "Player 1 win!";
	oWin = "Player 2 win!";
}

function start(arg) { 
	$(".block").html("<p class='p' id='tit'></p><div class='board'><table id='board'><tr class='row'><td id='a1' onclick='go(1)'></td><td id='a2' onclick='go(2)'></td><td id='a3' onclick='go(3)'></td></tr><tr class='row'><td id='a4' onclick='go(4)'></td><td id='a5' onclick='go(5)'></td><td id='a6' onclick='go(6)'></td></tr><tr class='row'><td id='a7' onclick='go(7)'></td><td id='a8' onclick='go(8)'></td><td id='a9' onclick='go(9)'></td></tr></table></div><br><br><br><div class='button'><h3 onclick='off()' style='margin-bottom: 25px; float: left;'>New game</h3><h3 onclick='replay()' style='margin-bottom: 25px; float: right;'>Replay</h3></div>");
	turn = 0;
	$("#tit").html("Player 1 - GO");
	if (arg == 1) {
		playerOne = "x";
		playerTwo = "o";
	}
	else {
		playerOne = "o";
		playerTwo = "x";
	}
}

//Click function
function go(arg) {
	if (turn == 0 && $("#a" + arg).text() == "") {
		if (b == 1) {
			$("#tit").html("Player 2 - GO");
			$("#a" + arg).text(playerOne);
			b = 0
		}
		else {
			$("#tit").html("Player 1 - GO");
			$("#a" + arg).text(playerTwo);
			b = 1;
		}
		func();
		check();
		if (oWin != "Player 2 win!" && turn == 0) {
			turn = 1;
			b = 1;
			setTimeout(function() {
				$("#tit").html("Player 1 - GO");
				comp();
				func();
				check();
			}, 300);
		}
	}
}

function func() {
	a1 = $("#a1").html();
	a2 = $("#a2").html();
	a3 = $("#a3").html();
	a4 = $("#a4").html();
	a5 = $("#a5").html();
	a6 = $("#a6").html();
	a7 = $("#a7").html();
	a8 = $("#a8").html();
	a9 = $("#a9").html();
}

//Check function
function check() {
	if ((a1 == playerOne && a1 == a2 && a1 == a3) || (a4 == playerOne && a4 == a5 && a4 == a6) || (a7 == playerOne && a7 == a8 && a7 == a9) || (a1 == playerOne && a1 == a4 && a1 == a7) || (a2 == playerOne && a2 == a5 && a2 == a8) || (a3 == playerOne && a3 == a6 && a3 == a9) || (a1 == playerOne && a1 == a5 && a1 == a9) || (a3 == playerOne && a3 == a5 && a3 == a7)) {
		$("#tit").html(xWin);
		turn = 1;
	}
	else if ((a1 == playerTwo && a1 == a2 && a1 == a3) || (a4 == playerTwo && a4 == a5 && a4 == a6) || (a7 == playerTwo && a7 == a8 && a7 == a9) || (a1 == playerTwo && a1 == a4 && a1 == a7) || (a2 == playerTwo && a2 == a5 && a2 == a8) || (a3 == playerTwo && a3 == a6 && a3 == a9) || (a1 == playerTwo && a1 == a5 && a1 == a9) || (a3 == playerTwo && a3 == a5 && a3 == a7)) {
		$("#tit").html(oWin);
		turn = 1;
	}
	else if (((a1 == "x") || (a1 == "o")) && ((a4 == "x") || (a4 == "o")) && ((a7 == "x") || (a7 == "o")) && ((a2 == "x") || (a2 == "o")) && ((a5 == "x") || (a5 == "o")) && ((a8 == "x") || (a8 == "o")) && ((a3 == "x") || (a3 == "o")) && ((a6 == "x") || (a6 == "o")) && ((a9 == "x") || (a9 == "o"))) {
		$("#tit").html("It's a tie!");
		turn = 1;
	}
}

//Computer game function
function comp() {
	if (a1 == "" && ((a3 == playerTwo && a2 == playerTwo) || (a9 == playerTwo && a5 == playerTwo) || (a7 == playerTwo && a4 == playerTwo)))
		$('#a1').text(playerTwo);
	else if (a2 == "" && ((a1 == playerTwo && a3 == playerTwo) || (a8 == playerTwo && a5 == playerTwo)))
		$('#a2').text(playerTwo);
	else if (a3 == "" && ((a1 == playerTwo && a2 == playerTwo) || (a7 == playerTwo && a5 == playerTwo) || (a9 == playerTwo && a6 == playerTwo)))
		$('#a3').text(playerTwo);
	else if (a9 == "" && ((a7 == playerTwo && a8 == playerTwo) || (a1 == playerTwo && a5 == playerTwo) || (a3 == playerTwo && a6 == playerTwo)))
		$('#a9').text(playerTwo);
	else if (a7 == "" && ((a9 == playerTwo && a8 == playerTwo) || (a3 == playerTwo && a5 == playerTwo) || (a1 == playerTwo && a4 == playerTwo)))
		$('#a7').text(playerTwo);
	else if (a8 == "" && ((a9 == playerTwo && a7 == playerTwo) || (a2 == playerTwo && a5 == playerTwo)))
		$('#a8').text(playerTwo);
	else if (a4 == "" && ((a6 == playerTwo && a5 == playerTwo) || (a1 == playerTwo && a7 == playerTwo)))
		$('#a4').text(playerTwo);
	else if (a6 == "" && ((a3 == playerTwo && a9 == playerTwo) || (a5 == playerTwo && a4 == playerTwo)))
		$('#a6').text(playerTwo);
	else if (a5 == "" && ((a3 == playerTwo && a7 == playerTwo) || (a9 == playerTwo && a1 == playerTwo) || (a6 == playerTwo && a4 == playerTwo) || (a8 == playerTwo && a2 == playerTwo)))
		$('#a5').text(playerTwo);
	else if (a1 == "" && ((a3 == playerOne && a2 == playerOne) || (a9 == playerOne && a5 == playerOne) || (a7 == playerOne && a4 == playerOne)))
		$('#a1').text(playerTwo);
	else if (a2 == "" && ((a1 == playerOne && a3 == playerOne) || (a8 == playerOne && a5 == playerOne)))
		$('#a2').text(playerTwo);
	else if (a3 == "" && ((a1 == playerOne && a2 == playerOne) || (a7 == playerOne && a5 == playerOne) || (a9 == playerOne && a6 == playerOne)))
		$('#a3').text(playerTwo);
	else if (a9 == "" && ((a7 == playerOne && a8 == playerOne) || (a1 == playerOne && a5 == playerOne) || (a3 == playerOne && a6 == playerOne)))
		$('#a9').text(playerTwo);
	else if (a7 == "" && ((a9 == playerOne && a8 == playerOne) || (a3 == playerOne && a5 == playerOne) || (a1 == playerOne && a4 == playerOne)))
		$('#a7').text(playerTwo);
	else if (a8 == "" && ((a9 == playerOne && a7 == playerOne) || (a2 == playerOne && a5 == playerOne)))
		$('#a8').text(playerTwo);
	else if (a4 == "" && ((a6 == playerOne && a5 == playerOne) || (a1 == playerOne && a7 == playerOne)))
		$('#a4').text(playerTwo);
	else if (a6 == "" && ((a3 == playerOne && a9 == playerOne) || (a5 == playerOne && a4 == playerOne)))
		$('#a6').text(playerTwo);
	else if (a5 == "" && ((a3 == playerOne && a7 == playerOne) || (a9 == playerOne && a1 == playerOne) || (a6 == playerOne && a4 == playerOne) || (a8 == playerOne && a2 == playerOne)))
		$('#a5').text(playerTwo);
	else if (a5 == "")
		$('#a5').text(playerTwo);
	else if (a1 == "")
		$('#a1').text(playerTwo);
	else if (a9 == "")
		$('#a9').text(playerTwo);
	else if (a8 == "")
		$('#a8').text(playerTwo);
	else if (a4 == "")
		$('#a4').text(playerTwo);
	turn = 0;
}

//Replay function (clear function)
function replay() {
	for (var i = 1; i <= 9; i++)
		$("#a" + i).text("");
	b = 1;
	turn = 0;
	$("#tit").html("Player 1 - GO");
}

//New game function
function off() {
	replay();
	firstMenu();
}