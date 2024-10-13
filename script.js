$(document).ready(function(){

    var controller = new ScrollMagic.Controller(); // создаем новою сцену с тригером на елемент logoshow
    var scene = new ScrollMagic.Scene({
    triggerElement: '#logoshow  ' ,
    triggerHook:0.7
    
    } ) 
    .setClassToggle('#logoshow' , 'final')  //Меняем id с logoshow на  клас final но в нашем случае добовляем клас
    .addTo(controller);

    
    var changemain = new ScrollMagic.Controller();   // создаём новою сцену changemain где тригер будет елемент #changeformain 
    var scene = new ScrollMagic.Scene({
    triggerElement: '#change' ,
    triggerHook:0
    
    } )
    .setClassToggle('#change' , 'main')  //Меняем id с logoshow на  клас final но в нашем случае добовляем клас
    .addTo(changemain); 
   

var animtext = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({

triggerElement: '#change' ,
triggerHook:0


})

.setClassToggle('#buttonsjs' , 'buttons')
.addTo(animtext);

})

