export const RoomDetailInfo = ({selectedRoom}) => {
    return (
        <>
            <h2>{selectedRoom.category}</h2>
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