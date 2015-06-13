document.write("<input id=\"element1\"/>");
document.write("+<input id=\"element2\"/>=<button id=\"result\" onclick=\"foo()\">Click me to get result</button>");

//document.write("<br/><button onclick=\"foo()\">Calculate!</button>");
document.write("<br/>2^<input id=\"pow\"/>=<button onclick=\"foo2()\" id=\"powResult\">Get it!</button>");
function foo() {
	var ele1 = document.getElementById("element1").value;
	var ele2 = document.getElementById("element2").value;
	if (ele1 == "") ele1 = "0";
	if (ele2 == "") ele2 = "0";
	document.getElementById("result").innerHTML = parseInt(ele1) + parseInt(ele2);
}

function foo2() {
	var ele = parseInt(document.getElementById("pow").value);
	var res = 1;
	for (var i = 0; i < ele; ++i) {
		res = res * 2;
	}
	document.getElementById("powResult").innerHTML = res;
}
