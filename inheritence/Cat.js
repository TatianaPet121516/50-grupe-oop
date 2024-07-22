import { Pet } from "./Pet.js";

export class Cat extends Pet {
//copy-paste PET {}
//constructor() {}
//intro() {}
//voice() {}

    constructor(name, bread) {
        super(name);
        this.bread = bread;
        this.animalType = 'cat';
        this.sound = 'Miau';
        this.emoji = '🐈';
        this.emojiCount = 2;
    }
}