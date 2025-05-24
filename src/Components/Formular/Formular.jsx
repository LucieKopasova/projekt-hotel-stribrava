

export const Formular = ({selectedRoom}) => {
    return (
        <>
        <form>
          <div className="form-fields">
            <label htmlFor="field1" className="field-label">Od:</label>
            <input id="field1" className="field-input" type="date" />

            <label htmlFor="field1" className="field-label">Do:</label>
            <input id="field1" className="field-input" type="date" />
            
            <label htmlFor="field2" className="field-label">Počet osob:</label>
            <input id="field2" className="field-input" type="text" />
            
            <label htmlFor="select" className="field-label">Stravování:</label>
            <select id="select" className="field-input">
              <option>Žádné</option>
              <option>Snídaně</option>
              <option>Obědy</option>
              <option>Večeře</option>
              <option>Plná penze</option>
            </select>

            <label htmlFor="check1" className="field-label">Domácí mazlíček:</label>
            <input id="check1" className="field-input" type="checkbox" />
            <label htmlFor="check2" className="field-label">Přistýlka pro dítě:</label>
             <input id="check2" className="field-input" type="checkbox" />
            <label htmlFor="check3" className="field-label">Bezbariérový přístup:</label>
            <input id="check3" className="field-input" type="checkbox" />

             <label htmlFor="field1" className="field-label">Email:</label>
            <input id="field1" className="field-input" type="email" />

             <label htmlFor="field1" className="field-label">Telefon:</label>
            <input id="field1" className="field-input" type="tel" />  

          </div>
          <h2>Celková cena za pobyt: {selectedRoom.price} Kč</h2>
          <button className="wide">Submit</button>
        </form>
        
        </>
    )
}