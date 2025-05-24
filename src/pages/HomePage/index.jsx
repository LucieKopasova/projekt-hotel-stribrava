import './style.css';

export const HomePage = () => {
  return (
    <>
    <div className="container">
   
  <div className="banner">
    <div className="banner__stripe">
      <div className="container">
        <h1>Template</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sequi.
        </p>
      </div>
    </div>
  </div>
  
  <section className="dark">
    <div className="container">
      <h2>Heading</h2>
      <p>
        Quas odio quidem, enim nihil unde quia temporibus vitae in ab.
      </p>
      <div className="cards-row">
        <div className="card">
          <img className="card__image" src="img/image1.svg" />
          <div className="card__title">Card 1</div>
          <div className="card__body">Sunt natus</div>
        </div>

        <div className="card">
          <img className="card__image" src="img/image1.svg" />
          <div className="card__title">Card 2</div>
          <div className="card__body">Laboriosam</div>
        </div>

        <div className="card">
          <img className="card__image" src="img/image1.svg" />
          <div className="card__title">Card 3</div>
          <div className="card__body">Eveniet officiis</div>
        </div>
      </div>
    </div>
  </section>

  <section className="light">
    <div className="container">
      <h2>Heading</h2>
      <div className="columns-2">
        <div className="column">
          <img src="img/image1.svg" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque accusantium, dolor quisquam doloremque quod nobis temporibus ducimus sapiente consectetur distinctio assumenda, nisi suscipit saepe. Vero.
          </p>
        </div>
        <form>
          <div className="form-fields">
            <label htmlFor="field1" className="field-label">Field 1:</label>
            <input id="field1" className="field-input" type="text" />
            
            <label htmlFor="field2" className="field-label">Field 2:</label>
            <input id="field2" className="field-input" type="text" />
            
            <label htmlFor="select" className="field-label">Select:</label>
            <select id="select" className="field-input">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>

            <label htmlFor="check1" className="field-label">Checkbox 1:</label>
            <input id="check1" className="field-input" type="checkbox" />
          </div>
          <button className="wide">Submit</button>
        </form>
      </div>
    </div>
  </section>

  <section className="dark">
    <div className="container columns-2">
      <div className="columns">
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus mollitia ut pariatur eos error sunt blanditiis repellat similique aperiam temporibus.
        </p>
      </div>
      <img src="img/image1.svg" />
    </div>
  </section>

    </div>

    </>
  );
};

