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
/*var char,
	power;

function = createWizardArrays() {
	aName = wname
	for (x=0; x < wizards.length - 1; x++) {
		wname = wizards[x];
		
	};
	return aName;
}; */





autoDefeat = function (wiz, drag) {
	if (wiz >= drag) {
		logIt("You have defeated the puny " + dragons[selectedDrag] + " dragon");
	} else {
		logIt("Prepare for battle!");
		battle(wizardap[selectedWiz], dragonhp[selectedDrag]);
	};
};













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

selectedWiz = wizards.indexOf(prompt ("Please select a wizard: " + wizards.join(", ")));		// need to convert name to array index
selectedDrag = dragons.indexOf(prompt("Please select a dragon to fight: " + dragons.join(", ")));

autoDefeat(wizardap[selectedWiz], dragonhp[selectedDrag]);
// battle(wizardap[selectedWiz], dragonhp[selectedDrag]);

stats(dragons, dragonhp);
stats(wizards, wizardap);