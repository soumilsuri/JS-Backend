import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('server is serving')
});

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {id: 1, 
            title: 'Why was the math book sad?', punchline: 'Because it had too many problems'
        },
    ]
    res.send(jokes);
    
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server chal raha hai ${port}`); 
});