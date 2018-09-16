const http = new EasyHTTP;

// Get Post

let g = http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log(data));
 console.log(g);


                



// User dada
const data = {
    name: 'Jone Doe',
    username: 'Shajal',
    email: 'shajalkumer@gmail.com'
};

// Create Post 

//  http.post('https://jsonplaceholder.typicode.com/users', data)
//  .then(data => console.log(data))
//  .catch(err => console.log(err));

// Update Post

//  http.put('https://jsonplaceholder.typicode.com/users/2', data)
//  .then(data => console.log(data))
//  .catch(err => console.log(err));

// DELETE User

//  http.delete('https://jsonplaceholder.typicode.com/users/2', data)
//  .then(data => console.log(data))
//  .catch(err => console.log(err));
