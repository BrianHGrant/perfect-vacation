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


// User Interface

$(document).ready(function(event) {

  // GENDER
  $("#firstButton").click(function(event) {
      gender = $("#genderOption").val();
      $("#id0").addClass("hide");
      $("#id1").removeClass("hide");
      $("#firstPosition").addClass("hide");
      $("#secondPosition").removeClass("hide");
      event.preventDefault();
  });

  // PREFERENCE
  $("#secondButton").click(function(event) {
    preference = $("input:radio[name=preferRadio]:checked").val();
    if (!preference) {
      $("#secondButton").removeClass("btn-success").addClass("btn-danger");
    }
    else {
      $("#id1").addClass("hide");
      $("#id2").removeClass("hide");
      $("#secondPosition").addClass("hide");
      $("#thirdPosition").removeClass("hide");
    }
    event.preventDefault();
  });

  // TASTE
  $("#thirdButton").click(function(event) {
    taste = $("input:radio[name=tasteRadio]:checked").val();
    if (!taste) {
      $("#thirdButton").removeClass("btn-success").addClass("btn-danger");
    }
    else {
      $("#id2").addClass("hide");
      $("#id3").removeClass("hide");
      $("#thirdPosition").addClass("hide");
      $("#fourthPosition").removeClass("hide");
    }
    event.preventDefault();
  });

  // ALCOHOL
  $("#fourthButton").click(function(event) {
    alcohol = $("input:radio[name=alcoholRadio]:checked").val();
    if (!alcohol) {
      $("#fourthButton").removeClass("btn-success").addClass("btn-danger");
    }
    else {
      $("#id3").addClass("hide");
      $("#id4").removeClass("hide");
      $("#fourthPosition").addClass("hide");
      $("#fifthPosition").removeClass("hide");
    }
    event.preventDefault();
  });

  //FUN
  $("#fifthButton").click(function(event) {
    fun = $("input:radio[name=funRadio]:checked").val();
    if (!fun) {
      $("#fifthButton").removeClass("btn-success").addClass("btn-danger");
    }
    else {
      $("#id4").addClass("hide");
      $("#id5").removeClass("hide");
      $("#fifthPosition").addClass("hide");
      $("#sixthPosition").removeClass("hide");
    }
    event.preventDefault();
  });

  // NAME
  $("#sixthButton").click(function(event) {
    name = $("#nameField").val();
    if (!name) {
      $("#sixthButton").removeClass("btn-success").addClass("btn-danger");
    }
    else {
      $("#id5").addClass("hide");
      $("#id6").removeClass("hide");
      $("#sixthPosition").addClass("hide");
      $("#seventhPosition").removeClass("hide");
    }
    event.preventDefault();
  });

  // AGE
  $("#seventhButton").click(function(event) {
    age = parseInt($("input#ageField").val());
    if (!age) {
      $("#seventhButton").removeClass("btn-success").addClass("btn-danger");
    }
    else if (age>=0){
      $("#id6").addClass("hide");
      $("#id7").removeClass("hide");
      $("#seventhPosition").addClass("hide");
      $("#eighthPosition").removeClass("hide");
    }
    event.preventDefault();
  });

  // PLEASURE
  $("button#submitForm").click(function(event) {
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
