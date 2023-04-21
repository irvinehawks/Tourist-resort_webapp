//Set up an associative array
//The keys represent the cleaning preferences
//The values represent the cost of the preference.
var preference_prices = new Array();
standard_prices["Standard"]=1000;
deep_prices["Deep"]=1500;
movein_prices["Move/out"]=2500;
other_prices["Other"]=75;

//Set up an associative array 
//The keys represent the special services type
//The value represents the cost of the service.
//We use this this array when the user selects a filling from the form
var filling_prices = new Array();
special1_prices["select other special serices"]=0;
special1_prices["special1"]=100;
special2_prices["special2"]=100;
special3_prices["special3"]=100;

// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from Radio selection
function getPreferencePrice() {
	var preferenceRadio = document.getElementsByName('selectedpreference');

	for (i=0; i < preferenceRadio.length; i++) {
		if (preferenceRadio[i].checked) {
			user_input = preferenceRadio[i].value;
		}
	}

	return cake_prices[user_input];
}

// getSpecialPrice() finds the price based on the filling of the cake.
// Here, we need to take user's the selection from selection list
function getSpecialPrice() {
	var specialSelect = document.getElementById('filling');

	//alert(special_prices[specialSelect.value]);

	return special_prices[specialSelect.value];
}

// getOvenPrice() finds the price based if cleaning oven is selected or not.
function getOvenPrice() {
	var oven = document.getElementById('includeoven');

	if(oven.checked) {
		return(100);
	} else {
		return(0);
	}
}

// getWindowsPrice() finds the price based if cleaning windows is selected or not.
function getWindowsPrice() {
	var windows = document.getElementById('includewindows');

	if(windows.checked) {
		return(100);
	} else {
		return(0);
	}
}

// getFridgePrice() finds the price based if Fridge is selected or not.
function getFridgePrice() {
	var cleanFridge = document.getElementById('includefridge');

	if(cleanFridge.checked) {
		return(100);
	} else {
		return(0);
	}
}

// getIroningPrice() finds the price based if Ironing is selected or not.
function getIroningPrice() {
	var ironing = document.getElementById('includeironing');

	if(ironing.checked) {
		return(100);
	} else {
		return(0);
	}
}

// getHouseChoresPrice() finds the price based if house chores is selected or not.
function getHouseChoresPrice() {
	var houseChores = document.getElementById('includehousechores');

	if(houseChores.checked) {
		return(100);
	} else {
		return(0);
	}
}

// getMaidRentalPrice() finds the price based if maid rental is selected or not.
function getMaidRentalPrice() {
	var maidRental = document.getElementById('includemaidrental');

	if(maidRental.checked) {
		return(100);
	} else {
		return(0);
	}
}

// getUphosteryPrice() finds the price based if puhostery cleaning is selected or not.
function getUphosteryPrice() {
	var uphostery = document.getElementById('includeuphostery');

	if(uphostery.checked) {
		return(100);
	} else {
		return(0);
	}
}



function calculateTotal() {
	var total = getPreferencePrice() + getSpecialPrice() + getOvenPrice() + getWindowsPrice() 
	+ getFridgePrice() + getIroningPrice() + getHouseChoresPrice() + getMaidRentalPrice() + getUphosteryPrice();
	var totalEl = document.getElementById('totalPrice');

	document.getElementById('totalPrice').innerHTML = "Your Total is: ZAR" + total;
	totalEl.style.display = 'block';
}

function hideTotal() {
	var totalEl = document.getElementById('totalPrice');
	totalEl.style.display = 'none';
}