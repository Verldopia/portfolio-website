(() => {
    const app = {
        init () {
          this.generateTimeForBelgium();
          this.generateInterval();
        },
        generateTimeForBelgium () {
          let today = new Date();
    
          let hours = today.getHours();
          hours = hours < 10 ? "0" + hours : hours;
          let minutes = today.getMinutes();
          minutes = minutes < 10 ? "0" + minutes : minutes;
          let seconds = today.getSeconds();
          seconds = seconds < 10 ? "0" + seconds : seconds;
          
          document.querySelector('.time-belgium').innerHTML = `Time in Belgium is ${hours}:${minutes}:${seconds}`;
        },
        generateInterval() {
          setInterval(this.generateTimeForBelgium, 1000);
        }
    };
    app.init();
})();