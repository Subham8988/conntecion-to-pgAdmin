// const {pg} = require('pg');

//  object 
// const connection_object = ({
//     host: 'localhost', // server name or IP address;
//     port: 5432,
//     database: 'user',
//     user: 'subham',
//     password: 'subham'
// });

// connection_object.connect(connection_object);


// alternative:  by creating conn string
// var  connectionString = 'postgres://username:password@host:port/database';


// sol by chatgpt

const { Client } = require('pg');

const client = new Client({
//   user: 'your-username',
//   host: 'your-host',
//   database: 'your-database',
//   password: 'your-password',
//   port: your-port
    host: 'localhost', // server name or IP address;
    port: 5432,
    database: 'user',
    user: 'postgres',
    password: 'subham'
});
client.connect( (err) => {
     if (err) {
      console.error('connection error', err.stack);
    } else {
      console.log('connected');
    }
  });
  