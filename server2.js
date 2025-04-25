import { createServer } from 'http';

const PORT = process.env.PORT || 8080;

const users = [
    { id: 1, firstName: 'Alice', lastName: 'Smith' },
    { id: 2, firstName: 'Bob', lastName: 'Johnson' },
    { id: 3, firstName: 'Charlie', lastName: 'Williams' },
    { id: 4, firstName: 'Diana', lastName: 'Brown' },
    { id: 5, firstName: 'Ethan', lastName: 'Jones' },
    { id: 6, firstName: 'Fiona', lastName: 'Garcia' }
];

const server = createServer((req,res) => {
    if(req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else{
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404;
        res.write(JSON.stringify({message:'Error'}));
        res.end();
    }
})


server.listen(PORT, () => {
    console.info(`Server listening on http://localhost:${PORT}`);
});