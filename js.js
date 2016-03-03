(function() {

    var vid = document.getElementById('vid');
    var vid_thing = {

      init: function() {
          console.log('running');
          return this;
      },

      run: function() {
          return this;
      }
    }

    vid.addEventListener('canplay', function() {
      vid_thing.init();
    });

}());
