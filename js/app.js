const game = {
  //Game variables on global scope
  time: 0,
  //Variable keeping track of which experiment started
  experiment: 0,
  //Array holding each organism object
  tamagotchi: [],
  //Function to place HTML elements onto screen
  loadScreen(){
    //Hide the hard coded infobar that will give status info
    $('#infobar').hide()
    //Create HTML elements with ID attributes
    $askForName = $('<div/>').attr('id', 'askForName');
    $message = $('<p></p>').text("Please enter name for your organism:");
    $textBox = $('<input/>').attr({
      id: 'nameText',
      //Set sizw for text input for name
      size: '35'
    });
    $nameButton = $('<button/>').attr('id', 'nameButton').text("Name Selected");
    $askForName.append($message);
    $askForName.append($textBox);
    $askForName.append($nameButton);
    //Add HTML elements to page
    $('main').append($askForName);


  },

  itsAlive(name){
    //Create new organism
    this.tamagotchi[experiment] = new Tamagotchi(name);
  },
  setTimer(){
    //Create and start timer for page
    const timer = setInterval(() => {
      this.time++;
      //Update infobar
      $('#age').text(`Organism Age: ${game.tamagotchi[experiment].age}`);
      $('#timer').text(`Experiment Time: ${this.time}s`);

    }, 1000);
  }
	

}
//Start app
game.loadScreen();

//Event listener on Main HTML element
$('main').on('click', function(e){

  //Accept name from load screen
  if(e.target.id == 'nameButton'){
    $('#infobar').show();
    $('#askForName').hide();
    game.itsAlive($('#nameText').val());
    game.setTimer();

  }



})
