var x = document.getElementById("faxe");
x.playbackRate = 1.1;
var y = document.getElementById("faxe1");
function playVid() { 
    x.play(); 
  } 
  
  function pauseVid() { 
    x.pause(); 
  } 



  document.getElementById('faxe').addEventListener('ended', function() {
    document.getElementById('faxe1').play();
  });