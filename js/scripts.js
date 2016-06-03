// Business logic

var findVacation = function(gender, preference, taste, alcohol, fun, name, age, pleasure) {
  $("#survey").addClass("hide");
  $("#result").removeClass("hide");
  if (alcohol === "tea") {
    $("#saltlakecity").removeClass("hide");
  }
}




// User Interface

$(document).ready(function(event) {
  $("button#submitForm").click(function(event) {
    var gender = $("#genderOption").val();
    var preference = $("input:radio[name=preferRadio]:checked").val();
    var taste = $("input:radio[name=tasteRadio]:checked").val();
    var alcohol = $("input:radio[name=alcoholRadio]:checked").val();
    var fun = $("input:radio[name=funRadio]:checked").val();
    var name = $("#nameField").val();
    var age = parseInt($("input#ageField").val());
    var pleasure = $("input:radio[name=pleasureRadio]:checked").val();

    findVacation(gender, preference, taste, alcohol, fun, name, age, pleasure);
    event.preventDefault();
  });

});
