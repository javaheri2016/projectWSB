function Countdown(year, months, days, hours, minutes, seconds, miliseconds) {
	var now = new Date();
	var endTime = new Date(year, months, days, hours, minutes, seconds, miliseconds);
	
	var leftTime = endTime.getTime() - now.getTime();
		if (leftTime>0)
 			{
 				var second = leftTime/1000;   //pobieramy dzisiejsza date
 				var minute = second/60;
 				var hour = minute/60;
 				var day = hour/24;

 				var leftSeconds = Math.floor(second % 60); 	//pozostały czas
 				var leftMinutes = Math.floor(minute % 60);	
 				var leftHours = Math.floor(hour % 60);
 				var leftDays = Math.floor(day);


 				if (leftMinutes<0) 
 					leftMinutes = "0" + leftMinutes;

 				if (leftHours<0) 
 					leftHours = "0" + leftHours;

 				if(leftDays<0)
 					leftDays = "0" + leftDays;

 				return "<h2>" +  leftDays + " dni </h2>" + "<h2>" + leftHours + " godzin </2> " +  "<h2>" + leftMinutes + " minut</h2>";
			}

			else return "promocja trwa!"; 	

	}
 			window.onload = function() {
 				idElement = "timer";
 				document.getElementById(idElement).innerHTML = Countdown(2017, 07, 20, 20, 0, 0, 0), 1000;
 				setInterval("document.getElementById(idElement).innerHTML = Countdown(2017, 07, 20, 20, 0, 0, 0)", 1000);
 		};	