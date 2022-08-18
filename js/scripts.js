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
    $(".container").click(function() {
      $("#survey-showing").show();
    });

    if (resultScore == 5 || resultScore <= 8) {
      result = "You chose mostly A's so you should learn Javascript.";
    } else if (resultScore >= 9 && resultScore <= 12) {
      result = "You chose mostly B's, so you should learn Python.";
    } else if (resultScore >= 13 && resultScore <= 16) {
      result = "You chose mostly C's, so you should learn C#.";
    } else if (resultScore >= 17 && resultScore <= 20) {
      result = "You chose mostly D's, so you should learn Ruby.";
    }    

    $("#output").html(result);
  });
});