$('document').ready(function(){
    // 비디오 재생
    let video = $('figure>video');
    $('.play').on('click',function(e){
        video[0].play();
    $('article#sec03>div').stop().show();
    $('article#sec03>p').stop().css('animation-play-state','running')
    });
    // 비디오 스톱
    $('.stop').on('click',function(e){
        video[0].pause();
        $('article#sec03>div').stop().hide();
        $('article#sec03>p').stop().css('animation-play-state','paused');
    });
    // 사운드 뮤트
    $('.sound>a').on('click',function(){
            $(this).toggleClass('on')
         
            $('video>a.on').prop('muted',false)
        });
    // 소리아이콘
        $('.sound>a').on('click',function(){
            if(video[0].muted) {
                video[0].muted = false;

            }
            else {
                video[0].muted = true;
            }
        }); 
});