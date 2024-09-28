 var songs=[
        {
            title: "Song 1",
            artist: "Artist 1",
            src: "/song/A_Virtual_Friend_-_Clair_Obscur.mp3"
        },
        {
            title: "Song 2",
            artist: "Artist 2",
            src: "/song/Boukmanflow_-_Does_she_not.mp3"
        },
        {
            title: "Song 3",
            artist: "Artist 3",
            src: "/song/Color_Out_-_Host.mp3"
        }
    ];
    
let click=0;
let songname=document.getElementById('song-name');
let songname1=document.getElementById('song-artist1');
let audio=document.getElementById('audio');
let previous=document.getElementById('pre');
let nextsong=document.getElementById('next');
let pause=document.getElementById('pause');
let play=document.getElementById('play') 
let mute=document.getElementById('mute');
let range=document.getElementById('audio-range');

play.style.display = 'block';  
pause.style.display = 'none';

function songtitle(){
   songname.textContent=songs[click].title;
   audio.muted = false;
   mute.innerHTML = '<i class="fa-solid fa-volume-up"></i>';
   audio.src = songs[click].src;
   audio.play();
   
}

pause.addEventListener('click',function(){
    audio.pause();
    play.style.display = 'block';  
    pause.style.display = 'none';
})


play.addEventListener('click',function(){
    play.style.display = 'none';  
    pause.style.display = 'block';
    audio.play();
    songtitle();
   
})

previous.addEventListener('click',function(){
    click=(click-1)%songs.length;
    play.style.display = 'none';  
    pause.style.display = 'block';
    songtitle();
})




nextsong.addEventListener('click',function(){
    click=(click+1)%songs.length;
    play.style.display = 'none';  
    pause.style.display = 'block';
    songtitle()
})


mute.addEventListener('click',function(){
    if (audio.muted) {
        audio.muted = false;
        mute.innerHTML = '<i class="fa-solid fa-volume-up"></i>';
    } else {
        audio.muted = true;
        mute.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
})


audio.addEventListener('timeupdate', function() {
    range.max = audio.duration; 
    range.value = audio.currentTime; 
});


 