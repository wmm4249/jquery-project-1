$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault();
    const aspect = $("#aspect").val();
    const q2 = $("#q2").val();
    const q3 = $("#q3").val();
    const q4 = $("#q4").val();
    const q5 = $("#q5").val();

    $("#output").html(result);
});
});