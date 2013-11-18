/* global document, window, io */

$(document).ready(initialize);


function initialize(){
  $(document).foundation();
  $('#next').on('click', move);
  $('#back').on('click', back);
  $('#up').on('click', up);
  $('#last').on('click', last);
  $('body').on('keyup', key);



}
  parallax.add($("#earth"));
  parallax.add($("#robot"));
  parallax.add($("#enemy"));
  parallax.speed = 2000;


parallax.earth.show();

function key(e){
  e.preventDefault();
  // p.bar.right();
  // alert(e.keyCode);
}

function move(){
  parallax.robot.right();
}

function back(){
  parallax.earth.left();

}

function up(){
  parallax.enemy.top();
    parallax.enemy.onload = function(){
    alert('Wrong Choice...Your computer will now explode. Goodbye. click picture to abort.');
  };
}

function last(){
  parallax.last.bottom();
}



