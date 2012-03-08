var logIt = function (input) {
	if (!input) {
		console.log("We have nothing to log.");
	} else {
		console.log(input);
	};
};

var dragons = ["Red", "Blue", "Green", "RazorBack", "Gorgonthaller"]
var dragonhp = [2000, 1000, 500, 250, 125]
var wizards = ["Merlin", "Morgana", "Gandalf", "Dumbledore"]
var wizardap = [500, 400, 200, 100]
var char,
	power;

var battle = function(wiz, drag) {
	var strike = drag
	logIt("Dragon hit points: " + strike);
	logIt("Your attack ability is rated at: " + wiz);
	while (wiz < strike) {
		strike -= wiz;
		logIt("You hit the dragon! It's hit points have been reduced to " + strike);
	};
	logIt("You beat the Dragon!")
	return 1;
}



var stats = function (char, power) {
		if (char===dragons) {
			for (i=0; i<char.length;i++) {
				logIt("The " + char[i] + " Dragon has " + power[i] + " hit points"); 
			};
		} else if (char===wizards) {
			for (i=0; i<char.length;i++) {
				logIt("The Wizard " + char[i] + " has " + power[i] + " attack points"); 
			};
		} else {
			logIt("Why is this getting chosen?");
		};
};
battle(wizardap[3], dragonhp[0]);
stats(dragons, dragonhp);
stats(wizards, wizardap);