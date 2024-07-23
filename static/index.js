/*
Automobilius:
    - konvertavimas is km i milias

Finansai:
    - konvertavimas is EUR i USD

Matematika:
    - suma
    - skirtumas
    - daugyba
    - dalyba

Text:
    -

Math.floor()
*/

export class Tekstas {
    static firstSymbol(str) {
        return str[0] ?? '';
    }

    static lastSymbol(str) {
        return str.at(-1) ?? '';
    }
}

export function firstSymbol(str) {
        return str[0] ?? '';
    }

export function lastSymbol(str) {
        return str.at(-1) ?? '';
    }

console.log(Tekstas.firstSymbol('Labas'));
console.log(Tekstas.firstSymbol('Rytas'));
console.log(Tekstas.lastSymbol('Labas'));
console.log(Tekstas.lastSymbol('Rytas'));

console.log(firstSymbol('Labas'));
console.log(firstSymbol('Rytas'));
console.log(lastSymbol('Labas'));
console.log(lastSymbol('Rytas'));