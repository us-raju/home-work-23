
$(window).on('load', function(){
    $('#preloader').fadeOut();
})

   $(function(){
    // let icon = document.getElementById('m-glass')
    // let search_box = document.querySelector('.search-box')

    $('#m-glass').on('click', function(){
        $('.search-box').addClass('show');
    })

    // let mode_changer = document.getElementById('mode_changer');

    // $('mode_changer').on('click', function(){
    //     $(document.documentElement).addClass('dark')
    // })

    $(window).on('scroll',function(){
        let scrollsize = $(window).scrollTop();
        if(scrollsize > 700){
         $('#backtoTop').slideDown()
        } else{
         $('#backtoTop').slideUp()
        }
     
        $('#backtoTop').on('click', function(){
             $('html, body').animate({
                 scrollTop:0,
             })
        })

        // menu fixed
        if(scrollsize > 100){
            $('#navigation').addClass('active')
        } else{
            $('#navigation').removeClass('active')
        }
    })

  
    

   })
