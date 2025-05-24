export const RoomCard = ({room, onSelectRoom}) => {
    return (
        <>
        
        <div 
        className="card"
        onClick={() => {onSelectRoom(room)}}
        >
          <img className="card__image" src={room.image}/>
          <div className="card__title">{room.category}</div>
          <div className="card__body">Sunt natus</div>
        </div>

      
              
        </>
    )
        

}