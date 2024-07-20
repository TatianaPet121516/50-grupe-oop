export class Dog {
    constructor(vardas, kailioSpalva, amzius) {
        this.name = vardas;
        this.furColor = kailioSpalva;
        this.age = amzius;
        this.legsCount = 4;
        this.hasTail = true;
    }

    birthday(){
        this.age++;
        return`Suns ${this.age} gimtadienis!`;
    }

    lostLeg(){
        if (this.legsCount === 0) {
            return `Suo jao turi 0 koju... Daugiau nera ko prarasti`;
        }

        this.legsCount--;
        return `Suo prarado koja... 😪 `;
    }

    hi(){
        return'Suo sako: au au!';
    }

    think(){
        return "Suo galvoja: 🍗🍗🍗";
    }

    addNumbers(a,b){
        if (a+b < 0){
            return "Suo yra liudnas... Negali suskaiciuoti negatyvaus kailu kiekio :(";
        }
        return `Suo suskaiciavo: ${a} + ${b} = ${'🍗'.repeat(a+b)}`;
    }

    manyChickenLeg (count) {
        return `Many Chicken Leg: ${'🍗'.repeat(count)}`;
    }
}