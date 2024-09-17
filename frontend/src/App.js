import './App.css';
import { RouterProvider} from 'react-router-dom';
import Navigation from './components/Navigation';
import router from './route';

function App() {  
  
  return (
    <div>
      <Navigation />
      <div className="app">
        <RouterProvider router={router}/>
      </div>
    </div>
  ) 
}
export default App;

