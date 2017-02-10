// Name Property
// Age Property
// Hunger Value Property
// Happiness Property
// Sleeping Property (boolean)
// Eat Method
// Morph Method
// Go To Sleep Method

var tomagotchi = {
  name: "Khaled",
  age: 0,
  hunger: 10, // 1 to 10 scale 10 being hungriest
  happiness: 0, //0 to 10 scale 0 being the least happy
  isSleeping: false,
  currentForm: "Baby",
  life: true,
  eat: function(){
    this.hunger -= 3;
    hungerMeter.innerHTML =  "Hunger Meter: " + tomagotchi.hunger
  },
  checkMorph: function(){
    if(this.age === 0){
      this.currentForm = "Baby";
    }else if(this.age <= 5){
      this.currentForm = "Kiddo";
    }
  },
  gainAge: function(){
    this.age += 5;
    this.checkDeathByAging();
    this.checkMorph();
  },
  checkDeathByAging: function(){
    if(this.age > 10){
      this.die();
    }
  },
  die: function(){
    this.life = false;
    console.log("RIP " + this.name + " is Dead");
  }
}

var feed = document.getElementById("feed-button");
var hungerMeter = document.getElementsByTagName("h2")[0];

feed.addEventListener('click', function(){
  tomagotchi.eat();
});

var i = 1;

setInterval(function(){
  var firstDiv = document.getElementById(i);
  firstDiv.classList.add("hidden");
  if(i % 4 === 0){
    i = 1;
  }else{
    i += 1;
  }
  var secondDiv = document.getElementById(i);
  secondDiv.classList.remove("hidden");
}, 1000);
