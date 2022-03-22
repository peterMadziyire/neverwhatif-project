const Pool= require('pg').Pool;
require('dotenv').config();



const devConfig= {
    // user: process.env.PG_USER,
    // password: process.env.PG_PASSWORD,
    // host: process.env.PG_HOST,
    // port: process.env.PG_PORT,
    // database: process.env.PG_DATABASE

    // {
    //     "name": "testname",
    //     "lastname": "testsurname",
    //     "subject":"test my subject",
    //     "email": "test@email.com",
    //     "time":"10/10/21"
        
    //     }

    user: 'postgres',
    password: 'password',
    host: 'localhost',
    port: 5432,
    database: 'messages'

}

const proConfig = {

    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized:false
    }
}

const pool= new Pool(process.env.NODE_ENV==="production" ? proConfig : devConfig);

module.exports= pool;