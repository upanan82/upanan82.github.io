var author,
    quote,
    i,
    message = "<p><img src='images/error.png' width='50'></p>We're Sorry, but you can not use quote machine now!<br>Please, try again later.";

function randomQuote() {
  $(".block").html("<img src='images/5.gif' width='25'>");
  function newQuote() {
    $.ajax({
      url: 'https://rawgit.com/upanan82/random_quote_machine/master/quotes.js',
	  	type: 'GET',
		  dataType: 'jsonp',
		  success: function(json) {
        i = Math.floor(Math.random() * json.length);
        quote = json[i].quote;
        author = json[i].author;
        $(".block").html("<h2>" + quote + "</h2><h3>- " + author + " -</h3>");
      },
		  error: function() { $(".parent").html(message); },
		  jsonpCallback: 'jsonCallback'
    });
  }
  setTimeout(newQuote, 400);
};

function tweet() {
  if(quote.length + author.length >= 125)
  {
    alert("We're Sorry, but you can not tweet this quote!");
    return;
  }
  else window.open("https://twitter.com/intent/tweet?hashtags=quote&text=" + '"' + quote + '", ' + author, '_blank');
};

$(document).ready(function() {
  randomQuote();
});