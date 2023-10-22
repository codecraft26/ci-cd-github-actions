const express=require('express');
const app=express();
require('dotenv').config({
    path:'./env'
});

app.get('/',(req,res)=>{
    res.send('Hello World');
}
);

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port 3000');
}   
);

