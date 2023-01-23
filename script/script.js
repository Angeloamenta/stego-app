var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },

    methods: {

        elonmusk(sound) {
           var audio = new Audio(sound);
            audio.play();
            console.log("a");
        },

        settete() {
          // var image = document.getElementById('stegoimg')
          var bonus = document.getElementById('bonusbar')

          bonus.classList.toggle("d-none");
          

    
        }
    }
  })