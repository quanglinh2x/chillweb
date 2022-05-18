$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)

// tutorial how to work
/** slider */
var sliders =$$('.modal__work--logo-source');
var slidercontents = $$('.modal__work--text');
var sliderdots =$$('.modal__work--slider li');
sliderdots.forEach((sliderdot,index) => {
    sliderdot.onclick = function() {
        const slider = sliders[index];
        const slidercontent = slidercontents[index];
        $('.modal__work--logo-source.active').classList.remove('active');
        $('.modal__work--text.active').classList.remove('active');
        slider.classList.add('active');
        slidercontent.classList.add('active');
    }
});

/**exit how to work*/
var theHandleTutorial = $('.heading__form--item-tutorial');
var modalWork = $('.modal__work');
var leaveWork =$('.modal__work--tutorial');
var closeWork = $('.modal__work--close');
var theHandleTutorialTablet = $('.nav-tablet__item:first-of-type')
theHandleTutorialTablet.addEventListener('click', () =>{
    modalWork.classList.add('open')
})
theHandleTutorial.addEventListener('click', () => {
    modalWork.classList.add('open')
    
})

leaveWork.addEventListener('click', () => {
    modalWork.classList.remove('open')
});
closeWork.addEventListener('click', () => {
    modalWork.classList.remove('open')
    
})

// change day night
var theVideoIn = $('.video-in');
var theVideoOut = $('.video-out');
var theHandleDay = $('.nav__switch--bar');
theHandleDay.addEventListener('change', () => {
    if(theHandleDay.checked == true) {
        theVideoIn.style.opacity ='0';
        theVideoOut.style.opacity= '1';
        theVideoIn.classList.toggle('video-in','video-out');
        theVideoOut.classList.toggle('video-out','video-in');
        
        

    }else {
        theVideoIn.style.opacity ='1';
        theVideoOut.style.opacity= '0';
        theVideoIn.classList.toggle('video-in','video-out');
        theVideoOut.classList.toggle('video-out','video-in');
        
    }
    
        
    }
)
// fullscreen
var elem = document.documentElement;
function handleScreen(){
    if(document.fullscreenElement){
        document.exitFullscreen()
            .then(function(){
                
            })
            .catch(function(){
                
            })
    }
    else{
        elem.requestFullscreen()
    }
}
//  sign up


// modal sign up login
const SignUp = $('.nav__signup')
const modalSignUp = $('.modal__signup')
const modalLogin = $('.modal__login')
const closeSign = $('.modal__signup .close--sign')
const closeLogin = $('.modal__login .close--sign')
const Login = $('.nav__login')
SignUp.addEventListener('click', () => {
    modalSignUp.classList.add('open')
})
closeSign.addEventListener('click', () =>
{
    modalSignUp.classList.remove('open')
})
Login.addEventListener('click', () =>
{
    modalLogin.classList.add('open')
})
closeLogin.addEventListener('click', () =>
{
    modalLogin.classList.remove('open')
})



