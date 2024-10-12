$(document).ready(function(){

    var controller = new ScrollMagic.Controller(); // создаем новою сцену с тригером на елемент logoshow
    var scene = new ScrollMagic.Scene({
    triggerElement: '#logoshow  '
    
    
    } ) 
    .setClassToggle('#logoshow' , 'final')  //Меняем id с logoshow на  клас final но в нашем случае добовляем клас
    .addTo(controller);

    
    var changemain = new ScrollMagic.Controller();   // создаём новою сцену changemain где тригер будет елемент #changeformain 
    var scene = new ScrollMagic.Scene({
    triggerElement: '#change'
    
    
    } )
    .setClassToggle('#change' , 'main')  //Меняем id с logoshow на  клас final но в нашем случае добовляем клас
    .addTo(changemain); 

})

