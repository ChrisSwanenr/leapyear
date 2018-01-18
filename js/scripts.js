$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var inputYear = parseInt($("#year").val());
    if (isLeap(inputYear)) {
      //print to page "That's a leap year"
      $("#result").text("That is a leap year");
    } else {
      //not leap year
      $("#result").text("That is not a leap year");
    }
  });
});

var isLeap = function(year) {
  if (year%100===0 && !(year%400===0)) {
    return false;
  } else if (year%4===0) {
    return true;
  } else {
    return false;
  }
}
