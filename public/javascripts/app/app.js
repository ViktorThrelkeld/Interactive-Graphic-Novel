/* global document, window, io */
var next;
var timer;

$(document).ready(initialize);


function initialize(){
  $(document).foundation();
  $('#speechbad').on('click', wrong1);
  $('#speechgood').on('click', transport);
  $('#boom').on('click', last);
  $('#pound').on('click', last);
  $('#sos').on('click', last);
  $('body').on('keyup', key);
  $('#thoughtbad').on('click', wrong2);
  $('#thoughtgood').on('click', transport2);
  $('#computegood').on('click', end);
  $('#computebad').on('click', wrong3);
  $('#cat').on('click', meow);
  $('#shipexplodes').on('click', bomb);
  $('#beam').on('click', sweep);
  $('#shoot').on('click', raygun);


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
  parallax.add($("#credits"));

//sets up foregroundground scroll speed
  parallax.speed = 2000;

//set uparrow key controls
  function key(e){
    if(e.keyCode == 39){
      rightKey();
    }else if(e.keyCode == 37) {
      leftKey();
      e.preventDefault();
    }
  }

  parallax.preload = function(){
    rightKey = "";
    leftKey = "";
  };

//set navigation-------------------------------------------------------------
   parallax.earth.onload = function(){
    fromTop("robot");

    document.getElementById('distress').play();
  };

   parallax.robot.onload = function(){
    fromLeft("earth");
    fromRight("choice1");
  };

  parallax.choice1.onload = function(){
    fromLeft("robot");
  };

  parallax.transport.onload = function(){
    fromLeft("choice1");
    fromBottom("plans");
    timer = setInterval(function(){
      $('#beam').toggleClass('beamed');
    }, 200);// dictates the speed of transport effect
  };

  parallax.plans.onload = function(){
    fromLeft("transport");
    fromRight("choice2");
    clearInterval(timer);
  };

  parallax.choice2.onload = function(){
    fromLeft("plans");
  };

  parallax.transport2.onload = function(){
    fromLeft("choice2");
    fromTop("choice3");
    timer = setInterval(function(){
      $('#childanddog').toggleClass('beamed2');
    }, 200);// dictates the speed of transport effect
  };

  parallax.choice3.onload = function(){
    fromLeft("transport2");
    clearInterval(timer);
  };

  parallax.end.onload = function(){
    fromLeft("choice3");
    fromBottom("credits");
  };

   parallax.credits.onload = function(){
    fromLeft("end");
  };


//sets up page flow direction----------------------------------------------------------------------
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

  function fromBottom(page){
    rightKey = function(){
      parallax[page].bottom();
    };
  }



  parallax.earth.show();

}//closes initialize

//sound effects-------------------------------------------------------------------------

function meow(){
  document.getElementById('meow').play();
}

function bomb(){
  document.getElementById('bomb').play();
}

function sweep(){
  document.getElementById('sweep').play();
}

function raygun(){
  document.getElementById('raygun').play();
}

// click functions---------------------------------------------------------

function transport(){
  parallax.transport.right();
}

function transport2(){
  parallax.transport2.right();
}

function end(){
  parallax.end.bottom();
}

function wrong1(){
  parallax.wrong.bottom();
    parallax.wrong.onload = function(){
    alert('Wrong Choice...Your computer will now explode. Goodbye. Click picture to abort.');
  };
}

function wrong2(){
  parallax.wrong2.bottom();
    parallax.wrong2.onload = function(){
      alert('Wrong Choice..Your are in the pound and the world will now explode. Goodbye. Click picture to abort.');
  };
}

function wrong3(){
  parallax.wrong3.top();
  parallax.wrong3.onload = function(){
    alert('S.O.S.?? You are S.O.L.  Click picture to abort.');
    document.getElementById('beep').play();
  };
}

function last(){
  parallax.last.bottom();
}