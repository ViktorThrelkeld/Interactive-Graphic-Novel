/* global document, window, io */
var next;

$(document).ready(initialize);


function initialize(){
    $(document).foundation();
    // $('#next').on('click', move);
    $('#back').on('click', back);
    $('#bad').on('click', up);
    $('#last').on('click', last);
    $('body').on('keyup', key);

//scrolling background
    parallax.background = $("body");
    parallax.scaling = 0.4; //background moves 40% with the pages

    parallax.add($("#earth"));
    parallax.add($("#robot"));
    parallax.add($("#wrong"));
    parallax.add($("#choice1"));

    parallax.speed = 2000;

    function key(e){
      if(e.keyCode == 39){
        rightKey();
      }else if(e.keyCode == 37) {
                        leftKey();
    // p.bar.right();
    // alert(e.keyCode);
        // e.preventDefault();
    }
  }
  parallax.preload = function(){
    rightKey = "";
    leftKey = "";

                // $(".control").hide();
        };

//set navigation
   parallax.earth.onload=function(){
    setTop("robot");
   //              setTop("sandbox", "SandBox");
   //              setLeft("me","The Guy");
  };

   parallax.robot.onload=function(){
    setRight("choice1");
    setLeft("earth");
  };

  // parallax.wrong.onload=function(){

  // };
  parallax.choice1.onload=function(){
    // setRight("choice1");
    setLeft("robot");
  };

  //set
  function setRight(page){
    rightKey = function(){
      parallax[page].right();
                  };
  }

  function setLeft(page){
    leftKey = function(){
      parallax[page].left();
                  };
  }

  function setTop(page){
    rightKey = function(){
      parallax[page].top();
    };
  }

  // function move(){
  //   parallax.robot.right();
  // }

  function back(){
    parallax.earth.left();

  }

  function up(){
    parallax.wrong.bottom();
      parallax.wrong.onload = function(){
      alert('Wrong Choice...Your computer will now explode. Goodbye. click picture to abort.');
    };
  }

  function last(){
    parallax.last.bottom();
  }

  parallax.earth.show();


}//end of initialize

//-------------------------------------------------------------------------