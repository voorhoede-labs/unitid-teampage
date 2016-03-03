(function() {

    var vid = document.getElementById('vid');
    var video_button = document.getElementById('video_button');
        var didit = false;

    var vid_thing = {

      init: function() {
        vid.classList.add('visible');
          return this;
      },

      run: function() {

            this.goToPointInVideo(8);
            this.playForSomeTime(1);
          this.attachButtonEvent();
          return this;
      },

      attachButtonEvent: function() {
          video_button.addEventListener('click', function(event) {
            if (this.is_playing) {
                clearTimeout(this.timeout);
                vid.pause();
            } else {
                vid.play();
            }
          }.bind(this));
      },

      goToPointInVideo: function(seconds) {
        vid.pause();
        vid.currentTime = seconds;
        return this;
      },

      playForSomeTime: function(seconds) {
        vid.pause();
        vid.play();
        this.is_playing = true;
        this.timeout = setTimeout(function() {
            vid.pause();
            this.is_playing = false;
        }.bind(this), seconds * 1000);
      },
    }

    vid.addEventListener('canplay', function() {
        if (!didit) {
            didit = true;
            videoo = vid_thing.init();
            videoo.run();
        }
    });

}());
