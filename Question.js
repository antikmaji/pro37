class Question {
  constructor() {

    this.question=createElement('h2')

  }

  hide()
  {
    this.question.hide()
  }

  display(){

    var mqg=createElement('h1')
    mqg.html("My Quiz Game");
    mqg.position(410,20)
  
    this.question.html("What starts with 'E' and ends with 'E' but it has only one letter in it?");
    this.question.position(70,100)
   
    var answer1=createElement('h3')
    answer1.html("A)Envelope");
    answer1.position(220,200)

    var answer2=createElement('h3')
    answer2.html("B)Edge");
    answer2.position(520,200)

    var answer3=createElement('h3')
    answer3.html("C)Eagle");
    answer3.position(220,250)

    var answer4=createElement('h3')
    answer4.html("D)Eve");
    answer4.position(520,250)

    var input = createInput("Name");
    var input2 = createInput("Option number");
    var button = createButton('Submit');
    
    input.position(130, 350);
    input2.position(355, 350);

    button.position(555, 350);

    button.mousePressed(()=>{
      input.hide();
      input2.hide();

      var button2 = createButton('Veiw Results');
      button2.position(555, 350);

      input=this.input.value();
       
      contestantCount+=1;
      contestant.index=contestantCount
      contestant.update()
      contestant.updateCount(contestantCount);

    });
  
  }
}

  