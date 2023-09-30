// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
var currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(currentTime);
var timeBlock = $(".hour");
var now = parseInt(moment().format("H"));

$(".saveBtn").on("click", function (event) {
      var calendar = event.target.parentElement.previousElementSibling.children[0].value;
      localStorage.setItem(event.target.attributes[0].value, calendar);
});

$.each(timeBlock, function (i, hour) {
      var hour = parseInt($(this).attr("id"));
      if (hour === now) {
          $(this).next().addClass("present");
      } else if (hour < now) {
          $(this).next.addClass("past");
      } else if (hour > now) {
          $(this).next().addClass("future");
      }
});

$(document).ready(function () {
  if(localStorage["9"] !==null && localStorage["9"] !==undefined) {
      var nineAM = $("<p>" + localStorage["9"] + "<p>");
      $("#nineAM").append(nineAM[0].innerText);
  } else {
      ("");
  }

  if(localStorage["10"] !==null && localStorage["10"] !==undefined) {
      var tenAM = $("<p>" + localStorage["10"] + "<p>");
      $("#tenAM").append(tenAM[0].innerText);
  } else {
      ("");
  }

  if(localStorage["11"] !==null && localStorage["11"] !==undefined) {
      var elevAM = $("<p>" + localStorage["11"] + "<p>");
      $("#elevAM").append(elevAM[0].innerText);
  } else {
      ("");
  }

  if(localStorage["12"] !==null && localStorage["12"] !==undefined) {
      var twePM = $("<p>" + localStorage["12"] + "<p>");
      $("#twePM").append(twePM[0].innerText);
  } else {
      ("");
  }
  if(localStorage["1"] !==null && localStorage["1"] !==undefined) {
      var onePM = $("<p>" + localStorage["1"] + "<p>");
      $("#onePM").append(onePM[0].innerText);
  } else {
      ("");
  }

  if(localStorage["2"] !==null && localStorage["2"] !==undefined) {
      var twoPM = $("<p>" + localStorage["2"] + "<p>");
      $("#twoPM").append(twoPM[0].innerText);
  } else {
      ("");
  }

  if(localStorage["3"] !==null && localStorage["3"] !==undefined) {
      var thePM = $("<p>" + localStorage["3"] + "<p>");
      $("#thePM").append(thePM[0].innerText);
  } else {
      ("");
  }

  if(localStorage["4"] !==null && localStorage["4"] !==undefined) {
      var fourPM = $("<p>" + localStorage["4"] + "<p>");
      $("#fourPM").append(fourPM[0].innerText);
  } else {
      ("");
  }

  if(localStorage["5"] !==null && localStorage["5"] !==undefined) {
      var fivePM = $("<p>" + localStorage["5"] + "<p>");
      $("#fivePM").append(fivePM[0].innerText);
  } else {
      ("");
  }
  
});
