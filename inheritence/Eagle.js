import { Bird } from "./Bird.js";

export class Eagle extends Bird {
    constructor(name){
        super(name);
        this.lifespan = "25";
        this.food = 'small and medium animals';
        this.features  = "wingspan up to 2.4 m. and excellent eyesight";
        this.animalType = 'eagle';
        this.sound = "";
        this.emoji = '🦅';
    }
}