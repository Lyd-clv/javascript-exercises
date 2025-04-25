// const repeatString = function(string, num) {
//     let result ="heyheyhey"; // Hardcoded!❌

//     for (let i = 0; i < 3; i++) { // Schleife läuft immer 3x, nicht dynamisch ❌
//         console.log(i); // Gibt nur Zahlen aus, kein Ergebnis ❌
//       }
//     return result; // Gibt immer "heyheyhey" zurück ❌
// };




// Code funktioniert (passed Test), ist aber nicht sauber.
// Hier die saubere Lösung:

const repeatString = function (word, times) {
  if (times < 0) return "ERROR";
  let string = "";
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};
 
/* --> Funktionalität: Baut das Ergebnis durch Schleife auf
--> Schleife: Läuft times-mal (dynamisch)
--> Fehlerbehandlung: gibt "ERROR" bei negativen Zahlen zurück
--> Rückgabe: hängt vom word und times ab */

// Do not edit below this line
module.exports = repeatString;