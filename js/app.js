const game = {

  time: 0,
  experiment: 0,
  tamagotchi: [],

  loadScreen(){
    $askForName = $('<div/>').attr('id', 'askForName');
    $message = $('<p></p>').text("Please enter name for your organism:");
    $textBox = $('<input/>').attr('size', '20');
    $nameButton = $('<button/>').attr('id', 'nameButton').text("Name Selected");
    $askForName.append($message);
    $askForName.append($textBox);
    $askForName.append($nameButton);
    $('main').append($askForName);


  },

  itsAlive(){

    this.tamagotchi[experiment] = new Tamagotchi;

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

$('main').on('click', function(e){

  if(e.target == $('#nameButton')){
    
  }


  
})
