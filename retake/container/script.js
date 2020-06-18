var i = 0;

$(function(){
    $('#color1').val("#000000")  
    $('#color2').val("#ffffff") 
    $('#spawnContainer').bind('click', function(){
        $('<div class="master-box" style="max-width:'+$('#Width').val()+'px;min-width: '+$('#Width').val()/2+'px; max-height: 400px;min-height: 100px; margin: auto;"><div class="container" style="outline: 3px solid '+$('#color1').val()+'; height: '+$('#Height').val()+'px; margin: 0 auto; padding: 0 auto"></div></div>').prependTo('.parent-box');
    });

    $('#spawnBox').bind('click', function(){
        i+=1
        $('<div class="movable", id="'+i+'", style="position: absolute; left:20%; top:5%; border: 0.5px solid #000; height: '+$('#boxHeight').val()+'px; width:'+$('#boxWidth').val()+'px; padding: 0.5em; background: '+$('#color2').val()+' none repeat scroll 0% 0%;"></div>').prependTo('#movable');
        $( ".movable").draggable({grid:[ 2,2 ], snap:".container, .movable", stack: ".movable",
        start: function(){
            if ($("#delete").prop("checked") == true){
                $("#"+$(this).attr('id')).detach()
            }
          }
        });
    });
    
});

$(document).on('click', function(e) {
    if ($("#delete").prop("checked") == true && ($(e.target).hasClass("movable") == true || $(e.target).hasClass("container") == true)){
        console.log(e.target + "    " + $("#delete").prop("checked"))
        $(e.target).detach()
    }
});



