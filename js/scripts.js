function handleSubmit(event) {
  event.preventDefault();
  const form = document.getElementById("formOne");
  const selection = document.getElementById("survey").value;
  const aspect = parseInt(document.getElementById("aspect").value);
  const q2 = parseInt(document.getElementById("q2").value);
  const q3 = parseInt(document.getElementById("q3").value);
  const q4 = parseInt(document.getElementById("q4").value);
  const q5 = parseInt(document.getElementById("q5").value);
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

  document.getElementById("survey").style.display = "none";
  document.getElementById("resultDiv").style.display = "block";

  document.getElementById("output").innerHTML = result;
}
  
window.addEventListener("load", function() {
  document.getElementById("formOne").addEventListener("submit", handleSubmit);
  document.getElementById("reload-page").addEventListener("click", reloadPage);
});

function reloadPage() { 

  document.getElementById("survey").style.display = "";

  document.getElementById("resultDiv").style.display = "none";
};
// };

// $(document).ready(function() {
//   $("#formOne").submit(function(e) {
//     e.preventDefault();
//     const aspect = parseInt($("#aspect").val());
//     const q2 = parseInt($("#q2").val());
//     const q3 = parseInt($("#q3").val());
//     const q4 = parseInt($("#q4").val());
//     const q5 = parseInt($("#q5").val());
//     let result;
//     let resultScore = aspect + q2 + q3 + q4 + q5;

//     if (resultScore == 5 || resultScore <= 8) {
//       result = "You should learn Javascript.";
//     } else if (resultScore >= 9 && resultScore <= 12) {
//       result = "You should learn Python.";
//     } else if (resultScore >= 13 && resultScore <= 16) {
//       result = "You should learn C#.";
//     } else if (resultScore >= 17 && resultScore <= 20) {
//       result = "You should learn Ruby.";
//     }

//     $(".result").show();
//     $("#survey").hide();

//     $("#output").html(result);
//   });
//   $("#reload-page").click(function() {

//   $("#survey").show();

//   $(".result").hide();
//   });
// });