 $(function() {

     // 音乐的隐藏锁定事件
     $('div.lock').click(function() {
          console.log($($(this).find('span'))[0]);
      $(this).find('span').toggleClass('music-lock-open');
      $(this).find('span').toggleClass('music-lock');
         var a =1;
        // console.log(a);
         if (a===1) {
             $('#bottom_music').mouseleave(function() {
                // console.log($(this).css('height'));
                 if (parseInt($(this).css('height')) >50) {
                     $(this).css({ 'height': '3px' });
                 } else {
                     $(this).css({ 'height': '60px' });
                 }
             })
             return a =2;
         } else {
             $('#bottom_music').mouseleave(function(){
                 return a=1;
             })
         }
    
     
     })
     $('div.lock').trigger('click');

     var music = document.getElementById('music');
     var musicList = ['Be With you', 'Beauty', 'Time', 'Reign', 'survivor', 'The Party Troll'];

     //点击切换上一首/下一首歌曲
     var zsh = 0;
     $("#nextmusic").click(function() {
         zsh += 1;
         if (zsh > 4) {
             zsh = 0;
         }
         changeMusic(zsh);
     });

     $("#prevmusic").click(function() {
         zsh -= 1;
         if (zsh < 0) {
             zsh = 4;
         }
         changeMusic(zsh);
     });


     //更改音乐名称
     function changeMusicName(index) {
         console.log(music);
         $('span#thisSong').text(musicList[index]);
     }

     function showMusicTime(data) {
         $('span#songTime').text(data[2] + ":" + data[3] + "/" + data[0] + ":" + data[1]);
     }

     function showVoice(voice) {
         $('#thisVoice').text('Vol:' + voice * 100 + '%');
     }



     //更改音乐
     function changeMusic(index) {
         $(".songName").removeClass('activemusic');
         $($('.songName')[index]).addClass('activemusic');
         // console.log($())
         $('#musics').empty();
         $('#musics').html('<audio src=" music/' + musicList[index] + '.mp3 " id="music"></audio>');
         music = document.getElementById("music");
         // music.play();
         changeMusicName(index);
     }







     //音乐的控制开关函数:
     var musicControl = function(music) {
         if (music.paused) {
             music.play();
             $('.tusiji').fadeIn();
             $("#controller").find('i')[0].className = 'music-media-pause';
         } else {
             music.pause();
             $('.tusiji').fadeOut();
             $("#controller").find('i')[0].className = 'music-media-play';
         }

     }

     //获取音乐的信息
     var musicData = function(music) {
         // console.log(music.src.split('.mp3'));
         //音乐时长:
         var music_time = music.duration;
         //当前音乐时间
         var now_time = music.currentTime;

         var minutes = parseInt(music_time / 60);
         var seconds = parseInt(music_time - minutes * 60);
         minutes = minutes < 10 ? '0' + minutes : minutes;
         seconds = seconds < 10 ? '0' + seconds : seconds;

         //返回播放时长
         var seconds_now = parseInt(now_time % 60);
         var minutes_now = parseInt(now_time / 60);
         seconds_now = seconds_now < 10 ? '0' + seconds_now : seconds_now;
         minutes_now = minutes_now < 10 ? '0' + minutes_now : minutes_now;
         // console.log(minutes);
         var rate = parseFloat(now_time / music_time);
         var voice = music.volume;
         return [
             minutes, //分钟
             seconds, //秒数
             minutes_now, //当前分数
             seconds_now, //当前秒钟
             rate,
             voice,
         ]
     }


     music.volume = 0.5;
     //更改当前时间以及音量
     function changeMusicTime(music, n) {
         // console.log(music);
         music.currentTime = music.duration * n;
     }

     function changeMusicVolume(music, m) {
         music.volume = m;
         // console.log(music.volume);
     }

     $('.progress').click(function(e) {
         var left = $(this)[0].offsetLeft + $('#zshMusic')[0].offsetLeft + $('.mainMsg')[0].offsetLeft;
         var leftP = e.pageX;
         var rong = parseInt(leftP - left) / parseInt($(this).css('width'));
         changeMusicTime(music, rong);
     });

     $('.voice').click(function(e) {
         var left2 = $(this)[0].offsetLeft + $('#zshMusic')[0].offsetLeft + $('.mainMsg')[0].offsetLeft;
         var leftP2 = e.pageX;
         var rong2 = (parseInt(leftP2 - left2)) / parseInt(($(this).css('width')));
         changeMusicVolume(music, rong2);
         // console.log(rong2/4);
         $('.insideVic').css({ 'width': parseInt(musicData(music)[5] * 100) });
         showVoice(musicData(music)[5]);
     });





     setInterval(function() {
         $('.insidePro').css({ 'width': parseInt(musicData(music)[4] * 300) });
         $('.proBall').css({ 'left': parseInt(musicData(music)[4] * 300)-5 });
         showMusicTime(musicData(music));
         if (music.ended) {
             console.log('end=>next');
             zsh += 1;
             if (zsh > 4) {
                 zsh = 0;
             }
             changeMusic(zsh);
             music.paly();
         }
         // console.log(musicData(music)[4]*300);
     }, 500);



     $('#controller').click(function() {
         musicControl(music);
     })

 })