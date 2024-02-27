//api call

// fetch('https://jsonplaceholder.typicode.com/users')
// // this is an api promises
// .then(Response =>Response.json())
// .then (data => console.log(data))
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}