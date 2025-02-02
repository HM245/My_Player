console.log("Welcome to My Player")
//initialize the variables
const audioElement =new Audio('media/songs/You and Me_64(PagalWorld.com.sb).mp3');

// import { songsl } from "./muli.js";
// const audioArray = songsl;
const audioArray = [
    'media/songs/You and Me_64(PagalWorld.com.sb).mp3',
    'media/songs/Magic_64(PagalWorld.com.sb).mp3',
    'media/songs/Nasha - Equals Sessions.mp3',
    'media/songs/Hymn For The Weekend_320(PaglaSongs).mp3',
    'media/songs/y2mate.com - Bombay To Punjab  DEEP JANDU Ft DIVINE Full Video Karan Aujla  Satti Dhillon  Geet MP3.mp3',
    'media/songs/y2mate.com - Isyan Tetick  Patlamaya Devam Remix Official Video.mp3',
    'media/songs/y2mate.com - Rauf  Faik  childhood song Lyrics  Never lie away song lyrics  destvo song.mp3'
]
let i=0;


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


audioElement.addEventListener('ended',function(){ //when a song finished playing
    i++; //increase index
    if (i < audioArray.length) { //If current index is smaller than count of songs
        audioElement.src = audioArray[i]; //set next song
        audioElement.play();
        return; // stop further processing of this function for now
    }
    // current index is greater than count of songs
    i = 0; // therefore we reset the current index to the first available song
    audioElement.src = audioArray[i]; // and set it to be played
    audioElement.play();
  });

function next(){
    i++;
    audioElement.src=audioArray[i];
    audioElement.play();
    if(i>=audioArray.length){
        i = 0;
        audioElement.src = audioArray[i];
        audioElement.play();
    }
}
function previous(){
    --i;
    audioElement.src=audioArray[i];
    audioElement.play();   
}

function LetsPlay(){
    audioElement.src=audioArray[i];
    audioElement.play();
}


function s1() {
    audioElement.src=audioArray[0];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";
}
function s2() {
    audioElement.src=audioArray[1];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}
function s3() {
    audioElement.src=audioArray[4];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}
function s4() {
    audioElement.src=audioArray[2];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}
function s5() {
    audioElement.src=audioArray[5];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}
function s6() {
    audioElement.src=audioArray[6];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}
function s7() {
    audioElement.src=audioArray[3];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
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

