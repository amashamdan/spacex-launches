export function getVideoId(videoLink) {
    return videoLink.slice(videoLink.indexOf("?v=") + 3);
}