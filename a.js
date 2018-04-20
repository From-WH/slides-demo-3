let $buttons = $('#buttonWrapper > button')
let $slides = $('#slides')
let $images = $slides.children('img')
let $firstCopy = $images.eq(0).clone(true)
let $lastCopy = $images.eq($images.length - 1).clone(true)



$slides.append($firstCopy)
$slides.prepend($lastCopy)
$slides.css({ transform: 'translateX(-600px)' })

let current = 0

$buttons.eq(0).on('click', function () {
    if (current == 3) {
        $slides.css({ transform: 'translateX(-3000px)' })
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({ transform: ('translateX(-600px)') })
                    .show()
            })
    } else {
        $slides.css({ transform: 'translateX(-600px)' })
    }
    current = 0
})
$buttons.eq(1).on('click', function () {
    $slides.css({
        transform: ('translateX(-1200px)')
    })
    current = 1
})
$buttons.eq(2).on('click', function () {
    $slides.css({
        transform: ('translateX(-1800px)')
    })
    current = 2
})
$buttons.eq(3).on('click', function () {
    if (current == 0) {
        $slides.css({ transform: 'translateX(0px)' })
            .one('transitionend', function () {
                $slides.hide()
                    .offset()
                $slides.css({ transform: ('translateX(-2400px)') })
                    .show()
            })
    } else {
        $slides.css({ transform: ('translateX(-2400px)') })
    }
    current = 3
})