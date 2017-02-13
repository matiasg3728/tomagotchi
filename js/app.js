var tomagatchi = {

	name:"Titto",
	age:0,
	hunger:10,
	happiness:0,
	isSleeping:'false',
	weapon:"fists",
	finnessablility:0,
	currentForm:"baby",
	isDead:false,
	eat: function(){

		if(this.hunger>0){
		this.hunger-=1;
		this.happiness+=1;
	} else{
		console.log("stop eating, you're looking terribilly fat")
	}

	},
	grow: function(years){
		this.age+=years;
		this.morph();
	},
	setAge: function(pAge){
		this.age=pAge;
		this.morph();
	},
	morph: function(){
		if(this.age>=0 && this.age<2){
			this.currentForm="baby";
		} else if(this.age===2){
			this.currentForm="terrible monster";
		} else if(this.age>2 && this.age<11){
			this.currentForm="kid";
		} else if(this.age>=11 && this.age<13){
			this.currentForm="tween";
		} else if(this.age>=13 && this.age<20){
			this.currentForm="teen";
		} else if(this.age>=20 && this.age<40){
			this.currentForm="adult";
		} else if(this.age>= 40){
			this.currentForm="old person";
		} else if(this.age === 75){
			this.isDead = true;
			document.getElementById('1').src="http://pre09.deviantart.net/5c02/th/pre/i/2014/164/0/1/made_a_poopie_by_carnival_tricks-d7m7tit.png"
		}

		if(this.finnessablility===100){
			this.currentForm="Bill Clinton";
			this.weapon="finnese";
			this.age =null;
		}
	}

}
var hDisplay=document.getElementById("hungerDisplay").appendChild(document.createTextNode(tomagatchi.hunger+""));
var happyDisplay=document.getElementById("happyDisplay").appendChild(document.createTextNode(tomagatchi.happiness+""));
document.getElementById("feed-button").addEventListener("click", function(){
    tomagatchi.eat();
    hDisplay=document.getElementById("hungerDisplay");
    hDisplay.innerHTML="";
	var txt =document.createTextNode(tomagatchi.hunger+"");
	hDisplay.appendChild(txt);

	happyDisplay=document.getElementById("happyDisplay");
    happyDisplay.innerHTML="";
	var txt1 =document.createTextNode(tomagatchi.happiness+"");
	happyDisplay.appendChild(txt1);
});
document.getElementById("lights-button").addEventListener("click", function(){
	switch(tomagatchi.isSleeping){
	case 'true':
		document.body.style.backgroundColor = "white";
		tomagatchi.isSleeping='false';
		break;
	case 'false':
		document.body.style.backgroundColor="black";
		tomagatchi.isSleeping='true';
		break;
}
});
window.setInterval(tomagatchi.grow(1), 100);

