import { Formular } from "../Formular/FOrmular"
import { RoomDetailInfo } from "../RoomDetailInfo/RoomDetailInfo"

export const RoomDetailContainer = () => {
    return (
        <>
        <section className="light">
          <div className="container">

            <RoomDetailInfo />

            <Formular />

          </div>
        </section>

        
        </>
    )
}