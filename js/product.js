$(document).ready(function(){
         $("#face1").click(function(){
             $('#product1').css({
                 "-webkit-transform":" rotateY(180deg)",
                 "-moz-transform":" rotateY(180deg)",
                 "-o-transform":" rotateY(180deg)",
                 "transform":" rotateY(180deg)",
               
             });
         });
         $("#back1").click(function(){
             $("#product1").css({
                 "-webkit-transform":" rotateY(0deg)",
                 "-moz-transform":" rotateY(0deg)",
                 "-o-transform":" rotateY(0deg)",
                 "transform":" rotateY(0deg)",
             });
         });
    
     });