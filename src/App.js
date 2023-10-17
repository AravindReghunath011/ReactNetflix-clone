import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import RowPost from './components/RowPost/RowPost';
import {original,action} from './components/url';
import { createBrowserRouter,Outlet} from 'react-router-dom';
import Test from './components/test/Test'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet/>
      
    </div>
  );
}
function Home(){
  return(
    <>
      <Banner/>
      <RowPost url={original} title='Netflix originals'/>
      <RowPost url={action} title='Action' isSmall/>
    </>
  )
}

const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<Test/>
      }
    ]
  }

])

export default AppRouter;
