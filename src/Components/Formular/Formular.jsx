import { useState } from "react"
import dayjs from 'dayjs';


export const Formular = ({selectedRoom}) => {
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [pocetOsob, setPocetOsob] = useState(1);
    const [stravovani, setStravovani] = useState('');
    const [mazlicek, setMazlicek] = useState(false);
    const [pristylka, setPristylka] = useState(false);
    const [bezbarier, setBezbarier] = useState(false);
    const [email, setEmail] = useState(false);
    const [telefon, setTelefon] = useState(false);

   
    const pocetDnu = dayjs(dateTo).diff(dayjs(dateFrom), 'day')
   
    const handleSubmit = async (event) => {
        event.preventDefault()

            const response = await fetch("http://localhost:4000/api/rezervace", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    datumPrijezdu: dateFrom,
                    datumOdjezdu: dateTo,
                    pocetOsob: pocetOsob


                })

            });
        
        }



    return (
        <>
        <form 
        onSubmit={handleSubmit}
        >
          <div className="form-fields">
            <label htmlFor="field1" className="field-label">Od:</label>
            <input id="field1" className="field-input" type="date" 
             onChange={(e) => setDateFrom(e.target.value)}
            value={dateFrom}
            />

            <label htmlFor="field1" className="field-label">Do:</label>
            <input id="field1" className="field-input" type="date"
             onChange={(e) => setDateTo(e.target.value)} 
             value={dateTo}  
              />
            
            <label htmlFor="field2" className="field-label">Počet osob:</label>
            <input id="field2" className="field-input" type="number" 
            onChange={(e) => setPocetOsob(e.target.value)}
            value={pocetOsob}
            />
            
            <label htmlFor="select" className="field-label">Stravování:</label>
            <select id="select" className="field-input"
           
            >
              <option>Žádné</option>
              <option>Snídaně</option>
              <option>Obědy</option>
              <option>Večeře</option>
              <option>Plná penze</option>
            </select>

            <label htmlFor="check1" className="field-label">Domácí mazlíček:</label>
            <input 
            id="check1" 
            className="field-input" 
            type="checkbox"
           
            />
            <label htmlFor="check2" className="field-label">Přistýlka pro dítě:</label>
             <input 
             id="check2" 
             className="field-input" 
             type="checkbox" 
             
             />
             <label htmlFor="check3" className="field-label">Bezbariérový přístup:</label>
            <input id="check3" className="field-input" type="checkbox" />

             <label htmlFor="field1" className="field-label">Email:</label>
            <input id="field1" className="field-input" type="email" />

             <label htmlFor="field1" className="field-label">Telefon:</label>
            <input id="field1" className="field-input" type="tel" />  

          </div>
          <h2>Celková cena za pobyt: {pocetDnu ? selectedRoom.price * pocetDnu * pocetOsob : 0} Kč</h2>
          <button className="wide">Submit</button>
        </form>
        
        </>
    )

}