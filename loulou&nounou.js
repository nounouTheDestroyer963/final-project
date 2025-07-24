// Get a reference to the video element and the unmute button
const video = document.getElementById('video-ad');
const unmuteButton = document.getElementById('unmuteButton');

/**
 * Toggles the video's mute state and updates the button's text accordingly.
 * If the video is currently muted, it will be unmuted and the button text will change to "Mute".
 * If the video is not muted, it will be muted and the button text will change to "Unmute".
 */
function toggleMute() {
  if (video.muted) {
    video.muted = false;
    unmuteButton.innerHTML = 'Mute';
  } else {
    video.muted = true;
    unmuteButton.innerHTML = 'Unmute';
  }
}

