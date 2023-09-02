let prograss = document.getElementById("progress");
let song = document.getElementById("song");
let playBtn = document.getElementById("ctrlIcon2");

song.onloadedmetadata = function(){
    // prograss.max = song.duration;
    prograss.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon2.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon2.classList.add("fa-play");
        ctrlIcon2.classList.remove("fa-pause");

       
    }
    else{
        song.play();
        ctrlIcon2.classList.add("fa-pause");
        ctrlIcon2.classList.remove("fa-play");
    }

    if(song.play){
        setInterval(() => {
            progress.value = song.currentTime;
        }, 2000)
        // setTimeout(()=>{
        //     progress.value = song.currentTime;
        // },song.duration)
    }

    progress.onchange = function(){
        song.play();
        song.currentTime = prograss.value;
        ctrlIcon2.classList.add("fa-pause");
        ctrlIcon2.classList.remove("fa-play");
    }
}