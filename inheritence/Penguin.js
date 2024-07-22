import { Bird } from "./Bird.js";

export class Penguin extends Bird {
    constructor(name){
        super(name);
        this.legCount = 2;
        this.lifespan = "15-20";
        this.food = 'small fish, insect larvae, shellfish and aquatic plants';
        this.features  = "I can swim well underwater but I can’t fly";
        this.animalType = 'penquin';
        this.sound = "chirp";
        this.emoji = '🐧';
        this.emojiCount = 5;
    }
}