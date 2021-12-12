


$(document).ready(function() {
    
    
    // owl carousel banner code

    $('.banner').owlCarousel({
        items:1,
        loop:true,
        nav:true
    });

    // owl carousel new prodect

    $('.prodect_carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        items:4,
        responsive:{
            0:{
                items:1,
                stagePadding: 100,
                margin:20
            },
            768:{
                items:1,
                margin:20,
                stagePadding: 200
            },
            992:{
                items:4
            }
        }
    })


    // stories carousel 

    $('.stories-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:1, 
                stagePadding:50
            },
            992:{
                items:1
            }
        }
    })
    
    // scroll menu style

    $(window).scroll(function(){

        var a = $(window).scrollTop();    

        $("#inner_header").addClass('scroll_style');
        if (a <=100) {
            $("#inner_header").removeClass("scroll_style");
        }

    });
    
    // hover to img change
    $('.project_img').hover(function(){
       $(this).find('img:last').fadeToggle();
    });
   

    // addject width & height 
    $(window).scroll(function(){
        // new prodect 
        let new_prodect = $('.new_prodect .prodect_carousel .project_img').width();
        $('.new_prodect .prodect_carousel .project_img').height(new_prodect);
        console.log(new_prodect);

        // feature prodect
        let feature_prodect = $('.feature_prodect .project_img').width();
        $('.feature_prodect .project_img').height(feature_prodect);

        // feature second row
        let feature_prodect_second_row = $('.feature_prodect .second_row .project_img').width();
        $('.feature_prodect .second_row .project_img').height(feature_prodect_second_row);
            
    })


});