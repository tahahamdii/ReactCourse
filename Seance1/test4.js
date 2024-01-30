const users = ['karim','taha','ahmed'];
const [user1,user2,user3] = users;

console.log(user1);
console.log(user2);
console.log(user3);

function getUser () {
    return {
        username: 'karim',
        email: 'karim@gmail.com'
    };
}

const {username,email} = getUser();
console.log(username);
console.log(email);