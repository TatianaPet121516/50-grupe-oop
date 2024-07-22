import { Dog } from "./inheritence/Dog.js";
import { Cat } from "./inheritence/Cat.js";
import { Hamster } from "./inheritence/Hamster.js";

import { Shark } from "./inheritence/Shark.js";
import {GoldenFish} from "./inheritence/GoldenFish.js";
import { Dolphin } from "./inheritence/Dolphin.js";

import { Penguin } from "./inheritence/Penguin.js";
import { Eagle } from "./inheritence/Eagle.js";
import { Duck } from "./inheritence/Duck.js";

console.clear();
console.log('-------------------');

const rexas = new Dog ('Rex', 'terjeras');
console.log(rexas.intro());
console.log(rexas.voice());

const briusius = new Dog ('Briusius', "taksas");
console.log(briusius.intro());
console.log(briusius.voice());

const rainis = new Cat ('Rainis', "bengalas");
console.log(rainis.intro());
console.log(rainis.voice());

const tom = new Cat ('Tom', "animacinis");
console.log(tom.intro());
console.log(tom.voice());

const mini = new Hamster ('Mini', "džungarinis");
console.log(mini.intro());
console.log(mini.voice());

console.log('-------------------');

const nemo = new Shark ('Nemo');
console.log(nemo.intro());
console.log(nemo.voice());

const bonny = new GoldenFish ('Bonny');
console.log(bonny.intro());
console.log(bonny.voice());

const flipper = new Dolphin ('Flipper');
console.log(flipper.intro());
console.log(flipper.voice());

console.log('-------------------');
const jacob = new Eagle ('Jacob');
console.log(jacob.intro());
console.log(jacob.voice());
console.log(jacob.additionalInfo());

console.log('-------');
const pino = new Penguin ('Pino');
console.log(pino.intro());
console.log(pino.voice());
console.log(pino.additionalInfo());

console.log('-------');
const donald = new Duck ('Donald');
console.log(donald.intro());
console.log(donald.voice());
console.log(donald.additionalInfo());
