w3.includeHTML(function({
    currentdate();
}));

//day of week
/*var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()];

//date
var a = new Date();
var dayofmonth = a.getDate();

//month
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var b = new Date();
var whichmonth = month[b.getMonth()];

//year
var e = new Date();
var year = e.getFullYear();

document.getElementById("currentdate").innerHTML = n + " " +dayofmonth + " " + whichmonth + " " + year;

/*
//remember to add an ID of "mainmenu" to the nav ul
var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF=urlArray[urlArray.length-1];

if (pageHREF !=="") {
	var menu = document.querySelectorAll('ul#mainmenu li a');
	var i;
	//loop through all the menu items in the navigation
	for(i=0; i<menu.length; i++) {
		var currentURL=(menu[i].getAttribute("href"));
		menu[i].parentNode.className=""; //turn off hilighting by default
		if (currentURL===pageHREF) {
			menu[i].parentNode.className="active";	//turn on if a match
		} // end if
	} // end of the search for a match
} // end of if !==
*/
*/
