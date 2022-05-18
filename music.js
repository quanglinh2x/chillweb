const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playBtn = $('.playBtn')
const prevBtn = $('.prev-btn')
const nextBtn = $('.next-btn')
const app = {
    currentIndex: 0,
    isPlaying:false,
    songs: [
        {
        name: "Clockwork Orange",
        singer: "Slow Brew",
        path: "https://dl.dropboxusercontent.com/s/2k2wghc7alsoe91/Clockwork%20Orange%20-%20Slow%20Brew%20-%20Lifted%20LoFi%20Records.mp3?dl=0",
        image: "https://images.squarespace-cdn.com/content/v1/55d66d57e4b0f5f10adee0cb/1440116231583-U4S1CXXRC5VUL01S055Q/clockwork-orange.jpg"
        },
        {
        "name": "Su-zuum",
        singer: "tayutau",
        path: "https://dl.dropboxusercontent.com/s/qc9ut78p7u9z8dz/20.%20su-zuum%20-%20tayutau.mp3?dl=0",
        image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
        },
        {
        "name": "This Cant Be The End",
        singer: "Lofi",
        path: "https://dl.dropboxusercontent.com/s/tekpv6wv73i33cg/%285%29%20This%20Cant%20Be%20The%20End.mp3?dl=0",
        image: "https://cellphones.com.vn/sforum/wp-content/uploads/2018/11/2-9.png"
        },
        {
        "name": "Breathe",
        singer: "Aya",
        path: "https://dl.dropboxusercontent.com/s/2snj7y67gtqziej/breathe-%20arya.mp3?dl=0",
        image: "https://img.websosanh.vn/v2/users/review/images/4wvuq0i4ozs1q.jpg?compress=85"
        },
        {
        "name": "Chilliax",
        singer: "Beyond",
        path: "https://dl.dropboxusercontent.com/s/h7ptgueu6q19w8r/Chilliax%20-%20Beyond.mp3?dl=0",
        image: "https://pdp.edu.vn/wp-content/uploads/2021/01/hinh-anh-cute-de-thuong.jpg"
        }
        
    ],
    
    loadCurrentSong: function() {
        audio.src = this.songs[this.currentIndex].path;
        $('.songs').innerHTML =  `
        <p class="song">${this.songs[this.currentIndex].name}</p>
        `
  
    },
    handleEvents: function() {
        const _this = this
        playBtn.onclick = function () {
            if (_this.isPlaying) {
              audio.pause();
            } else {
              audio.play();
            }
          };
          $('#volume-music').addEventListener('input', function (e) {
            audio.volume=e.currentTarget.value/100;
            if (e.currentTarget.value/100>0){
              audio.play();
              audio.volume=e.currentTarget.value/100;
            }
          })
          // When the song is played
        audio.onplay = function () {
            _this.isPlaying = true;
            $('.playBtn .play').classList.add("playing");
            $('.playBtn .pause').classList.add("playing");
            $('#volume-music-range').style.width ="100%";
            $('#dot__volume-music').style.left ="118px";
          };
      
          // When the song is pause
        audio.onpause = function () {
            _this.isPlaying = false;
            $('.playBtn .play').classList.remove("playing");
            $('.playBtn .pause').classList.remove("playing");
            $('#volume-music-range').style.width ="0%";
            $('#dot__volume-music').style.left ="18px";
          };
        audio.onended = function (){
          _this.nextSong()
          audio.play();
        }
        nextBtn.onclick = function () {
            
            _this.nextSong();
            audio.play();
            
          };
      
          // When prev song
          prevBtn.onclick = function () {
             _this.prevSong();
            audio.play();
            _this.render();
            _this.scrollToActiveSong();
          };
    },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
          this.currentIndex = 0;
        }
        this.loadCurrentSong();
      },
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
          this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
      },
    start: function() {
        
        this.loadCurrentSong();
        audio.pause();
        

        this.handleEvents();
    }
}

app.start()
