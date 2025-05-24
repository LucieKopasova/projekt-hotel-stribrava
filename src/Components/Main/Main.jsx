import { RoomDetailContainer } from "../RoomDetail/RoomDetail"
import { RoomsContainer } from "../Rooms/RoomsContainer"
import { useState, useEffect } from "react";

export const Main = () => {
      const [rooms, setRooms] = useState('');
    
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("http://localhost:4000/api/pokoje");
          const json = await response.json();
          console.log(json.data)
          setRooms(json.data);
        };
    
        fetchData();
    
        
      }, []);

    return (
        <>
        <RoomsContainer/>
        <RoomDetailContainer/>
        </>
    )
}