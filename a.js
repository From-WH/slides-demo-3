let $buttons = $('#buttonWrapper > ul > li > a')
let $slides = $('#slides')
let $images = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({ transform: ('translateX(-920px)'), transition: `none`})
bindEvents()

//此处可以设置上下翻页
// $(next).on('click',function () {   
//     goToSlide(current + 1)
// })
// $(previous).on('click', function () {
//     goToSlide(current - 1)
// })
document.addEventListener('visibilitychange',function (e) {
    if(document.hidden){
        window.clearInterval(timeID)
    }else{
        sitTimer()
    }
})  //写到这里啦
// let times = setInterval(()=>{
//     goToSlide( current + 1)
// },1500)

// $('.container').on('mouseenter',function () {
//     window.clearInterval(times)
// })
// $('.container').on('mouseleave', function () {
//     times = setInterval(() => {
//         goToSlide(current + 1)
//     }, 2000)
// })

function bindEvents() {
    $('#buttonWrapper').on('click', 'li', function (e) {
        let $li = $(e.currentTarget)
        let index = $li.index()
        goToSlide(index)
    })
}
function goToSlide(index) {
    $slides.css({ transition: `all 1s` })
    if(index > $buttons.length - 1){
        index = 0
    }else if(index < 0){
        index = $buttons.length - 1
    }
    if (index === 0 && current === $buttons.length - 1) {
        $slides.css({ transform: `translateX(${-($buttons.length + 1) * 920}px)`})
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({ transform: `translateX(${-(index + 1) * 920}px)` })
                    .show()
            })
    } else if (current === 0 && index === $buttons.length - 1) {
        $slides.css({ transform: `translateX(0px)` })
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({ transform: `translateX(${-(index + 1) * 920}px)` })
                    .show()
            })
    } else {
        $slides.css({ transform: `translateX(${-(index + 1) * 920}px)` })
    }
    current = index
}
function makeFakeSlides() {
        let $firstCopy = $images.eq(0).clone(true)
        let $lastCopy = $images.eq($images.length - 1).clone(true)

        $slides.append($firstCopy)
        $slides.prepend($lastCopy)
 }


let $lis = $('#buttonWrapper > ul > li')
for (let i = 0; i < $lis.length; i++) {
    $($lis[i]).on('click', function (x) {         
        var index = $(x.currentTarget).index()          
        n = index                                       
        activeButton($lis.eq(n)) 
    })
}

var n = 0
var allImages = $('#slides > img')
var size = allImages.length
playSlide(n % size)

var timeID = sitTimer()


$('.window').on('mouseenter', function () {
    window.clearInterval(timeID)
})
$('.window').on('mouseleave', function () {
    timeID = sitTimer()
})

function sitTimer() {
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 2000)
}
function playSlide(index) {
    $lis.eq(index).trigger('click')
}

function activeButton($lis) {
    $lis
        .addClass('red')
        .siblings('.red').removeClass('red')
}