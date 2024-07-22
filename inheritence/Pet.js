
export class Pet {
    constructor(name, bread){
        this.name = name;
        this.bread = bread;
        this.legCount = 4;
    }

    intro(){
        return `Hello, I am a ${this.animalType} and my name is ${this.name}.`;
    }

    voice(){
        return `${this.name}: ${this.sound}!! ${this.emoji.repeat(this.emojiCount)} - ${this.bread}`;
    }

}