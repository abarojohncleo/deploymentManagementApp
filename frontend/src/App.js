import './App.css';
import { RouterProvider} from 'react-router-dom';
import router from './route';

function App() {  
  
  return (
    <div>
      <div className="app">
        <RouterProvider router={router}/>
      </div>
    </div>
  ) 
}
export default App;

