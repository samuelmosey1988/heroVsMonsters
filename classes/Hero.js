"use strict";

function Hero (name, secretIdendtity, health, isAlive = true){
   LivingThings.call(this, name, health, isAlive)
   this.secretIdendtity = secretIdendtity
  
    // this.name = name
    // this.health = health
    // this.secretIdendtity = secretIdendtity
    // this.isAlive = isAlive

}

Hero.prototype = Object.create(LivingThings.prototype)
Hero.prototype.constructor = Hero; 

Hero.prototype.fight = function (monstersArray){
    this.attack()
    console.log(monstersArray)
    for(let i = 0; i < monstersArray.length; i++){
        //console.log(monstersArray[i])
        this.attack(monstersArray[i])
        monstersArray[i];
       
    }
}

Hero.prototype.attack = function(monsterObj) {
    this.damage = Math.floor(Math.random() * 10 + 2)
    this.health - this.damage; 
    console.log(monsterObj)
    console.log(this.name)
    console.log(this.damage)
    console.log("Superman's health is " + this.health + " was reduced by " + this.damage)
    //console.log(monsterObj)

}

