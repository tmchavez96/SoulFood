//put elements in place with proper size and color
function prepend(){
  console.log("in prepend");
  var elmsA = document.getElementsByClassName("animateBar");
  var elmsC = document.getElementsByClassName("animateBar2");
  var elmsD = document.getElementsByClassName("animateBar3");
  var elmsE = document.getElementsByClassName("animateBar4");
  var elms = [
    elmsA,
    elmsC,
    elmsD,
    elmsE
  ];
  var cont = document.getElementById("bar-container");
  var maxw = cont.offsetWidth;
  var maxh = cont.offsetHeight;
  //console.log("max width = " + maxw + " max height = " + maxh);
  var elmw = maxw / 6;
  var elmh = maxh / 16;
  //size every element by the container size
  for(var i = 0; i < elms.length; i++){
    var curArr = elms[i];
    for(var j = 0; j < curArr.length; j++){
      var cur = curArr[j];
      cur.style.width = elmw + "px";
      cur.style.height = elmh + "px";
    }
  }
  var posX = elmw/4;
  var xspacing = Math.floor(maxw / elms.length);
  for(var i = 0; i < elms.length; i++){
    var curArr = elms[i];
    var posY = 10;
    var yspacing = Math.floor(maxh / curArr.length);
    //console.log("x sanity check")
    for(var j = 0; j < curArr.length; j++){
      //console.log("iteration, posY = " + posY + " posX = " + posX);
      var cur = curArr[j];
      var color = "blue";
      color = getColor(j,curArr.length);
      cur.style.background = color;
      cur.style.bottom = posY + "px";
      cur.style.left = posX + "px";
      posY += yspacing;
    }
    posX += xspacing;
  }
  var blackBars = document.getElementsByClassName("black-bar");
  var arrI = 0;
  //console.log("before loop - " + blackBars.length);
  for(var i = 0; i < blackBars.length; i++){
    //console.log("arrI - " + arrI);
    var temp = elms[arrI][0];
    var pos = temp.style.left;
    pos = cleanToInt(pos);
    var baseWidth = temp.style.width;
    baseWidth = cleanToInt(baseWidth);
    var offSet = baseWidth / 15;
    //console.log("pos is " + pos);
    var cur = blackBars[i];
    var decide = i % 4;
    if(decide == 1){
      var np = pos + offSet;
      np = np - 5;
      cur.style.left = np + "px";
      var os = offSet/2;
      cur.style.width = os + "px";
    }else if(decide == 2){
      var np = pos + (3*offSet);
      np = np - 10;
      cur.style.left = np + "px";
      cur.style.width = offSet + "px";
    }else if(decide == 3){
      console.log("decide was 3")
      var np = baseWidth - (3*offSet);
      np = Math.floor(np);
      np = pos + np;
      console.log("placing at - " + np);
      cur.style.left = np + "px";
      cur.style.width = offSet + "px";
    }else{
      var np = baseWidth - offSet;
      np = pos + np;
      cur.style.left = np + "px";
      var os = offSet/2;
      cur.style.width = os + "px";
      if(i != 0){
        arrI += 1;
      }
    }
  }
}

//animate
function boogie(){
  var elmsA = document.getElementsByClassName("animateBar");
  var elmsC = document.getElementsByClassName("animateBar2");
  var elmsD = document.getElementsByClassName("animateBar3");
  var elmsE = document.getElementsByClassName("animateBar4");
  var elms = [
    elmsA,
    elmsC,
    elmsD,
    elmsE
  ];
  for(var i = 0; i < elms.length; i++){
    var col = elms[i];
    var rng = getRandomInt(col.length);
    for(var j = 0; j < col.length; j++){
      var cur = col[j];
      var color = "black";
      if(j > rng){
        //console.log("paint it black")
        cur.style.background = color;
      }else{
        color = getColor(j,rng);
        cur.style.background = color;
      }
    }

  }
}

function cleanToInt(stylePos){
  //console.log("dirty - " + stylePos);
  var rs = "";
  var len = stylePos.length;
  rs = stylePos.substring(0,len-2);
  //console.log("cleaned to - " + rs);
  var rv = Math.floor(rs);
  //console.log("int - " + rv);
  return rv;
}

//decide the color of the element to match the pattern
function getColor(index, max){
  var submax = Math.floor(max/2);
  var retcol = "";
  //console.log("index - " + index + "submax - "+ submax + " max - " + max)
  if(index <= submax){
    retcol = "green";
  }else if(index < max-1){
    retcol = "yellow";
  }else{
    retcol = "red";
  }
  return retcol;
}

//get a random int
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
