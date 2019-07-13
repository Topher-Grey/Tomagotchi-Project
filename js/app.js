const game = {

  time: 0,
  experiment: 0,
  tamagotchi: [],

  loadScreen(){
    $askForName = $('<div/>').attr('id', 'askForName');
    $textBox = $('<input/>').attr('size', '20');
    $askForName.append($textBox);
    $('main').append($askForName);


  },

  itsAlive(){

  },



  setTimer(){
    const timer = setInterval(() => {
      this.time++;
      $('#age').text(`Organism Age: ${this.age}`);
      $('#timer').text(`Experiment Time: ${this.time}s`);

    }, 1000);
  }
	

}

game.loadScreen();
