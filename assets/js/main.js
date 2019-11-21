$(document).ready(function(){

    //Function slider
    function slider() {
        let display = $('#first').css('display');
        if(display === 'none') {
            $('#first').show();
            $('#second').hide();
        }else {
            $('#second').show();
            $('#first').hide();
        }
    }

    //Active link
    $('.nav-link').click(function (event) {
        let id = event.target.id;
        $('.active').removeClass('active');
        $('#' + id).addClass('active');
    });

    //Active button
    $('.btn').click(function (event) {
        let id = event.target.id;
        $('.btn').removeClass('btn-active');
        $('#' + id).addClass('btn-active');

        if(id === 'btn-creative') {
            $('#p1, #p2, #p3').show();
            $('#p2, #p3').hide();
        }else if(id === 'btn-corporate') {
            $('#p1, #p2, #p3').show();
            $('#p1, #p3').hide();
        }else if(id === 'btn-portfolio') {
            $('#p1, #p2, #p3').show();
            $('#p1, #p2').hide();
        }else {
            $('#p1, #p2, #p3').show();
        }
    });

    //Slider clicks
    $('.prev, .next').click(() => {
        slider();
    });

    //Slider key
    $(document).keydown( function (event) {
        if(event.which === 39 || event.which === 37) {
            slider();
        }
    })

    //Responsive navbar
    $('.bar').click(() => {
        let display = $('#responsive-nav').css('display');
        if(display === 'none') {
            $('#responsive-nav').removeClass('display-none');
            console.log('test')
        }else {
            $('#responsive-nav').addClass('display-none');
        }
    })

    //Click on link-responsive
    $('.nav-link-responsive').click(() => {
        $('#responsive-nav').addClass('display-none');
    })
});