async function  getData() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data);

}
getData();