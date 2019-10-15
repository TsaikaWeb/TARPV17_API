const http = new myHTTP;


const users = http.get('https://jsonplaceholder.typicode.com/users')
.then(data => console.log('DATA Recieved:', data))
.catch(error => console.log(error));