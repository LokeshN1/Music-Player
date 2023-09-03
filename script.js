// Created a list inside which songs are stored
const song_list = [

    // song 1
    {
        songAudio : "Songs/Despacito(PagalWorld).mp3",
        songName : "Despacito",
        authorName : "Luios Fonsi Ft. Puerto Rican",
        songThumbnail : "468-thumbnail.png",
    },

     // song 2
    {
        songAudio : "Songs/Deewane-Hum-Nahi-Hote(PagalWorldl).mp3",
        songName : "Deewane Hum Nahi Hote",
        authorName : "Aditya Yadav",
        songThumbnail : "https://c.saavncdn.com/228/Deewane-Hum-Nahi-Hote-Slowed-Reverbed-Hindi-2022-20220628202305-500x500.jpg",
    },

     // song 3
    {

        songAudio : "Songs/Aacha Lage Se(PagalWorld.cm).mp3",
        songName : "Aacha Lage Se",
        authorName : "Raju Punjabi",
        songThumbnail : "https://a10.gaanacdn.com/images/albums/69/6024469/crop_480x480_6024469.jpg",
    },

     // song 4
    {
        songAudio : "Songs/Baarishein(PaglaSongs).mp3",
        songName : "Baarishein",
        authorName : "Anuv Jain",
        songThumbnail : "https://c.saavncdn.com/582/Baarishein-Live-Hindi-2022-20220306031135-500x500.jpg",
    },

     // song 5

    {
        songAudio : "Songs/Brown Rang International Villager 128 Kbps.mp3",
        songName : "Brown Rang",
        authorName : "Yo Yo Honey Singh",
        songThumbnail : "https://gp1.wac.edgecastcdn.net/802892/http_public_production/photos/images/17948572/original/crop:x0y0w450h450/hash:1464254720/1395295594_tumblr_m7y2afbGQc1r29nffo1_1343602595_cover.jpg?1464254720",
    },

     // song 6

    {
        songAudio : "Songs/Hasi (Amit Mishra) Hamari Adhuri Kahani - 320Kbps.mp3",
        songName : "Hasi (Hamari Adhuri Kahani)",
        authorName : "Ami Mishra",
        songThumbnail : "https://c.saavncdn.com/656/Hamari-Adhuri-Kahani-Hindi-2015-20190618081903-500x500.jpg",
    },

     // song 7

    {
        songAudio : "Songs/Let-Me-Love-You(PaglaSongs).mp3",
        songName : "Let Me Love You",
        authorName : "Justin Bieber",
        songThumbnail : "https://i1.sndcdn.com/artworks-000194466902-j8j1g2-t500x500.jpg",
    },

     // song 8

    {
        songAudio : "Songs/Maula Mere Maula.mp3",
        songName : "Maula Mere Maula",
        authorName : "Roopkumar Rathod",
        songThumbnail : "https://i0.wp.com/99lyricstore.com/wp-content/uploads/2021/04/Maula2BMere2BMaula2BLyrics2BRoop2BKumar2BRathod.jpg",
    },

     // song 9

    {
        songAudio : "Songs/Tere Hawaale(PagalWorld.cm) (3).mp3",
        songName : "Tere Hawaale",
        authorName : "Arijit Singh, Shilpa Rao",
        songThumbnail : "https://pagalsong.in/uploads//thumbnails/300x300/id3Picture_2053945453.jpg",
    },

     // song 10

    {
        songAudio : "Songs/Tune-Jo-Na-Kaha(PaglaSongs).mp3",
        songName : "Tune Jo Na Kaha",
        authorName : "Mohit Chauhan",
        songThumbnail : "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/New-York-movie-poster.jpg/300px-New-York-movie-poster.jpg",
    },


]



let prograss = document.getElementById("progress");
let song = document.getElementById("song");
let playBtn = document.getElementById("ctrlIcon2");

let songName = document.getElementById("song_name");
let author = document.getElementById("author");
let thumbnail = document.getElementById("music_poster");

let i = 0;      // indicates index of list song_list


song.onloadedmetadata = function(){
    prograss.max = song.duration;       // progress bar will move until song ends
    prograss.value = song.currentTime;      // when song will play progress bar's thumb slider will also move
}


// function created for play / pause the song
function playPause(){
    // To pause the song
    if(ctrlIcon2.classList.contains("fa-pause")){   // it means we have showing pause icon there
        song.pause();       // stop playing song
        thumbnail.style.animation = "";             // removing animation when song is paused
        ctrlIcon2.classList.add("fa-play");        // showing play icon there    
        ctrlIcon2.classList.remove("fa-pause");      // removing pause icon

       
    }
    else{
    // To play the song
        song.play();    // start playing song
        thumbnail.style.animation = "thumbnail_anim 2s linear infinite";    // applying animation when song is playing
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
        thumbnail.style.animation = "thumbnail_anim 2s linear infinite";    // if we move progress slider so when song will played from that point animation will work
        ctrlIcon2.classList.add("fa-pause");
        ctrlIcon2.classList.remove("fa-play");
    }



//   let x = progress.value;

// setTimeout(function(){
//     i++;
//     change_song();
//     console.log(prograss.max*1000);
// },progress.max*1000)
    
//     // if(song.play){
//     //     if(prograss.value == prograss.max) 
//     // }
//     console.log(song.duration*1000);
//     console.log(prograss.max*1000);
}


// Function -> to change the song -:


function change_song(){
    
    song.src = song_list[i].songAudio;      // changing audio source taking it from list we created song_list
    song.play();
    thumbnail.src = song_list[i].songThumbnail;         // changing thumbnail of song
    songName.innerHTML = song_list[i].songName;         // changing name of song
    author.innerHTML = song_list[i].authorName;         // changing author name
    thumbnail.style.animation = "thumbnail_anim 2s linear infinite";    // adding animation when song is playing
    ctrlIcon2.classList.add("fa-pause");
    ctrlIcon2.classList.remove("fa-play");
}


//Function ->  to play next song -:
function nextSong(){
    i++;
    // if we are in last song make i = 0 so if we again press for next song first song will played
    if(i == song_list.length){
        i = 0;
    }

    change_song();      // calling function to change the song 
}


// Function -> to play pervious song -:
function previousSong(){
    i--;
    // if we are in first song make i = last song index so if we again press for previous song last song will played
    if(i < 0) {
        i = song_list.length - 1;
    }
    change_song();      // calling function to change the song 
    
}
