import { Pet } from "./Pet.js";

export class Dog extends Pet {
//copy-paste PET {}
//constructor() {}
//intro() {}
//voice() {}

    constructor(name, bread) {
        super(name);
        this.bread = bread;
        this.animalType = 'dog';
        this.sound = 'Au';
        this.emoji = '🐕';
        this.emojiCount = 4;
    }
}



