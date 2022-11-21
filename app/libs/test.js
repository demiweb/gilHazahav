let btnVideoPlay = [...document.querySelectorAll('.heart-slider__slide')];

function checkWhatVideoType() {
    if (btnVideoPlay.length) {

        var tag = document.createElement("script");
        tag.src = "//www.youtube.com/player_api";
        var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        var player;

// this function gets called when API is ready to use
        function onYouTubePlayerAPIReady() {
            // create the global player from the specific iframe (#video)
            player = new YT.Player("video-player", {
                events: {
                    // call this function when player is ready to use
                    onReady: onPlayerReady
                }
            });
        }

        function onPlayerReady(event) {
            // bind events
            var playButton = document.getElementById("play-btn");
            playButton.addEventListener("click", function () {

                if (playButton.classList.contains('pause')) {
                    player.pauseVideo();
                    playButton.classList.remove('pause');
                    document.querySelector('.video-box').classList.remove('hide-poster');
                } else {
                    player.playVideo();
                    playButton.classList.add('pause');
                    document.querySelector('.video-box').classList.add('hide-poster');
                }
            });


        }

        onYouTubePlayerAPIReady();

    }

}

checkWhatVideoType();
// Inject YouTube API script
