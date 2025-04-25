const sumAll = function(min, max) {
   
    //  Ungültige Eingaben abfangen: Beide Werte müssen positive Ganzzahlen sein:
    if (!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0) return "ERROR";

    // "Swap" mit temporärer Variable – Ziel: Sicherstellen, dass min wirklich der kleinere Wert ist und max der größere, auch wenn sie falsch herum übergeben wurden:
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
      }
   
      // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
    // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
    // if (min > max) [min, max] = [max, min];

    // Eine Schleife von min bis max: von min bis max und zählst die Werte auf:
    let sum = 0;
    for (let i = min; i <= max; i++) {
    sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;


