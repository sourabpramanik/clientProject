import Graph from './components/Graphs';
import { useLocation} from 'react-router-dom';
//import Register from './components/RegistrationScreen/index'
import Home from './components/Home'


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;