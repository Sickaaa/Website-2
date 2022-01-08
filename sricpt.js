function myFunction() {
    var leftFrame = document.getElementById("list-container");
    var header = document.getElementById("header");
    var bar_icon = document.getElementById("bar-icon");
    var checkBox = document.getElementById("check");
    
    if (checkBox.checked == true){
      bar_icon.style.color = "var(--main-color)";
      bar_icon.style.background = "transparent";
      bar_icon.style.transition = ".2s";
      
      leftFrame.style.left = "0";
      leftFrame.style.transition = "all .5s .3s";
      
      header.style.background =  "rgb(164, 149, 149)";
      header.style.transition = "all .3s";
    } else {
      bar_icon.style.color = "#D0CBCB";
      bar_icon.style.background = "var(--main-color)";
      bar_icon.style.transition = ".2s";
      
      leftFrame.style.left = "-100%";
      leftFrame.style.transition = "all .5s";
      
      header.style.background =  "transparent";
      header.style.transition = "all .2s .6s";
    }
  }
  function nav_click(){
    var checkBox = document.getElementById("check");
    var leftFrame = document.getElementById("list-container");
  }
    if(screen.width < 600){
      leftFrame.style.left = "-100%";
      checkBox.checked = false;
      myFunction();
    }
    