$(window).scroll(function (e) {
    $el = $('.save-house');
    $el.toggleClass('hide', $(this).scrollTop() > (window.innerHeight * 0.8));

});


let footHiden = [...document.querySelectorAll('.header-menu ul a')];


let currentGallery = 0;

let galleryTopClient = [...document.querySelectorAll('.client__top-gallery .img')];

function changeCLientTopImg() {
    if (galleryTopClient.length) {
        setInterval(() => {
            currentGallery++;

            galleryTopClient.forEach((btn) => {
                btn.classList.remove('active');
            });
            if (currentGallery > galleryTopClient.length - 1) {
                currentGallery = 0;
            }
            galleryTopClient[currentGallery].classList.add('active');

        }, 3800);
    }
}

changeCLientTopImg();

function scrollToWhat() {
    if (footHiden.length) {
        footHiden.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let link = btn.getAttribute("href");

                $([document.documentElement, document.body]).animate({
                    scrollTop: $(link).offset().top + 75
                }, 500);
            })
        })
    }
}

scrollToWhat();

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


$(window).scroll(function (e) {
    $el = $('.header');
    $el2 = $('.fixed-mob-foot');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 15);
    $el2.toggleClass('show', $(this).scrollTop() > 15);

});


//arrow btn

//slider desk control



//changed

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

let deskInterval;
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
let happyInterval;
var player;
function createVideo(videoBlockId, videoId) {
    player = new YT.Player(videoBlockId, {
        videoId: videoId,
        playerVars: {
            // 'autoplay':1,
            'autohide': 1,
            'showinfo': 0,
            'rel': 0,
            'loop': 1,
            'playsinline': 1,
            'fs': 1,
            'allowsInlineMediaPlayback': true
        },
        events: {
            'onReady': function (e) {
                // e.target.mute();
                // if ($(window).width() > 991) {

                e.target.playVideo();

                // }
            }
        }
    });
}

function controlDeskSlider() {
    if (slideDesk.length) {
        slideDesk.forEach((btn, k) => {
            let clik = btn.querySelector('.click');

            clik.addEventListener('click', () => {
                clearInterval(deskInterval);
                slideDesk.forEach((btn2) => {
                    btn2.classList.remove('active');
                    // btn2.querySelector('video').pause();
                    // btn2.querySelector('video').load();
                    btn2.querySelector('.heart-slider__vid').classList.remove('played');
                    btn2.querySelector('.video').classList.remove('played');

                });
                slideNames.forEach((btn3) => {
                    btn3.classList.remove('active');
                });
                if (document.querySelector('.iframe-video-block iframe')) {
                    player.pauseVideo();
                    document.querySelector('.iframe-video-block').classList.remove('playing');
                    document.querySelector('.iframe-video-block iframe').remove();
                }



                btn.classList.add('active');
                slideNames[k].classList.add('active');
            })
        })
    }

}

controlDeskSlider();


//slider desk control

//happy slider



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

function ifHomePage() {
    if (document.body.classList.contains('home')) {
        happyInterval = setInterval(happyFunction, 2600);
        deskInterval = setInterval(deskFunction, 3100);
    }
}

ifHomePage();

//happy slider


//play video

let videoBlock = [...document.querySelectorAll('.heart-mob-slide .video')];

function videoControl() {
    if (videoBlock.length) {
        videoBlock.forEach((btn) => {
            let play = btn.querySelector('.play');
            // let vid = btn.querySelector('video');
            play.addEventListener('click', () => {
                // vid.play();

                btn.classList.add('played');


                let type = play.dataset.videoType;
                let id = play.dataset.videoId;
                let videoCont = document.querySelector('.iframe-video-block');

                videoCont.dataset.videoType = type;
                videoCont.dataset.videoId = id;


                let videoId = id;

                if (btn.closest('.heart-slider__vid')) {
                    btn.closest('.heart-slider__vid').classList.add('played');
                    clearInterval(deskInterval);
                }
                setTimeout(() => {
                    videoCont.classList.add('playing');
                    $('.video-block').find('.video-item').append('<div class="video-iframe" id="'+videoId+'"></div>');

                    createVideo(videoId, videoId);
                }, 200);


                if (play.closest('.heart-slider__vid')) {
                    clearInterval(deskInterval);
                }

            })
        })
    }
}

videoControl();

//play video

let botSlides = [...document.querySelectorAll('.heart-slider__slide .play')];

function videoControlSlides() {
    if (botSlides.length) {
        botSlides.forEach((btn) => {
            let type = btn.dataset.videoType;
            let id = btn.dataset.videoId;
            let videoCont = document.querySelector('.iframe-video-block');
            // console.log(id);
            btn.addEventListener('click', () => {
                videoCont.dataset.videoType = type;
                videoCont.dataset.videoId = id;
                // videoCont.querySelector('iframe').id = id;

                $('.video-block').addClass('play');

                let videoId = id;

                if (btn.closest('.heart-slider__vid')) {
                    btn.closest('.heart-slider__vid').classList.add('played');
                    clearInterval(deskInterval);
                }
                setTimeout(() => {
                    videoCont.classList.add('playing');
                    $('.video-block').find('.video-item').append('<div class="video-iframe" id="'+videoId+'"></div>');

                    createVideo(videoId, videoId);
                }, 200);



            })
        })
    }
}

videoControlSlides();





//slider
var scroGallery = [...document.querySelectorAll('.heart-slider__mob')];

function scroSlider() {
    if (!scroGallery.length) {

    } else {
        scroGallery.forEach((sld) => {
            let sldCont = sld.querySelector('.heart-slider__mob-cont');
            let sldNext = sld.querySelector('.arrow-next');
            let sldPrev = sld.querySelector('.arrow-prev');
            let pagin = sld.querySelector('.pagin');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                // effect: "fade",
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,
                delay: 1500,
                autoplay: false,
                spaceBetween: 0,

                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                pagination: {
                    el: pagin,
                    clickable: true,
                },


            });

            swiper2.on('slideChange', function () {
                [...document.querySelectorAll('.video.played')].forEach((btn) => {
                    btn.classList.remove('played');
                    // btn.querySelector('video').pause();
                    // btn.querySelector('video').load();
                    if (document.querySelector('.iframe-video-block iframe')) {
                        player.pauseVideo();
                        document.querySelector('.iframe-video-block').classList.remove('playing');
                        document.querySelector('.iframe-video-block iframe').remove();
                    }
                });
            });
        })
    }
}

scroSlider();


//slider

//changed









