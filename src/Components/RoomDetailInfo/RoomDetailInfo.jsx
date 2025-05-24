export const RoomDetailInfo = ({selectedRoom}) => {
    return (
        <>
            <h2>Pokoj {selectedRoom.category}, {selectedRoom.price} Kč za osobu na noc </h2>
            <div className="columns-2">
                <div className="column">
                    <img src={selectedRoom.image} />
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque accusantium, dolor quisquam doloremque quod nobis temporibus ducimus sapiente consectetur distinctio assumenda, nisi suscipit saepe. Vero.
                    </p>
                </div>
                </div>
             
            </>
    )
}