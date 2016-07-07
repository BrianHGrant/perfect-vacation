// Business logic

var fb_callout = function() {
  FB.ui({
    method: 'feed',
    name: 'Your Perfect Vacation awaits in ' +  $("#" + resultID + " h3").text(),
    link: 'http://brianhgrant.github.io/perfect-vacation/',
    description: $("#" + resultID + " p").text(),
    caption: 'Perfect Vacation Finder',
    picture: 'http://brianhgrant.github.io/perfect-vacation/' + $("#" + resultID + " img").attr('src'),
    // display: 'dialog'
  }, function(response){
    if (response && response.post_id) {
      window.location.href = '';
    } else {
      alert('Post was not published.');
    }
  });
}


var findVacation = function(gender, preference, taste, alcohol, fun, name, age, pleasure) {
  var morals = 0;
  var adventure = 0;
  var culture = 0;
  var relaxation = 0;
  var nature = 0;
  if (preference ==="adventure") {
    adventure+=2;
    nature+=1;
  }
  else if (preference === "luxury") {
    culture+=1;
    relaxation+=2;
  }
  else if (preference === "history") {
    culture+=2;
    morals+=1;
  }
  else if (preference === "romance") {
    culture+=1;
    nature+=1;
  }
  if (taste === "sweet") {
    relaxation+=1;

  }
  else if (taste === "savory") {
    morals+=1;
    culture+=1;
  }
  else if (taste === "spicy") {
    culture+=1;
    adventure+=2;
  }
  if (alcohol === "whiskey") {
    adventure+=2;
    nature+=1;
  }
  else if (alcohol === "rum") {
    culture+=1;
    relaxation+=2;
  }
  else if (alcohol === "wine") {
    culture+=2;
    nature+=1;
  }
  else if (alcohol === "beer") {
    adventure+=1;
  }
  else if (alcohol === "tea") {
    morals+=2;
  }
  if (fun === "woods") {
    nature+=2;
    adventure+=1;
  }
  else if (fun === "music") {
    culture+=2;
  }
  else if (fun === "urban") {
    culture+=2;
    adventure+=1;
  }
  else if (fun === "beach") {
    relaxation+=2;
  }
  else if (fun === "skiSlopes") {
    adventure+=2;
    nature+=2;
  }
  if (age >= 50) {
    morals += 5
    relaxation +=10
  }
  if (pleasure === "drinking") {
    relaxation+=2;
    culture+=1;
  }
  else if (pleasure === "chocolate") {
    culture+=1;
  }
  else if (pleasure === "richFood") {
    culture+=2;
  }
  else if (pleasure === "gambling") {
    culture+=1;
    relaxation+=1;
  }
  else if (pleasure === "other") {
    relaxation+=2;
    nature+=1;
  }
  else if (pleasure === "nothing") {
    culture+=2;
    adventure+=2;
  }

  if ((fun === "music" && morals <=2)) {
    return "jamCruise";
  }
  else if ((adventure >= 6) && (nature >= 3) && (nature < 5) && (relaxation <= 2) && (morals <= 2)) {
    return "patagonia";
  }
  else if (alcohol === "rum" && fun === "beach") {
    return "bahamas";
  }
  else if ((culture >=7) && (adventure >=3)) {
    return "mexico";
  }
  else if ((morals >=6) && (relaxation >=10)) {
    return "cruise";
  }
  else if ((culture >= 4 && culture <= 8) && (morals <= 3) && (adventure < 3)) {
    return "france";
  }

  else if ((culture >= 3 && culture <= 7) && (morals < 3) && (pleasure === "chocolate" || fun === "skiSlopes")) {
    return "switzerland";
  }

  else if ((culture >= 4 && culture <= 7) && (nature >2) && (alcohol === "whiskey" || alcohol === "beer")) {
    return "ireland";
  }
  else if ((culture >= 4) && (relaxation >= 3 && relaxation<= 6) && (adventure >=4)) {
    return "macau";
  }
  else if (morals >= 3 && relaxation <= 6) {
    return "saltlakecity";
  }

  else {
    return "easterIslands";
  }
}
// User Interface

$(document).ready(function(event) {

  var p = 1;

  // GENDER
  $("#nextButton").on("click", function(event) {
    if (p<9) {
      $("#id" + p).addClass("hide");
      $("#position" + p).addClass("hide");
      $("#id" +(p+1)).removeClass("hide");
      $("#position" + (p+1)).removeClass("hide");
      p++;
      event.preventDefault();
    }
    if (p===8) {
      $("#formButton").addClass("hide");
      $("#submitButton").removeClass("hide");
    }
  });
  $("button.backButton").on("click", function(event) {
    if (p>1 && p<9) {
      if (p===8) {
        $("#formButton").removeClass("hide");
        $("#submitButton").addClass("hide");
      }
      $("#id" + p).addClass("hide");
      $("#position" + p).addClass("hide");
      $("#id" +(p-1)).removeClass("hide");
      $("#position" + (p-1)).removeClass("hide");
      p--;
      event.preventDefault();
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
      var resultID = findVacation(gender, preference, taste, alcohol, fun, name, age, pleasure);
      $("#" + resultID).removeClass("hide");
      $("button#resetButton").click(function(event) {
        window.location.assign("index.html");
      });
      $("#facebook-share").click(function(event) {
        FB.ui({
          method: 'feed',
          name: 'Your Perfect Vacation awaits in ' +  $("#" + resultID + " h3").text(),
          link: 'http://brianhgrant.github.io/perfect-vacation/',
          description: $("#" + resultID + " p").text(),
          caption: 'Perfect Vacation Finder',
          picture: 'http://brianhgrant.github.io/perfect-vacation/' + $("#" + resultID + " img").attr('src'),
          display: 'dialog'
        }, function(response){});
      });
    }
    event.preventDefault();
  });

});
