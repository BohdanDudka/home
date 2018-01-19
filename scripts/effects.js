var windowHeight = $(window).height();
var windowScrollPosTop = $(window).scrollTop();
var windowScrollPosBottom = windowHeight + windowScrollPosTop;

$.fn.revealOnScroll = function (direction, speed) {
    return this.each(function () {

        var objectOffset = $(this).offset();
        var objectOffsetTop = objectOffset.top;


        if (!$(this).hasClass('hidden')) {

            if (direction == 'right') {
                $(this).css({
                    'opacity' : 0,
                    'right'   : '700px'
                });
            } else {
                $(this).css({
                    'opacity' : 0,
                    'right'   : '-700px'
                });
            }

            $(this).addClass('hidden');
        }

        if (!$(this).hasClass('animation-complete')) {
            if (windowScrollPosBottom > objectOffsetTop) {
                $(this).animate({'opacity' : 1 , 'right' : 0}, speed).addClass('animation-complete');
            }
        }
    });
}

$(window).scroll(function () {

    windowHeight = $(window).height();
    windowScrollPosTop = $(window).scrollTop();
    windowScrollPosBottom = windowHeight + windowScrollPosTop;

    $('.item-image').revealOnScroll('rigth', 1300);
    $('.BlogPosts__withText').revealOnScroll('left', 4000);
    $('.BlogPosts__withImg').revealOnScroll('right', 800);
});
