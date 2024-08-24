console.log("Aao saalo");
let audioElement = new Audio('media/songs/You and Me_64(PagalWorld.com.sb).mp3');
function playsong() {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
}