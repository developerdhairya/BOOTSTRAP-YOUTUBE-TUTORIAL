const express=require('express');
const cors=require('cors');
const io=require('socket.io');
const http=require('http');

const app=express();

const rooms=['general','tech','finance','crypto'];

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

const server=http.createServer(app);
const PORT=5001;

io(server,{
    cors:{
        origin:'http://localhost:3000',
        methods:['GET','POST']
    }
});


server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});