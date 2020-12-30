import 'bootstrap/dist/css/bootstrap.min.css';
import MainScreen from "./screens/MainScreen.js";
import Navbar from './components/Navbar' 
import TodoList from './screens/TodoList'

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <TodoList/>
    </div>
    
  );
}


export default App;
