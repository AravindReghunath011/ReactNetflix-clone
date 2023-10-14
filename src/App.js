import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import Test from './components/test/Test';
import {original,action} from './components/url'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={original} title='Netflix originals'/>
      <RowPost url={action} title='Action' isSmall/>
      
    </div>
  );
}

export default App;
