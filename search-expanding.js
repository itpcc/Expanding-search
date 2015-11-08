$(document).ready(function() {

    $('#search-expanding').click(function () {
        if ( $(this).is(".expanded") ) {
            $(this).removeClass('expanded');
            $('#search-input').animate({width: 0}, function(){
                $('#search-input').hide();
                $('#icon-search').show();
            });
        }
        else {
            $(this).addClass('expanded');
            $('#icon-search').hide();
            $('#search-input').show().animate({width: 300});
            $("#search-input input").focus();
        }
    })
    
    //applied from: https://stackoverflow.com/questions/7140691/jquery-cancel-event-on-keypress-escape
    $("#search-input input").on('keyup', function(e){
        if (e.which == 27) { 
            //$('#search-expanding').click(); //cancel bacuase conflict with $("#search-input input").blur
            $(this).val('').blur();
        }    
    });  

    $("#search-input input").blur(function () {
        $('#search-expanding').click();
    });

});
