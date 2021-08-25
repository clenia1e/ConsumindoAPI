import { useState, useEffect } from 'react';
import axios from 'axios';

import LoadImage from './img/giphy.webp'
import LogoRick from './img/logo.png';

//const style = {
  //backgroundColor: '#ff0000'
//}

export default function App() {
  const [data, setData] = useState([])
  const [isLoading, setIsload] = useState(true);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then(
      (res) => {
        setData(res.data.results)
        setIsload(false);
      }, 500)
  }, []);

  //useEffect(() => {
  //console.log("data mudou")
  //}, [data]);

  if (isLoading) {
    return (
      <div>
        <img src={LoadImage} alt="loading" />
      </div>
    )
  }

  // jsx
  return (
    <div className="content">
      <div className="container">

        <div className="logo-content">
          <img src={LogoRick} alt="Logo" height="100px" width="auto" />
        </div>
        <div className="cards-content" >
          {data.map((item, index) => (
            <div key={index} className="card">
              <img src={item.image} alt={item.name} width="180px" height="auto" />
              <h4>{item.name}</h4>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}

