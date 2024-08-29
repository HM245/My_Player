console.log("Welcome to My Player")
//initialize the variables
let audioElement =new Audio('media/songs/You and Me_64(PagalWorld.com.sb).mp3');


//Play/pause:
console.log("Aao Suno");
function playsong() {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        document.getElementsByClassName('con')[1].src="media/Images/pause.svg";
    }
    else{
        audioElement.pause();
        document.getElementsByClassName('con')[1].src="media/Images/play.svg";
    }
}

audioElement.addEventListener('timeupdate',()=>{
    seekbar=parseInt((audioElement.currentTime/audioElement.duration)*100);
    document.getElementById("progressBar").value=seekbar;
})


function s1() {
    audioElement.src="media/songs/You and Me_64(PagalWorld.com.sb).mp3";
    audioElement.play();
    if(document.getElementById("progressBar").value=100){
        audioElement.src="media/songs/Magic_64(PagalWorld.com.sb).mp3";
        audioElement.play();
    }
}
function s2() {
    audioElement.src="media/songs/Magic_64(PagalWorld.com.sb).mp3";
    audioElement.play();   
}
function s3() {
    audioElement.src="media/songs/y2mate.com - Bombay To Punjab  DEEP JANDU Ft DIVINE Full Video Karan Aujla  Satti Dhillon  Geet MP3.mp3";
    audioElement.play();   
}
function s4() {
    audioElement.src="media/songs/Nasha - Equals Sessions.mp3";
    audioElement.play();   
}
function s5() {
    audioElement.src="media/songs/y2mate.com - Isyan Tetick  Patlamaya Devam Remix Official Video.mp3";
    audioElement.play();   
}
function s6() {
    audioElement.src="media/songs/y2mate.com - Rauf  Faik  childhood song Lyrics  Never lie away song lyrics  destvo song.mp3";
    audioElement.play();   
}
function s7() {
    audioElement.src="media/songs/Hymn For The Weekend_320(PaglaSongs).mp3";
    audioElement.play();   
}


function next(){
    if (audioElement.src="media/songs/You and Me_64(PagalWorld.com.sb).mp3") {
        audioElement.src="media/songs/Magic_64(PagalWorld.com.sb).mp3";
        audioElement.play();
    }
    else if (audioElement.src="media/songs/Magic_64(PagalWorld.com.sb).mp3") {
        audioElement.src="media/songs/y2mate.com - Bombay To Punjab  DEEP JANDU Ft DIVINE Full Video Karan Aujla  Satti Dhillon  Geet MP3.mp3";
        audioElement.play();
    } 
    else if(audioElement.src="media/songs/y2mate.com - Bombay To Punjab  DEEP JANDU Ft DIVINE Full Video Karan Aujla  Satti Dhillon  Geet MP3.mp3") {
        audioElement.src="media/songs/Nasha - Equals Sessions.mp3";
        audioElement.play();
    }
    else if(audioElement.src="media/songs/Nasha - Equals Sessions.mp3"){
        audioElement.src="media/songs/y2mate.com - Isyan Tetick  Patlamaya Devam Remix Official Video.mp3";
        audioElement.play(); 
    }
    else if(audioElement.src="media/songs/y2mate.com - Isyan Tetick  Patlamaya Devam Remix Official Video.mp3"){
        audioElement.src="media/songs/y2mate.com - Rauf  Faik  childhood song Lyrics  Never lie away song lyrics  destvo song.mp3";
        audioElement.play();
    }
    else if(audioElement.src="media/songs/y2mate.com - Rauf  Faik  childhood song Lyrics  Never lie away song lyrics  destvo song.mp3"){
        audioElement.src="media/songs/Hymn For The Weekend_320(PaglaSongs).mp3";
        audioElement.play();
    }
    else{
        s1();
    }
}

function previous(){
    if (audioElement.src="media/songs/You and Me_64(PagalWorld.com.sb).mp3") {
        audioElement.src="media/songs/Hymn For The Weekend_320(PaglaSongs).mp3";
        audioElement.play();
    }
    else if (audioElement.src="media/songs/Magic_64(PagalWorld.com.sb).mp3") {
        audioElement.src="media/songs/y2mate.com - Bombay To Punjab  DEEP JANDU Ft DIVINE Full Video Karan Aujla  Satti Dhillon  Geet MP3.mp3";
        audioElement.play();
    } 
    else if(audioElement.src="media/songs/y2mate.com - Bombay To Punjab  DEEP JANDU Ft DIVINE Full Video Karan Aujla  Satti Dhillon  Geet MP3.mp3") {
        audioElement.src="media/songs/Nasha - Equals Sessions.mp3";
        audioElement.play();
    }
    else if(audioElement.src="media/songs/Nasha - Equals Sessions.mp3"){
        audioElement.src="media/songs/y2mate.com - Isyan Tetick  Patlamaya Devam Remix Official Video.mp3";
        audioElement.play(); 
    }
    else if(audioElement.src="media/songs/y2mate.com - Isyan Tetick  Patlamaya Devam Remix Official Video.mp3"){
        audioElement.src="media/songs/y2mate.com - Rauf  Faik  childhood song Lyrics  Never lie away song lyrics  destvo song.mp3";
        audioElement.play();
    }
    else if(audioElement.src="media/songs/y2mate.com - Rauf  Faik  childhood song Lyrics  Never lie away song lyrics  destvo song.mp3"){
        audioElement.src="media/songs/Hymn For The Weekend_320(PaglaSongs).mp3";
        audioElement.play();
    }
    else{
        s1();
    }
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    const input = document.getElementById("myInput");
    const filter = input.value.toUpperCase();
    const div = document.getElementById("myDropdown");
    const a = div.getElementsByTagName("span");
    for (let i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

