/* global document, window, io */

$(document).ready(initialize);


function initialize(){
  $(document).foundation();
  $('#next').on('click', move);
  $('#back').on('click', back);

}
// debugger;

          // .add($("#page1"));
  // parallax.bar.hide(); //Bar is being a tad shy
    parallax.add($("#robot"));
            // .add($("#earth"));
// parallax.earth.show();
  // parallax.add($("#page1"));

  function move(){
    // alert('hey!');
  parallax.add($("#earth"));

  parallax.earth.hide(); //Bar is being a tad shy

    parallax.robot.right(); //Bar slides in from the left
    // $("#page1").hide();

  }

function back(){
  // alert('yo');
  // parallax.add($("robot"));
  parallax.robot.hide(); //Bar is being a tad shy

  parallax.earth.left();
}
//         // parallax.index.show();

