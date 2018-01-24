    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    $(function(){
        $('input:checkbox').change(function(){
            if($(this).is(":checked")) {
                $('#pricing').addClass("change_color");
            } else {
                $('#pricing').removeClass("change_color");
            }
        });
    });

    function playVideo(video){
        if (video.paused == true) {
            video.play();
            video.controls = true;
            $("#control #play-pause").hide();
        } else {
            video.pause();
            video.controls = false;
            $("#control #play-pause").show();
        }
    }

    $(document).ready(function() {
        var video = document.getElementById('video');

        video.addEventListener('ended', function(){
            // this check is to differentiate seek and actual pause
            if (video.readyState === 4) {
                $('#video-replay').show();
            }
        });

        $("#videoModal").on('shown.bs.modal', function (e) {
            $("#control #play-pause").hide();
            playVideo(video);
        });

        $("#videoModal").on('hidden.bs.modal', function (e) {
            video.pause();
            video.load();
            video.controls = false;
        });

        $(document).on('click', '#video-replay', function(){
            $(this).hide();
            video.play();
        });

        $(document).on('click', '#play-pause', function() {
            playVideo(video);
        });
    });


    $('#price-slider').on('change', function(e){
        //e.preventDefault();
        if($(this).prop('checked')){
            $('#pricing').removeClass('monthly-pr');
            $('#pricing').addClass('yearly-pr');
        }
        else{
            $('#pricing').removeClass('yearly-pr');
            $('#pricing').addClass('monthly-pr');
        }
    });

    var _dcq = _dcq || [];
    var _dcs = _dcs || {};
    _dcs.account = '8232966';

    (function() {
        var dc = document.createElement('script');
        dc.type = 'text/javascript'; dc.async = true;
        dc.src = '//tag.getdrip.com/8232966.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(dc, s);
    })();

