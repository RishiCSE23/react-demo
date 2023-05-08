//import logo from './logo.svg';
import './App.css';

function App() {
  let name = 'Rishi';    // a new var

  return (
    <>   
      <nav>
        <li> Home </li>
        <li> About</li>
        <li> Contact </li>
      </nav>
      <div className="container">
        <p>
          <h1> Hello {name}</h1>   {/*replacing with variables*/}

          {/* Lorem 34  */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio culpa rerum maiores.
          Aperiam consectetur, quod debitis corporis consequatur beatae animi architecto similique iure pariatur mollitia molestias unde explicabo, 
          quos enim id voluptate natus veritatis!
        </p>
      </div>
    </>
  );
}

export default App;
