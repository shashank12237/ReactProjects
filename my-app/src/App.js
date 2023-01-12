import logo from './logo.svg';
import './App.css';
import HelloWorldComponent from './Components/HelloWorldComponent';
import Person from './Components/Person';
function App() {
  return (
    <div className="App">
     <h2>Welcome To React</h2>
     <HelloWorldComponent />
     <Person/>
     <Person/>
    </div>
  );
}

export default App;
