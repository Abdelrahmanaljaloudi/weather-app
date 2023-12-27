import logo from './logo.svg';
import './App.css';
import FormW from './components/FormW';
const api = {
  key: "8f637d4e9423cfbc473e25f570e124e9",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
 

  
  return (
    <div className="App ">
 <FormW Api={api}></FormW>

    
    </div>
  );
}

export default App;
