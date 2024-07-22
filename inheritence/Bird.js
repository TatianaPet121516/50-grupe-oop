export class Bird {
    constructor(name){
        this.name = name;
        this.legCount = 2;
        this.lifespan = '';
        this.food = '';
        this.features  = '';
        this.animalType = '';
        this.sound = "";
        this.emoji = '🐦';
        this.emojiCount = 1;
    }

    intro(){
        return `Hello, I am a ${this.animalType} and my name is ${this.name}.`;
    }

    voice(){
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)}`;
    }

    additionalInfo() {
        return `My lifespan is ${this.lifespan} years. I eat ${this.food}. My features: ${this.features}.`
    }
}