// $(document).ready(function(){
//     $("button#green").click(function(){
//         $("body").addClass("green-background");
//     });

//     $("button#yellow").click(function(){
//         $("body").addClass("yellow-background");
//     });
//     $("button#red").click(function(){
//         $("body").addClass("red-background");
//     // });
//     // $("button#green").click(function() {
//         // $("body").css("background-color", "green");
//       });
// });
$(document).ready(function() {
    $("button#green").click(function() {
      $("body").removeClass();
      $("body").addClass("green-background");
      $("#green").addClass("green-background");
    });

    $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background");
      $("#yellow").addClass("yellow-background");
    });

    $("button#red").click(function() {
      $("body").removeClass();
      $("body").addClass("red-background");
      $("#red").addClass("red-background");
    });
  });