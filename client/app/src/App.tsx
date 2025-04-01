import React, { useEffect, useState } from 'react';
import './App.css';

type message = {
  message: string
}

function App() {
  const [message, setMessage] = useState<string>('')
  useEffect(()=>{
    const fetchMessage = async()=>{
      try{
        const response = await fetch('http://localhost:8080/api/message')
        const data: message = await response.json()
        setMessage(data.message)
      }catch(error){
        console.error('Error fetching message:', error);
      }
    }
    fetchMessage()
  }, [message])
  return (
    <div>
      <h1>React & Laravel 11 API Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
