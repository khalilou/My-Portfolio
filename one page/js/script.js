$(document).ready(function (){
    actionResize();
    $(window).resize(actionResize);  
    $(".backgr").fadeIn(5000);
   
    $("#about").hide();
    $("#services").hide();
    $("#portfolio").hide();
    $("#blog").hide();
    $("#contact").hide();
    
     $(".about").click(function(e){
        e.preventDefault();
        /*$("#about").show();*/
         $("#about").fadeIn(500);
    $("#services").hide();
    $("#portfolio").hide();
    $("#blog").hide();
    $("#contact").hide();
   
     });
    $(".services").click(function(e){
    e.preventDefault();
    $("#about").hide();
    $("#services").fadeIn(500);
    $("#portfolio").hide();
    $("#blog").hide();
    $("#contact").hide();
     });
    $(".portfolio").click(function(e){
    e.preventDefault();
    $("#about").hide();
    $("#services").hide();
    $("#portfolio").fadeIn(500);
    $("#blog").hide();
    $("#contact").hide();
     });
    $(".blog").click(function(e){
    e.preventDefault();
    $("#about").hide();
    $("#services").hide();
    $("#portfolio").hide();
    $("#blog").fadeIn(500);
    $("#contact").hide();
     });
         $(".contact").click(function(e){ 
            e.preventDefault();
        $("#about").hide();
    $("#services").hide();
    $("#portfolio").hide();
    $("#blog").hide();
   $("#contact").fadeIn(500);
     });
     
    $(window).scroll(function(){
        var scroll= $(window).scrollTop();
        console.log(scroll);
        if (scroll > $(window).height()) {
            $("nav.menu-principal").addClass("navbar-fixed-top");
                
            }
            else {
                $("nav.menu-principal").removeClass("navbar-fixed-top");
            }

    });
   $(".img-p-1").mouseover(function(){
        $(".par-1> p").removeClass("hidden");
            
        });

    $(".img-p-1").mouseout(function(){
        $(".par-1> p").addClass("hidden");
            
        });
    $(".img-p-2").mouseover(function(){
        $(".par-2> p").removeClass("hidden");
            
        });

    $(".img-p-2").mouseout(function(){
        $(".par-2> p").addClass("hidden");
            
        });
    $(".img-p-3").mouseover(function(){
        $(".par-3> p").removeClass("hidden");
            
        });

    $(".img-p-3").mouseout(function(){
        $(".par-3> p").addClass("hidden");
            
        });
    $(".img-p-4").mouseover(function(){
        $(".par-4> p").removeClass("hidden");
            
        });

    $(".img-p-4").mouseout(function(){
        $(".par-4> p").addClass("hidden");
            
        });
    $(".img-p-5").mouseover(function(){
        $(".par-5> p").removeClass("hidden");
            
        });

    $(".img-p-5").mouseout(function(){
        $(".par-5> p").addClass("hidden");
            
        });
    $(".img-p-6").mouseover(function(){
        $(".par-6> p").removeClass("hidden");
            
        });

    $(".img-p-6").mouseout(function(){
        $(".par-6> p").addClass("hidden");
            
        });


    
   
   
    
});



var actionResize = function() {
    var _h = $(window).height(),
        _w = $(window).width();
    
    $(".fixed-height").css({
        height: _h
    });

    
   /* Ou bien, autres méthodes :
    1-  $("#home").css("height", _h);
    2-  $("#home").height(_h);
    */
};



