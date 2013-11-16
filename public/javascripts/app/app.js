/* global document, window, io */

$(document).ready(initialize);

var socket;

function initialize(){
  $(document).foundation();
  $('#next').on('click', move);
}

parallax.add($("#bar"));

function move(){
  // alert('hey!');


  parallax.bar.left(); //Bar slides in from the left

}

