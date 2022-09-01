import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express();

app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Coder Lady Fulya..");
});


const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://coderladyfulya:fulya_123@cluster0.wxtdzwb.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then (() => {
  app.listen(PORT, () => {
     console.log(`Server is running on port: ${PORT}`);
  });
})
.catch(error =>{
    console.error(error.message);
})