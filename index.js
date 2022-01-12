// DAILY SECTION

var firstButton = document.querySelectorAll(".button")[0];

firstButton.addEventListener("click", function() {

  document.querySelector(".work-h").textContent = "8hrs";

  document.querySelector(".work").textContent = "Yesterday - 7hrs.";

  document.querySelector(".exercise-h").textContent = "1hr";

  document.querySelector(".exercise").textContent = "Yesterday - 2hrs.";

  document.querySelector(".play-h").textContent = "1hr";

  document.querySelector(".play").textContent = "Yesterday - 2hrs.";

  document.querySelector(".social-h").textContent = "1hr";

  document.querySelector(".social").textContent = "Yesterday - 0hr.";

  document.querySelector(".study-h").textContent = "1hr";

  document.querySelector(".study").textContent = "Yesterday - 0hr.";

  document.querySelector(".self-h").textContent = "0hr";

  document.querySelector(".self").textContent = "Yesterday - 1hr.";
});



// WEEEKLY TAG SECTION

var secondButton = document.querySelectorAll(".button")[1];

secondButton.addEventListener("click", function() {

  document.querySelector(".work-h").textContent = "34hrs";

  document.querySelector(".work").textContent = "Last Week - 36hrs.";

  document.querySelector(".exercise-h").textContent = "5hrs";

  document.querySelector(".exercise").textContent = "Last Week - 7hrs.";

  document.querySelector(".play-h").textContent = "8hrs";

  document.querySelector(".play").textContent = "Last Week - 6hrs.";

  document.querySelector(".social-h").textContent = "4hrs";

  document.querySelector(".social").textContent = "Last Week - 5hrs.";

  document.querySelector(".study-h").textContent = "5hrs";

  document.querySelector(".study").textContent = "Last Week - 4hrs.";

  document.querySelector(".self-h").textContent = "2hrs";

  document.querySelector(".self").textContent = "Last Week - 2hrs.";

});

// Monthly SECTION

var thirdButton = document.querySelectorAll(".button")[2];

thirdButton.addEventListener("click", function() {

  document.querySelector(".work-h").textContent = "103hrs";

  document.querySelector(".work").textContent = "Last Month - 128hrs.";

  document.querySelector(".exercise-h").textContent = "11hrs";

  document.querySelector(".exercise").textContent = "Last Month - 18hrs.";

  document.querySelector(".play-h").textContent = "23hrs";

  document.querySelector(".play").textContent = "Last Month - 29hrs.";

  document.querySelector(".social-h").textContent = "21hrs";

  document.querySelector(".social").textContent = "Last Month - 23hrs.";

  document.querySelector(".study-h").textContent = "13hrs";

  document.querySelector(".study").textContent = "Last Month - 19hrs.";

  document.querySelector(".self-h").textContent = "7hrs";

  document.querySelector(".self").textContent = "Last Month - 11hrs.";


});
