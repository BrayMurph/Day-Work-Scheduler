var saveBtn = $(".save-icon");
var containerEl = $(".container");
var nineam = $("#9AM");
var tenam = $("#10AM");
var elevenam = $("#11AM");
var twelevepm = $("#12PM");
var onepm = $("#1PM");
var twopm = $("#2PM");
var threepm = $("#3PM");
var fourpm = $("#4PM");
var fivepm = $("#5PM");

var scheduleArr = [
  nineam,
  tenam,
  elevenam,
  twelvepm,
  onepm,
  twopm,
  threepm,
  fourpm,
  fivepm,
  ];

function updateTime() {
  var today = moment();
  $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));
  var now = moment().format("kk");

  for (let i = 0; i < scheduleArr.length; i++) {
      scheduleArr[i].removeClass("future past present");

      if (now > scheduleArr[i].data("hour")) {
          scheduleArr[i].addClass("past");
      } else if (now === scheduleArr[i].attr("data-hour")) {
          scheduleArr[i].addClass("present");
      } else {
          scheduleArr[i].addClass("future");
      }
  }
}

function renderLast() {
      for(let el of scheduleArr) {
          el.val(localStorage.getItem("time block " + el.data("hour")));
      }
}

renderLast();
updateTime();
setInterval(updateTime, 1000);

function handleFormSubmit(event) {
    event.preventDefault();
    var btnClick = $(event.currentTarget);
    var targetText = btnClick.siblings("textarea");
    var targetTimeBlock = targetText.data("hour");
    localStorage.setItem("time block " + targetTimeBlock, targetText.val());
}

saveBtn.on("click", handleFormSubmit);
