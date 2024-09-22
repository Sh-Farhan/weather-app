import logo from './logo.svg';
import './App.css';
import { geocode, RequestType } from "react-geocode";
import Weath from './components/weath';

function App() {

  return (
    <div className='main-app'>
      <Weath></Weath>
      {/* <h1>hei</h1> */}
    </div>
  );
}

export default App;
