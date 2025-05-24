import { RoomCard } from "../RoomCard/RoomCard"

export const RoomsContainer = ({roomsData, onSelectRoom}) => {
    return (
        
       <section className="dark">
    <div className="container">
      <h2>Heading</h2>
      <p>
        Quas odio quidem, enim nihil unde quia temporibus vitae in ab.
      </p>
      <div className="cards-row">

        {roomsData.map((room) => (
           <RoomCard key={room.id} room={room} onSelectRoom={onSelectRoom} />
        ))
}
       
      </div>

    </div>

  </section>
        
    )
}