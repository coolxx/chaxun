$(function () {
    $('.m3-btn p').each(function (index) {
        $(this).click(function () {
            $('.m3-btn p').removeClass('on2').eq(index).addClass('on2');
            $('.m3-show').hide().eq(index).show()
        })
    })
    $('.m3-two-btn li').each(function (index) {
        $(this).click(function () {
            $('.m3-two-btn li').removeClass('on3').eq(index).addClass('on3');
            $(this).parents('.m3-show').children('a').hide().eq(index).css('display','block')
        })
    })
    $('.m3-two-btn2 li').each(function (index) {
        $(this).click(function () {
            $('.m3-two-btn2 li').removeClass('on4').eq(index).addClass('on4');
            $(this).parents('.m3-show').children('a').hide().eq(index).css('display','block')
        })
    })
})