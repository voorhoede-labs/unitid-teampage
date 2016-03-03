(function() {

    var vid = document.getElementById('vid');
    var video_button = document.getElementById('video_button');

    var vid_thing = {

      init: function() {
          return this;
      },

      run: function() {
          this.playForSomeTime(1);
          vid.classList.add('playing');
          return this;
      },

      playForSomeTime: function(seconds) {
        var timeout;
        vid.pause();
        vid.play();
        timeout = setTimeout(function() {
            vid.pause();
        }, seconds * 1000);
      },
    }

    vid.addEventListener('canplay', function() {
      videoo = vid_thing.init();
      videoo.run();
    });

}());
