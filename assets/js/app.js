$(document).ready(function() {

    $('a[href^="#"]').click(function() {
    var destino = $(this.hash); //this.hash lee el atributo href de este
    $('html, body').animate({ scrollTop: destino.offset().top }, 700); //Llega a su destino con el tiempo deseado
        return false;
    });


    $('#inicio').on('mouseenter', '.btn-nav', function() {
        $('.btn-nav').removeClass('for-hover animated infinite flash');
        $(this).addClass('for-hover animated infinite flash');
      })
    
      $('#inicio').on('click', '.btn-nav', function() {
        $('nav').show()
      })

});

