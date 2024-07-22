const VideoPlayerOverlay = document.querySelector(".video-player-overlay");
const VideoLinks = document.querySelectorAll(".video-link");
const VideoPlayerPopup= document.querySelector(".video-player-popup video");

VideoLinks.forEach((link) => {
    link.addEventListener("click", () => {
        VideoPlayerOverlay.classList.add("active");
        let videoLink = `${link.dataset.link}`;
        VideoPlayerPopup.src = videoLink;
    });
});

VideoPlayerOverlay.addEventListener("click", () => {
    VideoPlayerOverlay.classList.remove("active");
});