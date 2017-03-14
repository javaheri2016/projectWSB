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

/*
function czasDoWydarzenia(year, months, days, hours, minutes, seconds, miliseconds)	{

	    var aktualnyCzas = new Date();

	    var dataWydarzenia = new Date(year, months, days, hours, minutes, seconds, miliseconds);

	    var pozostalyCzas = dataWydarzenia.getTime() - aktualnyCzas.getTime();
     

	    if (pozostalyCzas > 0)

	    {                      

	        var s = pozostalyCzas / 1000;   // sekundy

	        var min = s / 60;               // minuty

	        var h = min / 60;               // godziny

	        var day = h / 24;  				//dni

	 
        var sLeft = Math.floor(s  % 60);    // pozostało sekund    

	        var minLeft = Math.floor(min % 60); // pozostało minut

	        var hLeft = Math.floor(h % 24);          // pozostało godzin

	        var dayLeft = Math.floor(day);

	         

	        if (minLeft < 10)
	          minLeft = "0" + minLeft;

        	if (sLeft < 10)
	          sLeft = "0" + sLeft;

	      	if (dayLeft < 10)
	      		dayLeft = "0" + dayLeft;

	         

	        return dayLeft + hLeft + minLeft;

	    }

	    else

	        return "Zdarzenie miało już miejsce na naszym globie, to już jest historia i już nie powróci!";

	}

	                     

	window.onload = function()

	{

	    idElement = "timer";

	    document.getElementById(idElement).innerHTML = czasDoWydarzenia(2017, 06, 22, 15, 30, 0, 0);

	    setInterval("document.getElementById(idElement).innerHTML = czasDoWydarzenia(2017, 06, 22, 15, 30, 0, 0)", 1000);

	}; */