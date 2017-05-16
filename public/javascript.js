

 // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      var hero = "Gohan"
      const Dragon = "2w2lO_pyEbQ"
      const Gohan = 'BNkX6azpxUg';
      const Goku = 'bFIqClAu8e4';
      const Vegeta = 'dQol8rE3cA8';
      const Goten = "fY3ljgGgILk";
      const Trunks = "2YmVMC9wCdw";



      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady(event) {

        $('.each-hero').on('click',function (event) {
           hero = Goku
          let clicked = event.target.textContent;
          // console.log(event.target.textContent)
          if (clicked.includes("Dragon Ball")) {
           hero = Dragon
           whichHero(event)
          }
          else if (clicked.includes("Goku")) {
           hero = Goku
           whichHero(event)
          }
          else if (clicked.includes("Gohan")) {
           hero = Gohan
           whichHero(event)
          }
          else if (clicked.includes("Vegeta")){
           hero = Vegeta
           whichHero(event)
          }
          else if (clicked.includes("Trunks")){
           hero = Trunks
           whichHero(event)
          }
          else if (clicked.includes("Goten")){
           hero = Goten
           whichHero(event)
          } else {
            return null
          }

        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: hero, //This is which video will play.
          events: { // object specifying player parameters
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        })
        });
      }


      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          // setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
