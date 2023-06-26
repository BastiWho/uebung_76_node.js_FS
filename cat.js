// Aufgabe 1.1
/*const fs = require('fs');

const Datei = process.argv[2];

const ausgabe = fs.readFileSync(Datei, 'utf8');
console.log(ausgabe);
*/


// Aufgabe 1.2
/*const fs = require('fs');

const Datei = process.argv[2];

try {
  const data = fs.readFileSync(Datei, 'utf8');
  console.log(data);
} catch (err) {
  console.error('Fehler beim Lesen der Datei. Die Datei existiert nicht oder der Name ist falsch geschrieben.');
  process.exit(1);
}
*/


//Aufgabe 1.3
const fs = require('fs');

for (let i = 2; i < process.argv.length; i++) {
  const Datei = process.argv[i];

  try {
    const data = fs.readFileSync(Datei, 'utf8');
    process.stdout.write(data);
    process.stdout.write('\n'); 
  } catch (err) {
    console.error('Fehler beim Lesen der Datei. Die Datei existiert nicht oder der Name ist falsch geschrieben.');
    process.exit(1);
  }
}