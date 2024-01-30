const classe = {
    niveau : '4TWIN',
    nombreEtudiants : 32 
};

const newClasse = {
    ...classe,
    email : 'twin@twin.com'
};

console.log(newClasse);

const notes = [10,12,14,16,18];
const newNotes = [...notes,20];
const newNotes2 = [20,...notes];
console.log(newNotes);
console.log(newNotes2);