class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.tilte1 = createElement('h2');
      this.try = createElement('h2');
      this.boost = createButton('boost');
      this.reset = createButton('Reset');

      this.load = createButton('load');
      this.load1 = createButton('load2');
      this.load2 = createButton('load3');
      
      //text("enter name to start",100,100);

    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.try.hide();
      

    }
  display(){
    
      this.title.html(" CAR RACING GAME");

      this.title.position(displayWidth/2.21 - 70, 100);
      this.try.html("enter  name  to  start");
      this.try.position(displayWidth/2.21 - 45,210);
           
      this.input.position(displayWidth/2.2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2.6 + 40, displayHeight/2);
      this.reset.position(displayWidth-660,384);
      this.boost.position(displayWidth/2.3 + 40, displayHeight/2);
      //text.visibibily = 255;
      this.load.position(-55,400);
      this.load2.position(-55,200);
      this.load1.position(-55,300);

this.button.mousePressed(()=>{
  background(mouseX,mouseY,255);
     this.input.hide();
        this.button.hide();
        this.try.hide();
        player.name = this.input.value();
        playerCount += 1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello : " + player.name)
        this.greeting.position(displayWidth/2.2 - 70, displayHeight/20);
        this.reset.position(displayWidth-160,50);
        this.boost.position(1250,20);

        this.load2.position(55,200);
        this.load1.position(55,300);
        this.load.position(55,400);
       
  
      });

      this.boost.mousePressed(()=>{
        player.distance +=18;
        player.update();
      });

      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
      this.load.mousePressed(()=>{
        track = loadImage("images/track_2.jpg");
       
      });
       
      this.load2.mousePressed(()=>{
        track = loadImage("images/track_1.jpg");
      });
       
      this.load1.mousePressed(()=>{
        
         track = loadImage("images/track_4.jpg");
      });


      if(player.distance > 3600){
        this.load.position(-55,400);
        this.load2.position(-55,200);
        this.load1.position(-55,300);
        this.reset.position(200,200);
        this.boost.position(1250,20);

        gameState = 2;
        game.update(1);
       
      }
      
    }

    
  }
  