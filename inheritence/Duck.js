import { Bird } from "./Bird.js";

export class Duck extends Bird {
    constructor(name){
        super(name);
        this.legCount = 2;
        this.lifespan = '10-15';
        this.food = 'small fish, insect larvae, shellfish and aquatic plants';
        this.features  = "I can swim, dive and fly";
        this.animalType = 'duck';
        this.sound = "quack";
        this.emoji = '🦆';
        this.emojiCount = 3;
    }
}