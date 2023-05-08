//import logo from './logo.svg';
import "./App.css";

function App() {
  let name = "Rishi"; // a new var

  return (
    <>
      <nav>
        <li> Home </li>
        <li> About</li>
        <li> Contact </li>
      </nav>
      <div className="container">
        <p>
          <h1> Hello {name}</h1> {/*replacing with variables*/}
          {/* Lorem 34  */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laborum,
          quam molestiae magnam expedita debitis, reprehenderit sint tenetur
          beatae quia provident nemo dolore odio, quidem libero consequuntur
          dolor adipisci delectus in officiis. In, quibusdam.
        </p>
      </div>
    </>
  );
}

export default App;
