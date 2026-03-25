const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

const reversedTeachers = [];

for (i = (teachers.length - 1); i >= 0; i-- ) { // partiamo dall'ultimo indice dell'array; ripeti ogni volta che i e' maj o uguale a 0, ogni ciclo arretra di 1 posizione
    const currentTeacher = teachers[i]; // prendi come current teacher quello che ha i come indice
    reversedTeachers.push(currentTeacher); // pusha il currentTeacher nell'array
}

 console.log(reversedTeachers); //stampami il nuovo array - ta daaaaaaaaa!!!

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = []; // creo l'array

for (i = 0; i < teachers.length; i++) {  // scorri tutto l'array (for) MI RACCOMANDO SEMPRE MINORE DELLA LUNGHEZZA 
                                          // ALTRIMENTI INCONTRA UN VALORE INDEX CHE NON ESISTE E TI FA PERDERE 80 ANNI
                                          // PROPRIO COME OGGI
    const currentTeacherOne = teachers[i]; // assegno variabile di appoggio per insegnante ciclo corrente

    if ((teachers[i]).length >= 5) {   //SE la lunghezza del valore ciclo corrente e maj o uguale a 5 caratteri
        longNames.push(currentTeacherOne); // aggiungo all'array

    }
}
 console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers

let indexEd = teachers.indexOf("Ed");

if (indexEd !== -1) {
  teachers.splice(indexEd, 1)
}

console.log(teachers);

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;