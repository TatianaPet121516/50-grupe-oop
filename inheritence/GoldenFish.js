import { Fish } from "./Fish.js";

export class GoldenFish extends Fish {
    constructor(name){
        super(name);
        this.animalType = 'Golden fish';
        this.finCount = 7;      
        this.sound = 'wish';
        this.emoji = '🐟';
        this.emojiCount = 3;
    }
}