let express = require('express');
let app = express();
const PORT = process.env.PORT || 3000;

const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

io.on('connection',(socket)=>{
    console.log('user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    let x=0;
    setInterval(()=>{
        x+=1;
        socket.emit('minutes', x);
        console.log('Minutes Used: ' + x);
    }, 60000)
});

http.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});