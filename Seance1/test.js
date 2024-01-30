const person = {
    name: 'John',
    age: 20,
    address: {
        city: 'New York',
        country: 'USA'
    },
    afficherEmail: function() {
        console.log(`Mon nom est ${this.name} et j'ai ${this.age} ans.`);
    }
};

const objet = Object.create(person);
objet.name = 'Jean';
objet.age = 30;
objet.afficherEmail();
