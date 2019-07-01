import io from 'socket.io-client';
const socket = io('http://localhost:8000');


export default function playerActions (action, func) {
	socket.emit(action, func)
	console.log(action);
};
