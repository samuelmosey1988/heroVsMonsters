"use strict";

function Monster(name, classification, health, isAlive = true){
    LivingThings.call(this, name, health, isAlive) 
    this.classification = classification; 
    console.log(this.name)
    console.log(this.health)
    
}


// const Diet = new Monster ("Diet", "10", isAlive = true)
