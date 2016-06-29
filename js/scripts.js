// Business logic


var findVacation = function(gender, preference, taste, alcohol, fun, name, age, pleasure) {
  if (alcohol === "tea") {
    $("#saltlakecity").removeClass("hide");
  }
  else {
    if (fun === "music" && (pleasure === "nothing" || alcohol === "beer")) {
      $("#jamCruise").removeClass("hide");
    }
    else {
      if (alcohol === "whiskey") {
        $("#ireland").removeClass("hide");
      }
      else if (alcohol === "wine") {
        $("#france").removeClass("hide");
      }
      else {
        if (age >= 50) {
          $('#cruise').removeClass("hide");
        }
        else {
          if (preference === "adventure" && fun === "woods") {
            $("#patagonia").removeClass("hide");
          }
          else if (preference === "adventure" && taste === "spicy") {
            $('#mexico').removeClass("hide");
          }
          else {
            if (pleasure === "chocolate" || fun === "skiSlopes") {
              $("#switzerland").removeClass("hide");
            }
            else if (alcohol === "rum" || fun === "beach") {
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
    }
  }
}


// User Interface

$(document).ready(function(event) {
  var p = 0;
  // GENDER
  $("#nextButton").on("click", function(event) {
    if (p<8) {
      p++;
      $("#id" + p).addClass("hide");
      $("#id" +(p+1)).removeClass("hide");
      $("#position" + p).addClass("hide");
      $("#position" + (p+1)).removeClass("hide");
      event.preventDefault();
    }
    if (p===7) {
      $("#formButton").addClass("hide");
      $("#submitButton").removeClass("hide");
    }
  });
  $("#submitForm").click(function(event) {
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
      $("#nameDisplay").append(name);
      $("#progressSpace").addClass("hide");
      $("#survey").addClass("hide");
      $("#result").removeClass("hide");
      findVacation(gender, preference, taste, alcohol, fun, name, age, pleasure);
      $("button#resetButton").click(function(event) {
        window.location.assign("index.html");
      });
    }

    event.preventDefault();
  });

});
