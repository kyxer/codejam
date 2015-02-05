
var sys = require("./readConsole");


sys.read(function(cmd){
	console.log(fibo(parseInt(cmd)));
})
 

var fibo = function (n) {

	if (n<=1) {
		return 1;
	}
	else {
		return fibo (n-2) + fibo(n-1);
	}

};



