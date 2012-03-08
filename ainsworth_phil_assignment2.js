var logIt = function (input) {
	if (!input) {
		console.log("We have nothing to log.");
	} else {
		console.log(input);
	};
};




var autoDefeat = function (wiz, drag) {
	if (wiz >= drag) {
		logIt("You are far superior than the puny " + dragons[selectedDragon] + " dragon!");
		logIt("It lays slain after a single fatel blow!");
	} else {
		logIt("Prepare to battle the " + dragons[selectedDragon] + " dragon!");
		var win = battle(wizardap[selectedWizard], dragonhp[selectedDragon]);
		logIt(win);
	};
	return dragons[selectedDragon];
};




var battle = function(wiz, drag) {
	var strike = drag
	logIt("Dragon hit points: " + strike);
	logIt("Your attack ability is rated at: " + wiz);
	while (wiz < strike) { 
		strike -= wiz;
		logIt("You hit the dragon! It's hit points have been reduced to " + strike);
	};
	logIt("Consider the dragon slain!")
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









var sessionLength = function (loops) {
	for (i=0; i < loops; i++) {
		// -- More user input variables
		var selectedWiz = wizards.indexOf(prompt ("Please select a wizard for this battle: " + wizards.join(", ")));
		function wizTransfer(x) {
			selectedWizard = x;
			return selectedWizard;
		};
		var selectedDrag = dragons.indexOf(prompt("Please select a dragon to fight: " + dragons.join(", ")));
		function dragTransfer(x) {
			selectedDragon = x;
			return selectedDragon;
		};
		wizTransfer(selectedWiz);
		dragTransfer(selectedDrag)
		var defeated = autoDefeat(wizardap[selectedWiz], dragonhp[selectedDrag]);
		logIt("Congratulation! You defeated the " + defeated + " dragon!");
	};
};

// -- Start of script --
// -- Variable Farm --
var dragons = ["Red", "Blue", "Green", "RazorBack", "Gorgonthaller"];
var dragonhp = [2000, 1000, 500, 250, 125];
var wizards = ["Merlin", "Morgana", "Gandalf", "Dumbledore", []];
var wizardap = [500, 400, 200, 100];
/*var char,
	power; */
var selectedWizard;
var selectedDragon;
// -- User input variables
var numberOfBattles = prompt("How many battles would you like to fight today?");

// -- Start calling functions
sessionLength(numberOfBattles);


// stats(dragons, dragonhp);
// stats(wizards, wizardap);