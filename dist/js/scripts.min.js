$(window).scroll(function (e) {
    $el = $('.save-house');
    $el.toggleClass('hide', $(this).scrollTop() > (window.innerHeight * 0.8));

});


//arrow btn

let arrowBtn = [...document.querySelectorAll('.arrow-btn')];

function scrollArrow() {
    if (arrowBtn.length) {
        arrowBtn.forEach((btn) => {
            let direction = btn.dataset.to;
            $(btn).click(function () {
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(`.${direction}`).offset().top
                }, 400);
            });
        })
    }
}

scrollArrow();

//arrow btn

//slider desk control

let activeNumberSlide = 0;


let slideDesk = [...document.querySelectorAll('.heart-slider__slide')];
let slideNames = [...document.querySelectorAll('.heart-slider__names p')];

function deskFunction() {
    slideDesk.forEach((btn) => {
        btn.classList.remove('active');
    });
    slideNames.forEach((btn) => {
        btn.classList.remove('active');
    });
    slideDesk[activeNumberSlide].classList.add('active');
    slideNames[activeNumberSlide].classList.add('active');
    activeNumberSlide++;
    if (activeNumberSlide > slideDesk.length - 1) {
        activeNumberSlide = 0;
    }
};

let deskInterval = setInterval(deskFunction, 3100);

function controlDeskSlider() {
    if (slideDesk.length) {
        slideDesk.forEach((btn, k) => {
            let clik = btn.querySelector('.click');

            clik.addEventListener('click', () => {
                clearInterval(deskInterval);
                slideDesk.forEach((btn2) => {
                    btn2.classList.remove('active');
                    btn2.querySelector('video').pause();
                    btn2.querySelector('video').load();
                    btn2.querySelector('.video').classList.remove('played');

                });
                slideNames.forEach((btn3) => {
                    btn3.classList.remove('active');
                });
                btn.classList.add('active');
                slideNames[k].classList.add('active');
            })
        })
    }

}

controlDeskSlider();


//slider desk control

//happy slider


let activeHappy = 0;

let happyBlocks = [...document.querySelectorAll('.happy-slide')];


function happyFunction() {
    happyBlocks.forEach((btn) => {
        btn.classList.remove('active');
    });

    happyBlocks[activeHappy].classList.add('active');
    activeHappy++;
    if (activeHappy > happyBlocks.length - 1) {
        activeHappy = 0;
    }
};

let happyInterval = setInterval(happyFunction, 2600);

function controlHappySlider() {
    if (happyBlocks.length) {
        happyBlocks.forEach((btn, k) => {

            btn.addEventListener('click', () => {
                clearInterval(happyInterval);
                happyBlocks.forEach((btn2) => {
                    btn2.classList.remove('active');

                });

                btn.classList.add('active');
            })
        })
    }

}

controlHappySlider();


//happy slider


//play video

let videoBlock = [...document.querySelectorAll('.video')];

function videoControl() {
    if (videoBlock.length) {
        videoBlock.forEach((btn) => {
            let play = btn.querySelector('.play');
            let vid = btn.querySelector('video');
            play.addEventListener('click', () => {
                vid.play();
                btn.classList.add('played');
                if (play.closest('.heart-slider__vid')) {
                    clearInterval(deskInterval);
                }
            })
        })
    }
}

videoControl();

//play video