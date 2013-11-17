/* global document, window, io */

$(document).ready(initialize);


function initialize(){
  $(document).foundation();
  $('#next').on('click', move);
  $('#back').on('click', back);

}
    parallax.add($("#earth"));

  parallax.add($("#robot"));
parallax.speed = 2000;

// debugger;

          // .add($("#earth"));
  // parallax.bar.hide(); //Bar is being a tad shy

parallax.earth.show();
  // parallax.add($("#page1"));

  function move(){
    // alert('hey!');

  // parallax.earth.hide(); //Bar is being a tad shy
// parallax.speed = 2000;
    parallax.robot.right(); //Bar slides in from the left
    // $("#page1").hide();

  }

function back(){
  // alert('yo');
  // parallax.add($("robot"));
  // parallax.robot.hide(); //Bar is being a tad shy

  parallax.earth.left();
}
//         // parallax.index.show();

