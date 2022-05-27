import React, { useState, useEffect } from "react";
import room from "./images/room.png"
import kitchen from "./images/kitchen.png"
import 'bootstrap/dist/css/bootstrap.min.css';

function Rooms() {
    let [rooms, setRooms] = useState([]);

    useEffect(()=>{
    const url = 'https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json';
    
    fetch(url).then((res) => res.json()).then((data) => {
      setRooms(data);
    });
  })

    return(
        <div className="row mt-3">
            {rooms.map((e) =>{
                return (
                <div className="col-3" key={e.id}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{e.name}</h5>
                            <img src={String(e.name).startsWith("Kitchen")? kitchen : room} className="card-img-top" alt={e.name} style={{height: "15rem"}}/>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Rooms;