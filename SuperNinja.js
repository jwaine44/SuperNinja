class Ninja {
    constructor(name, health) {
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = health;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Strength: ${this.strength}, Health: ${this.health}`);
    }
    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 15);
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(name, health) {
        super(name, health);
        this.speed = 10;
        this.strength = 10;
        this.health = 200;
        this.wisdom = 10;
    }
    speakWisdom(){
        const msg = super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();