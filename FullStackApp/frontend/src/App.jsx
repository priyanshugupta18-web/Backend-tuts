import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    try {
      axios.get("/api/jokes")
        .then((res) => setJokes(res.data))
    }
    catch(error){
      console.log(`${error.massege}`)
    }
    
  })

  return (
    <div>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <div>{joke.title}</div>
          <div>{joke.description}</div>
        </div>
      ))}
    </div>
  )
}

export default App
