$(document).ready(function() {
  $("#formOne").submit(function(e) {
    e.preventDefault();
    const aspect = $("#aspect").val();

    $("#output").html(result);
});
});