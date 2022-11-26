
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },

    methods: {

        elonmusk(sound) {
           var audio = new Audio(sound);
            audio.play();
        }
    }
  })