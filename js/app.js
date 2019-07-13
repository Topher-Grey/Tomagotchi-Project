const game = {

  time: 0,
  experiment: 0,
  tamagotchi: [],

  loadScreen(){
    $('#infobar').hide()
    $askForName = $('<div/>').attr('id', 'askForName');
    $message = $('<p></p>').text("Please enter name for your organism:");
    $textBox = $('<input/>').attr({
      id: 'nameText',
      size: '35'
    });
    $nameButton = $('<button/>').attr('id', 'nameButton').text("Name Selected");
    $askForName.append($message);
    $askForName.append($textBox);
    $askForName.append($nameButton);
    $('main').append($askForName);


  },

  itsAlive(name){

    this.tamagotchi[experiment] = new Tamagotchi(name);

  },



  setTimer(){
    const timer = setInterval(() => {
      this.time++;
      $('#age').text(`Organism Age: ${game.tamagotchi[experiment].age}`);
      $('#timer').text(`Experiment Time: ${this.time}s`);

    }, 1000);
  }
	

}

game.loadScreen();

$('main').on('click', function(e){


  if(e.target.id == 'nameButton'){
    $('#infobar').show();
    $('#askForName').hide();
    game.itsAlive($('#nameText').val());
    game.setTimer();

  }



})
