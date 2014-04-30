// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator);
});


    var imageList = [
        "img/2-sadie.png",
        "img/4-starbuck.png",
        "img/8-milo.png",        
        "img/16-beanie.png",
        "img/32-pepper.png",        
        "img/64-dumpling.png",        
        "img/128-fish.png",        
        "img/256-tyson.png",  
        "img/512-hoover.png",              
        "img/1024-wizard.png",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }



