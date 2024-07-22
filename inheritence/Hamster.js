import { Pet } from "./Pet.js";

export class Hamster extends Pet {
//copy-paste PET {}
//constructor() {}
//intro() {}
//voice() {}

    constructor(name, bread) {
        super(name);
        this.bread = bread;
        this.animalType = 'hamster';
        this.sound = 'Pip-pip';
        this.emoji = '🐹';
        this.emojiCount = 5;
    }
}