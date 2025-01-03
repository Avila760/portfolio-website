const VideoPlayerOverlay2 = document.querySelector(".video-player-overlay2");
const VideoLinks2 = document.querySelectorAll(".video-link2");
const VideoPlayerPopup2= document.querySelector(".video-player-popup2 video");


VideoLinks2.forEach((link) => {
    link.addEventListener("click", () => {
        VideoPlayerOverlay2.classList.add("active");
        let videoLink2 = `${link.dataset.link}`;
        VideoPlayerPopup2.src = videoLink2;
    });
});

VideoPlayerOverlay2.addEventListener("click", () => {
    VideoPlayerOverlay2.classList.remove("active");
});



