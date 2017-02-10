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
