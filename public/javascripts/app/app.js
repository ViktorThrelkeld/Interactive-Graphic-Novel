/* global document, window, io */
var next;

$(document).ready(initialize);


function initialize(){
  $(document).foundation();
  $('#bad').on('click', up);
  $('#last').on('click', last);
  $('body').on('keyup', key);

//scrolling background
  parallax.background = $("body");
  parallax.scaling = 0.4; //background moves 40% with the pages

//parallax properties----------------------------------------------------------
  parallax.add($("#earth"));
  parallax.add($("#robot"));
  parallax.add($("#choice1"));
  parallax.add($("#wrong"));
  parallax.add($("#transport"));
  parallax.add($("#plans"));
  parallax.add($("#choice2"));
  parallax.add($("#wrong2"));
  parallax.add($("#transport2"));
  parallax.add($("#choice3"));
  parallax.add($("#wrong3"));
  parallax.add($("#end"));

//set background scroll speed
  parallax.speed = 2000;

//set arrow keys
  function key(e){
    if(e.keyCode == 39){
      rightKey();
    }else if(e.keyCode == 37) {
      leftKey();

    // alert(e.keyCode);
      e.preventDefault();
    }
  }

  parallax.preload = function(){
    rightKey = "";
    leftKey = "";
  };

//set navigation-------------------------------------------------------------
   parallax.earth.onload=function(){
    fromTop("robot");
  };

   parallax.robot.onload=function(){
    fromLeft("earth");
    fromRight("choice1");

  };

  parallax.choice1.onload = function(){
    fromLeft("robot");
    fromRight("transport");

  };

  parallax.transport.onload = function(){
    fromLeft("choice1");
    fromRight("plans");
  };

  parallax.plans.onload = function(){
    fromLeft("transport");
    fromRight("choice2");
  };

  parallax.choice2.onload = function(){
    fromLeft("plans");
    fromRight("transport2");
  };

  parallax.transport2.onload = function(){
    fromLeft("choice2");
    fromRight("choice3");
  };

  parallax.choice3.onload = function(){
    fromLeft("transport2");
    fromRight("end");
  };

  parallax.end.onload = function(){
    fromLeft("choice3");
  };


  //set----------------------------------------------------------------------
  function fromRight(page){
    rightKey = function(){
      parallax[page].right();
    };
  }

  function fromLeft(page){
    leftKey = function(){
      parallax[page].left();
    };
  }

  function fromTop(page){
    rightKey = function(){
      parallax[page].top();
    };
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