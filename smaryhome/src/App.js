import React, { useState, useEffect } from "react";
import house from "./images/house.png"
import apto from "./images/apto.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Rooms from './Rooms'


function App() {
  let [espacios, setEspacios] = useState([]);

  useEffect(()=>{
    const url = 'https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json';
    
    fetch(url).then((res) => res.json()).then((data) => {
      setEspacios(data);
    });
  })

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          <h1>My Spaces</h1>
        </div>
      </div>

      <div className="row mt-3">
        {espacios.map((e) =>{
          return (
            <div className="col-3" key={e.id}>
              <div className="card">
                <img src={String(e.name).startsWith("Casa")? house : apto} className="card-img-top" alt={e.name} style={{height: "15rem"}}/>
                <div className="card-body">
                  <h5 className="card-title">{e.name}</h5>
                  <p className="card-text">{e.address}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h1>My Rooms</h1>
        </div>
      </div>

      <Rooms />
      
    </div>
  );
}

export default App;
