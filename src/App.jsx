import { useEffect, useState } from 'react'
import {io} from "socket.io-client";
import './App.css'

const socket = io("http://localhost:8000");

function App() {
  const rooms = ["General", "Tech Talk", "Random", "Gaming"];

  const [username, setUsername] = useState("");
  const [currentRoom, setCurrentRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");

  useEffect(()=>{
    //Recibe historial y mensajes nuevos.
    socket.on("message history", (history)=>{
      setMessages(history);
    });
    socket.on("chat message", (messageData)=>{
      setMessages((prev)=>[...prev, messageData]);
    })

    return ()=>{
      socket.off("message history");
      socket.off("chat message");
    }
  },[]);

  function joinRoom(room) {
    if(!username) return;
    
    //Evita quedarse en dos salas al mismo tiempo.
    if(currentRoom){
      socket.emit("leave room",{ room: currentRoom });
    }
    socket.emit("join room", {username, room});
    setCurrentRoom(room);
  }

  function sendMessage(event) {
  event.preventDefault();

  if(!content||!currentRoom||!username) return;
    socket.emit("chat message",{
      username,
      room: currentRoom,
      content
    });
    setContent("");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Chatify</h1>
      <input
        className="border p-2 mb-4 block"
        placeholder="Tu nombre"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <div className="mb-4">
        {rooms.map((room) => (
          <button
            key={room}
            onClick={() => joinRoom(room)}
            className="border p-2 mr-2"
          >
            {room}
          </button>
        ))}
      </div>

      <h2 className="font-bold mb-2">Room: {currentRoom}</h2>

      <div className="border p-3 mb-4 min-h-40">
        {messages.map((message) => (
          <p key={message.id}>
            <strong>{message.username}: </strong>
            {message.content}
          </p>
        ))}
      </div>

      <form onSubmit={sendMessage}>
        <input
          className="border p-2 mr-2"
          placeholder="Mensaje"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />

        <button className="border p-2" type="submit">
          Enviar
        </button>
      </form>
    </div>
  )

}

export default App
