  
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom, getUserByName } = require('./users');

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

app.use('/user', require('./routes/user'));


io.on('connect', (socket) => {
  socket.on('join', ({ name, room, image }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room, image });
    if (user && user.room && user.name) {
        if(error) return callback(error);

        socket.join(user.room);
    
        socket.emit('message', {typeColor: 1, text: `Hi ${user.name}, Chào mừng bạn tới phòng ${user.room}.`});
        socket.broadcast.to(user.room).emit('message', {typeColor: 1, text: `${user.name} vừa vào phòng!` });
    
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
    callback();
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    user && console.log(user)
    io.to(user.room).emit('message', { user: user.name, userAvatar: user.image, text: message });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if(user) {
      io.to(user.room).emit('message', {typeColor: 2, text: `${user.name} đã rời đi.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
    }
  })
});

app.listen(process.env.PORT_API || 5050, () => console.log('API is listening on port: 3000'))

server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));