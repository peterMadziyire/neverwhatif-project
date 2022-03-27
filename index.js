const nodemailer= require('nodemailer');
const express = require('express');
const app = express();
const cors= require('cors');
const path= require('path');
const pool= require('./db');
require('dotenv').config();
const port= process.env.PORT||5001


//middleware
app.use(cors());
app.use(express.json())

app.use(express.static(path.join(__dirname, 'client/build')));

// if (process.env.NODE_ENV==='production') {

// app.use(express.static(path.join(__dirname, 'client/build')));

// }
//ROUTES

//get all messages

app.get('/', async (req,res)=>{



  try {
    
      const allMessages= await pool.query("SELECT * FROM nwimessages");
      res.json(allMessages.rows)
 


      console.log("hello Daddy")
  } catch (error) {
      error.message
  }


  
})

app.get('/mailbox', async (req,res)=>{



    try {
        const allMessages= await pool.query("SELECT * FROM nwimessages");
        res.json(allMessages.rows)
    } catch (error) {
        error.message

        console.log("does not exist")
    }


    
})

//get a message

app.get('/mailbox/:id', async(req,res)=>{

try {
    const {id}= req.params;
    const message= await pool.query("SELECT * FROM nwimessages WHERE id= $1", [id]);
    res.json(message.rows[0])
} catch (error) {
    console.log(error.message)
}

})

//delete a message
//get a message

app.delete('/delete/:id', async(req,res)=>{

    try {
        const {id}= req.params;
        const message= await pool.query("DELETE FROM nwimessages WHERE id= $1", [id]);
        res.json("Message was deleted")
    } catch (error) {
        console.log(error.message)
    }
    
    })

// app.post("/nodemailer", async (req,res)=>{

//     try {
//         console.log(req.body)
//     const {name, lastname, email, subject, message,  time}=req.body;

//     var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'afromaestrokidd@gmail.com',
//           pass: "qwerty24--"
//         }
//       });
    

//       var mailOptions = {
//         from: 'afromaestrokidd@gmail.com',
//         to: email,
//         subject: subject,
//         text: 'Thank you, we have received your email'
//       };
      
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });


//     } catch (error) {
//         console.log(error.message);
//     }
    



// })

app.get("*", (req, res)=>{
 
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
})

//create a message

app.post("/sendmail", async (req, res)=>{

    
    try{

                console.log(req.body)
    const {name, lastname, email, subject, message,  time}=req.body;
    const newTodo= await pool.query("INSERT INTO nwimessages (name, lastname, email, subject, message,  time) VALUES($1, $2, $3, $4, $5, $6) RETURNING *", [name, lastname, email, subject, message, time]);

   



res.json(newTodo.rows[0])



}catch(err){
console.log(err.message);
  }

})

app.listen(port, ()=>{console.log(`running on ${port}`)});