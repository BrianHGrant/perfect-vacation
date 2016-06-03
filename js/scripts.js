// Business logic

// var validateInput = function(inputToValidate) {
//   if (inputToValidate === null) {
//     return false;
//   }
//   else {
//     return true;
//   }
// }

var findVacation = function(gender, preference, taste, alcohol, fun, name, age, pleasure) {
  if (alcohol === "tea") {
    $("#saltlakecity").removeClass("hide");
  }
  else if (alcohol === "whiskey" && preference === "history") {
      $("#ireland").removeClass("hide");
  }
  else if (alcohol === "whiskey") {
    $("#tennessee").removeClass("hide");
  }
  else if (alcohol === "wine" || preference === "romance") {
    $("#france").removeClass("hide");
  }
  else {
    if (preference === "adventure") {
      $("#patagonia").removeClass("hide");
    }
    else {
      if (pleasure === "chocolate" || fun === "skiSlopes") {
        $("#switzerland").removeClass("hide");
      }
      else if (fun === "beach") {
        $("#bahamas").removeClass("hide");
      }
      else if (pleasure === "gambling" || fun === "urban") {
        $("#macau").removeClass("hide");
      }
      else {
        $("#easterIslands").removeClass("hide");
      }
    }
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

    if (!gender || !preference || !taste || !alcohol || !fun || !name || !age || !pleasure) {
      $("button#submitForm").removeClass("btn-info").addClass("btn-danger");
      $("#errorMsg").removeClass("hide");
    }
    else {
      $("#survey").addClass("hide");
      $("#result").removeClass("hide");
      findVacation(gender, preference, taste, alcohol, fun, name, age, pleasure);
    }

    event.preventDefault();
  });

});
