let prograss = document.getElementById("progress");
let song = document.getElementById("song");
let playBtn = document.getElementById("ctrlIcon2");


song.onloadedmetadata = function(){
    prograss.max = song.duration;       // progress bar will move until song ends
    prograss.value = song.currentTime;      // when song will play progress bar's thumb slider will also move
}

// function created for play / pause the song
function playPause(){
    // To pause the song
    if(ctrlIcon2.classList.contains("fa-pause")){   // it means we have showing pause icon there
        song.pause();       // stop playing song
        ctrlIcon2.classList.add("fa-play");        // showing play icon there    
        ctrlIcon2.classList.remove("fa-pause");      // removing pause icon

       
    }
    else{
    // To play the song
        song.play();    // start playing song
        ctrlIcon2.classList.add("fa-pause");        
        ctrlIcon2.classList.remove("fa-play");
    }

    // If song is playing so to move progress bar thumb slider 
    if(song.play){
        setInterval(() => {
            progress.value = song.currentTime;
        }, 500)    // after every 5ms slider will move

    }

    // if we move slider so song duration will also affect
    progress.onchange = function(){
        song.play();
        song.currentTime = prograss.value;  //song will play from the prograss bar value 
        ctrlIcon2.classList.add("fa-pause");
        ctrlIcon2.classList.remove("fa-play");
    }
}