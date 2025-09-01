const http = require('http');

const fs = require('fs');

const url = require('url');


const PORT = 3000;


const server = http.createServer((req, res) => {
    const parsedUrl= url.parse(req.url, true);
    const method = req.method;
    const pathname = parsedUrl.pathname;

    res.setHeader('Content-Type', 'application/json');


    if(req.method === 'GET' && pathname === "/") {
        res.writeHead(200);
        res.end(JSON.stringify({message: "Note API is running"}));
    }

    else if(method === 'POST' && pathname === '/notes') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            const data = JSON.parse(body);

            let notes = [];

            if(fs.existsSync('notes.json')) {
                notes = JSON.parse(fs.readFileSync('notes.json', 'utf8'));
            }

            const newNote = {
                id: Date.now(),
                title: data.title,
                content: data.content
            };

            notes.push(newNote);

            fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));

            res.writeHead(201);
            res.end(JSON.stringify({message: 'Success', note: newNote}))
        })
    }

    else if ( method === 'GET' && pathname === '/notes') {
        let notes = [];
        if(fs.existsSync('notes.json')) {
            notes = JSON.parse(fs.readFileSync('notes.json', 'utf8'));
        }

        res.writeHead(200);
        res.end(JSON.stringify(notes));
    }

    else if(method === 'GET' && pathname.startsWith('/notes/')) {
        const id = parseInt(pathname.split('/')[2]);

        let notes = [];
        if(fs.existsSync('notes.json')) {
            notes = JSON.parse(fs.readFileSync('notes.json', 'utf8'));
        }
        const note = notes.find( n => n.id === id);

        if(note) {
            res.writeHead(200);
            res.end(JSON.stringify(note));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({error: "Not found"}));
        }
    }
    
    else if(method === 'DELETE' && pathname.startsWith('/notes/')) {
        const id = parseInt(pathname.split('/')[2]);

        let notes = [];
        if(fs.existsSync('notes.json')) {
            notes = JSON.parse(fs.readFileSync('notes.json', 'utf-8'));
        }
        const noteIndex = notes.findIndex(n => n.id === id);

        if(noteIndex !== -1) {
            notes.splice(noteIndex,1);
            fs.writeFileSync('notes.json', JSON.stringify(notes, null, 2));
            
            res.writeHead(200);
            res.end(JSON.stringify({message: 'Note Deleted'}));
        } else {
            res.writeHead(404);
            res.end(JSON.stringify({error: 'Note not found'}));
        }
    }

        else {
            res.writeHead (404);
            res.end(JSON.stringify({error: 'Route not found'}));
        }
    
})

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
});