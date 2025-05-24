import { Formular } from "../Formular/FOrmular"
import { RoomDetailInfo } from "../RoomDetailInfo/RoomDetailInfo"

export const RoomDetailContainer = ({selectedRoom}) => {
    return (
        <>
        <section className="light">
          <div className="container">

            <RoomDetailInfo selectedRoom={selectedRoom}/>

            <Formular />

          </div>
        </section>

        
        </>
    )
}