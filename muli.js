console.log("Welcome to My Player")
//initialize the variables
const audioElement =new Audio('media/songs/You and Me_64(PagalWorld.com.sb).mp3');

// import { songsl } from "./muli.js";
// const audioArray = songsl;
const audioArray = [
    'https://pagalnew.com/128-downloads/49020',
    'https://bajaao.pendujatt.com.se/load/320/52210422/1636533/Illuminati.mp3',
    'https://s320.djpunjab.is/data/48/54148/302510/JALWA%20-%20Carryminati.mp3',
    'https://pagalnew.com/128-downloads/44107',
    'https://bajaao.pendujatt.com.se/load/320/14008628/22596/Woofer.mp3',
    'https://pagalnew.com/128-downloads/24794',
    'https://pagalnew.com/128-downloads/45280',
    'media/songs/y2mate.com - Rauf  Faik  childhood song Lyrics  Never lie away song lyrics  destvo song.mp3',
    'https://bajaao.pendujatt.com.se/load/320/42004364/509940/Paisa Hai Toh.mp3',
    'https://bajaao.pendujatt.com.se/load/320/1314195/302254/Aankhon Aankhon.mp3',
    'media/songs/Daav Laga - Aagey Se Right (Window 8 Ad Song) 190Kbps.mp3',
    'media/songs/Kosandra(PagalWorld.com.se).mp3',
    'media/songs/Nam-Dang-Nam-Som(PagalWorld).mp3',
    'https://pagalfree.com/musics/128-Softly%20-%20Making%20Memories%20128%20Kbps.mp3'
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
function s8() {
    audioElement.src=audioArray[7];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}
function s9() {
    audioElement.src=audioArray[8];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}
function s10() {
    audioElement.src=audioArray[9];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}
function s11() {
    audioElement.src=audioArray[10];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}
function s12() {
    audioElement.src=audioArray[11];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}
function s13() {
    audioElement.src=audioArray[12];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}
function s14() {
    audioElement.src=audioArray[13];
    audioElement.play();
    document.getElementsByClassName('con')[1].src="media/Images/pause.svg";   
}