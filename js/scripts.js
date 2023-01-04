$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault();
    const aspect = parseInt($("#aspect").val());
    const q2 = parseInt($("#q2").val());
    const q3 = parseInt($("#q3").val());
    const q4 = parseInt($("#q4").val());
    const q5 = parseInt($("#q5").val());
    let result;
    let resultScore = aspect + q2 + q3 + q4 + q5;

    if (resultScore == 5 || resultScore <= 8) {
      result = "You should learn Javascript.";
    } else if (resultScore >= 9 && resultScore <= 12) {
      result = "You should learn Python.";
    } else if (resultScore >= 13 && resultScore <= 16) {
      result = "You should learn C#.";
    } else if (resultScore >= 17 && resultScore <= 20) {
      result = "You should learn Ruby.";
    }    

    $(".result").show();
    $("#survey").hide();

    $("#output").html(result);
  });
  $("#reload-page").click(function() {

  $("#survey").show();

  $(".result").hide();
  });
});



//     if (resultScore == 5 || resultScore <= 8) {
//       result = "You should learn Javascript.";
//     } else if (resultScore >= 9 && resultScore <= 12) {
//       result = "You should learn Python.";
//     } else if (resultScore >= 13 && resultScore <= 16) {
//       result = "You should learn C#.";
//     } else if (resultScore >= 17 && resultScore <= 20) {
//       result = "You should learn Ruby.";
//     }    

//     document.getElementByClassName("result").style.display = "";
//     document.getElementById("survey").style.display = "none";

//     document.getElementById("output").innerHTML = result;
//   });
//   document.getElementById("reload-page").click(function() {

//   document.getElementById("survey").style.display = "";

//   document.getElementByClassName("result").style.display = "none";
//   });
// });