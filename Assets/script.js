
// this allows jquery to wait till the browser has rendered 
$(document).ready(function(){
 // displays current time and date 

 //gives us the current time in the correct format 
let currentTime = dayjs().format("dddd, MMMM D, YYYY");

//gets the element to display currentTime
let displayDate = document.querySelector("#currentDay");

//takes the current time and adds it to the correct spot 
displayDate.textContent = currentTime;

// add click listener to saveBtn get user input row id and save to local storage 
$(".saveBtn").on("click", function() {
  let text = $(this).siblings(".description").val();
  let time = $(this).parent().attr("id");

  // save to local storage
  localStorage.setItem(time, text);
});

function hourUpdate() {
  //get the current hour #
  let currentHour = dayjs().hour();


  //loop over the time blocks
  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    //validate for the time and change to corresponding color and class 
    if (blockHour < currentHour) {
      $(this).addClass("past");
      
    } else if (blockHour === currentHour){
      $(this).removeClass("past");
      $(this).adcClass("present");
      
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
      
    }
  });
}
hourUpdate();


//loop over time blocks and retrieve and display data from local storage 

function displayEvent() {
  //loop over time blocks
  $(".time-block").each( function () {
   var blockHour = $(this).attr("id");
  $(this).children(".description").val(localStorage.getItem(blockHour)); 
  });
  
};

displayEvent();

});

