import { Fish } from "./Fish.js";

export class Dolphin extends Fish {
    constructor(name){
        super(name);
        this.animalType = 'Dolphin';     
        this.sound = 'creak-creak';
        this.emoji = '🐬';
        this.emojiCount = 2;
    }
}