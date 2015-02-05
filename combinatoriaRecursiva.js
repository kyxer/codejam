var sys = require("./readConsole");


var comb = function(n, k) {

	if (k == 0 || k == n){
		return 1;
	}
	else {

		return comb(n-1,k-1) + comb(n-1,k);
	}
}



sys.read(function(cmd){

	//console.log(parseInt(cmd));
	var n = parseInt(cmd);

	sys.read(function(cmd){

		var k = parseInt(cmd);

		console.log(comb(n,k));

	});
});
