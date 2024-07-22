import { Fish } from "./Fish.js";

export class Shark extends Fish {
    constructor(name){
        super(name);
        this.animalType = 'Shark';    
        this.sound = 'r-r-r';
        this.emoji = '🦈';
    }
}