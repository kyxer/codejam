var sys = require("./readConsole");

fibo = new Array();
var calcFibo = function (n){
	if (fibo[n] != -1) {
		return fibo[n];
	};

	fibo[n] = calcFibo(n-2) + calcFibo(n-1);
	return fibo[n];
}

for (var i = 0; i < 1000; i++) {
		fibo[i] = -1;
	}
	fibo[0] = 1;
	fibo[1] = 1;



sys.read(function(cmd){
	console.log(calcFibo(parseInt(cmd)));
});
