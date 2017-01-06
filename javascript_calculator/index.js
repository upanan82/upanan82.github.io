var result = "",
    smallResult = "",
    val = "",
    b = "", 
    a = "", 
    sign = 0, 
    num = 0,
    calc1 = 0,
    calc2 = 0,
    calc3 = 0,
    calc4 = 0,
    arr, 
    symbol;
	
$(document).ready(function () {
	$('button').click(function() {
		val = $(this).attr("value");
		if(val == "AC") {
			$("h3").html("0");
			$("h4").html("0");
			clear();
			return 0;
		}
		if(val == "." && calc3 == 1)
			return 0;
		if(calc2 == 1 && !isNaN(val)) {
			calc2 = val;
			clear();
			result = calc2;
			smallResult = calc2;
		}
		calc2 = 0;
		if(!isNaN(val))
			calc1++;
		if(!isNaN(val) && sign == 0)
			num = 1;
		if(!isNaN(val) && sign == 1)
			num = 2;
		if(isNaN(val) && val != "±" && val != "=" && val != "AC" && val != ".")
			sign++;
		if(sign == 1 && num == 0) {
			sign = 0;
			return 0;
		}
		if(sign >= 2 && num == 1) {
			sign = 1;
			return 0;
		}
		if(sign == 1 && num == 1 && val == "=")
			return 0;
		if(sign == 1 && val == "=")
			sign++;
		if((sign == 1 && num == 1) || (sign == 2 && num == 2))
			calc1 = 0;
		if(calc1 > 12)
			return 0;
		if((sign == 0 && num == 0 && val == ".") || (sign == 1 && num == 1 && val == "."))
			return 0;
		if(sign == 1 && num == 1)
			calc3 = 0;
		if(val == ".")
			calc3 = 1;
		if(val == "±" && sign == 0 && num == 0 && calc4 == 0) {
			val = "-";
			calc4 = 1;
		}
		if(val == "±" && calc4 == 1)
			return 0;
		if(sign == 2) {
			arr = result.split("");
			for(var i = 0; i < arr.length; i++) {
				if((i == 0 && arr[i] == "-") || !isNaN(arr[i]) || arr[i] == ".")
					b += arr[i];
				else {
					symbol= arr[i];
					a = b;
					b = "";
				}
			}
			a = Number(a);
			b = Number(b);
			if(symbol == "+")
				result = a + b;
			if(symbol == "-")
				result = a - b;
			if(symbol == "*")
				result = a * b;
			if(symbol == "/") {
				if(b != 0)
					result = a / b;
				else {
					$("h4").html(result);
					$("h3").html("Error");
					clear();
					return 0;
				}
			}
			if(isNaN(val) && val != "=" && val != "AC" && val != "±")
				sign = 1;
			if(val == "=") {
				sign = 0;
				val = "";
				calc2 = 1;
				calc3 = 1;
			}
			result = Math.round(result * 100000) / 100000;
			if(result > 999999999999 || result < -999999999999) {
				$("h3").html("Limit reached");
				clear();
				return 0;
			}
			a = "";
			b = "";
			num = 1;
			result += val;
			$("h3").html(result);
			return 0;
		}
		if(val == "=" && sign < 2)
			return 0;
		if(val !== "AC" && val !== "±") {
			smallResult += val;
			if(num == 1 && sign == 1)
				smallResult = val;
			$("h3").html(smallResult);
			if(num == 1 && sign == 1)
				smallResult = "";
			result += val;
			$("h4").html(result);
		}
	})
});

function clear() {
	result = "";
	smallResult = "";
	val = "";
	b = "";
	a = "";
	sign = 0;
	num = 0;
	calc1 = 0;
	calc3 = 0;
	calc4 = 0;
}