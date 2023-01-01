import React, {useState,useEffect} from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [image, setImage] =useState('')
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DDTp3OITNbyP2TF7QJetNvjKNmyywdychw6LfiIa')
    .then(res=>{
      console.log(res.data.url);
      setImage(res.data.url)
    })
    .catch(err=> console.error(err))
  },[])


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        
      </p>
      <img style={{width:'40%'}} src={image} alt="space"/>
    </div>
  );
}

export default App;
