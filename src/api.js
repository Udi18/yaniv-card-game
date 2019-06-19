import openSocket from 'socket.io-client';

let url = 'http://localhost:8000/';
const io = openSocket(url);

function playerActions ( props ) {
	io.on('')
}

export { playerActions };