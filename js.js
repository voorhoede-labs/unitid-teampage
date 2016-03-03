(function(win) {

    var vid = document.getElementById('vid');
        var didit = false;
        var duration = 10;
        var timestamps = {
            'laura': 5,
            'mike': 26,
            'sophie': 52,
            'puck': 72.4,
            'jane': 106,
            'matthijs': 133,
            'hylke': 150
        };

    var vid_thing = {

      init: function() {
        vid.classList.add('visible');

          return this;
      },

      run: function() {
        win.addEventListener('hashchange', function(event) {
              var person = window.location.hash.replace('#', '');
              this.goToPointInVideo(timestamps[person]);
              vid.play();
              // this.playForSomeTime(duration);
        }.bind(this));
        vid.play();
            // this.goToPointInVideo(8);
            // this.playForSomeTime(1);
          return this;
      },

      goToPointInVideo: function(seconds) {
        vid.pause();
        vid.currentTime = seconds;
        clearTimeout(this.timeout);
        return this;
      },

      playForSomeTime: function(seconds) {
        vid.pause();
        vid.play();
        this.timeout = setTimeout(function() {
            vid.pause();
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

}(window));
