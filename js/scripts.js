$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault();
    console.log("submitted");
    const aspect = parseInt($("#aspect").val());
    const q2 = parseInt($("#q2").val());
    const q3 = parseInt($("#q3").val());
    const q4 = parseInt($("#q4").val());
    const q5 = parseInt($("#q5").val());
    let result;
    let resultScore = aspect + q2 + q3 + q4 + q5;

    console.log("aspect: ", aspect, typeof aspect);

    if (resultScore = 5) {
      result = "You should learn Javascript.";
    } else if (resultScore >= 6 || resultScore <= 8) {
      result = "You should learn Python.";
    } else if (resultScore >= 9 || resultScore <= 10) {
      result = "You should learn C#.";
    } else if (resultScore >= 11 || resultScore <= 20) {
      result = "You should learn Ruby.";
    }    

    $("#output").html(result);
  });
});