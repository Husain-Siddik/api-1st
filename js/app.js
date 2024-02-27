// api


function lodeData2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => lodeUsers(data))
}

// alada abe ai  nicer fuction call korle output asbe na

function lodeUsers(data) {
   const ul = document.getElementById('user-list');

   for( user of data){
    const li  = document.createElement('li');
    li . innerText = user.name;

    const li2 = document.createElement('li');
    li2.innerText = user.email;
    
    ul.appendChild(li);
    ul.appendChild(li2)
   }
    
}