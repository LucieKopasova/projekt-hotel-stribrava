import { RoomDetailContainer } from "../RoomDetailContainer/RoomDetailContainer"
import { RoomsContainer } from "../RoomsContainer/RoomsContainer"
import { useState, useEffect } from "react";

export const Main = () => {
      const [rooms, setRooms] = useState([]);
      const [selectedRoom, setSelectedRoom] = useState('');
    
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch("http://localhost:4000/api/pokoje");
          const json = await response.json();
          setRooms(json.data);
         setSelectedRoom(json.data[4])
        };
    
        fetchData();
    
        
      }, []);


      const handleClick = (event) => {
        setSelectedRoom(event)
      }
console.log(selectedRoom)

    return (
        <>
        <RoomsContainer roomsData={rooms} onSelectRoom = {handleClick}/> 
        <RoomDetailContainer selectedRoom={selectedRoom}/>
        </>
    )
}