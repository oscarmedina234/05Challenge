
// this allows jquery to wait till the browser has rendered 
$(document).ready(function(){
 // displays current time and date 

 //gives us the current time in the correct format 
let currentTime = dayjs().format("dddd, MMMM D, YYYY, h:mm:ss a");

//gets the element to display currentTime
let displayDate = document.querySelector('#currentDay');

//takes the current time and adds it to the correct spot 
displayDate.textContent = currentTime;


});

