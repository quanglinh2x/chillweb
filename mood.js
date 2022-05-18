const tabColSlider =$('#tab-col-slider')
const tabColBook =$('#tab-col-book')
const tabChildSlider = tabColSlider.querySelector('.tab__slider-form')
const tabSliderIcon=tabColSlider.querySelector('.tab__col--icon')
const tabBookIcon=tabColBook.querySelector('.tab__col--icon')
const tabChildBook = tabColBook.querySelector('.tab__slider-form')

isOpenTabSlider =false
isOpenTabBook =false
const tabSliderForms = $$('.tab__slider-form')

tabColSlider.onclick = function(){
    isOpenTabBook=false
    if (!isOpenTabSlider) {
        tabChildBook.classList.remove('open')
        tabBookIcon.classList.remove('options')
        tabChildSlider.classList.add('open')
        tabSliderIcon.classList.add('options')
        isOpenTabSlider = !isOpenTabSlider
    }else {
        
        tabChildSlider.classList.remove('open')
        tabSliderIcon.classList.remove('options')
        isOpenTabSlider = !isOpenTabSlider
    }
}
tabColBook.onclick = function(){
    isOpenTabSlider=false
    if (!isOpenTabBook) {
        tabChildSlider.classList.remove('open')
        tabSliderIcon.classList.remove('options')
        tabChildBook.classList.add('open')
        tabBookIcon.classList.add('options')
        isOpenTabBook = !isOpenTabBook
    }else {
        
        tabChildBook.classList.remove('open')
        tabBookIcon.classList.remove('options')
        isOpenTabBook = !isOpenTabBook
    }
}
tabChildSlider.onclick= function(e){
    e.stopPropagation()
}
tabChildBook.onclick=function(e){
    e.stopPropagation()
}


// extention select của tab-slider
const tabChildSlidersextention = $$('.tab__slider-mod__child')
const iconSliders = $$('.icon-options')
const textSliders = $$('.text-options')
childSliders = Array.from(tabChildSlidersextention)
tabChildSlidersextention.forEach(function (childSlider, index) {

    childSlider.onclick = function (e) {
        e.stopPropagation()
        var a = iconSliders[index];
        var b = textSliders[index];
        $('.icon-options.options').classList.remove('options')
        $('.text-options.whitecolor').classList.remove('whitecolor')
        a.classList.add('options')
        b.classList.add('whitecolor')


    }
})
