class Ninja{
    constructor(name){
        this.name = name;
        this.health = 90;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`${this.name}`)
    }
    showStats(){
        console.log(`${this.name}'s stats: | Health:${this.health} | Speed:${this.speed} | Strength:${this.strength} |`)
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name}'s health is now ${this.health}`)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Master Splinter");

superSensei.speakWisdom();

superSensei.showStats();