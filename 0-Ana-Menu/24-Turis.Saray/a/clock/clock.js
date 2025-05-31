function startClock(){
		
		var Datum = new Date();
		var std = Datum.getHours();
		var min = Datum.getMinutes();
		var sec = Datum.getSeconds();
		var day = Datum.getDate();
		var month = Datum.getMonth()+1;
		var year = Datum.getFullYear();
		
		printClock(std, min, sec);
		printDate(day, month, year);
		
		timerid = setTimeout("startClock()",1000);
}


