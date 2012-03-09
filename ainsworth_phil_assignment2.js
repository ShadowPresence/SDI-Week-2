// -- Variable Farm --
var dragons = ["Red", "Blue", "Green", "RazorBack", "Gorgonthaller"];
var dragonhp = [2000, 1000, 500, 250, 125];
var wizards = ["Merlin", "Morgana", "Gandalf", "Dumbledore"];
var wizardap = [500, 400, 200, 100];
var defeated;
var selectedWizard;
var selectedDragon;
var merlinWin = [],
	morganaWin = [],
	gandalfWin = [],
	dumbledoreWin = [],
	win,
	dragAmount,
	wizAmount;
	
// -- Functions
var logIt = function (input) {
	if (!input) {
		console.log("We have nothing to log.");
	} else {
		console.log(input);
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
		return i;
};

var sessionLength = function (loops) {
	for (i=0; i < loops; i++) {
		// -- More user input variables
		selectedWizard = wizards.indexOf(prompt ("Please select a wizard for this battle: " + wizards.join(", ")));
		selectedDragon = dragons.indexOf(prompt("Please select a dragon to fight: " + dragons.join(", ")));
		var defeated = autoDefeat(wizardap[selectedWizard], dragonhp[selectedDragon]);
		logIt("Congratulation! You defeated the " + defeated + " dragon!");
		wins(wizards[selectedWizard]);
	};
	return i;
};

var wins = function (array) {
	if (array==="Merlin") {
		merlinWin.push(win);
	} else if (array==="Morgana") {
		morganaWin.push(win);
	} else if (array==="Gandalf") {
		gandalfWin.push(win);
	} else if (array==="Dumbledore") {
		dumbledoreWin.push(win);
	} else return;
};

var autoDefeat = function (wiz, drag) {
	if (wiz >= drag) {
		logIt("You are far superior than the puny " + dragons[selectedDragon] + " dragon!");
		logIt("It lays slain after a single fatal blow!");
		win = 1;
		return dragons[selectedDragon];
	} else {
		logIt(wizards[selectedWizard] + ", prepare to battle the " + dragons[selectedDragon] + " dragon!");
		win = battle(wizardap[selectedWizard], dragonhp[selectedDragon]);
		return dragons[selectedDragon];
	};
	
};


// -- Start of script --


	
// -- User input variables
var numberOfBattles = prompt("How many battles would you like to fight today?");

// -- Start calling functions
var sessions = sessionLength(numberOfBattles);
logIt(" -- The battles have completed! -- ");
logIt("HERE ARE THE STATS:");
var dragAmount = stats(dragons, dragonhp);
var wizAmount = stats(wizards, wizardap);

logIt("There are " + dragAmount + " dragons, and " + wizAmount + " wizards to defeat them.");

logIt("Merlin won: " + merlinWin.length);
logIt("Morgana won: " + morganaWin.length);
logIt("Gandalf won: " + gandalfWin.length);
logIt("Dumbledore won: " + dumbledoreWin.length);

logIt("You played " + sessions + " sessions");





