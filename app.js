const http = new myHTTP;


/*const users = http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log('DATA Received:', data))
.catch(error => console.log(error));*/

const url = 'https://jsonplaceholder.typicode.com/users';

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

/* http.post(url, data) */
http.put('https://jsonplaceholder.typicode.com/users/2', data)
.then(data => console.log(data))
.catch(error => console.log(error));