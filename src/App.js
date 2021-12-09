import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {useSelector,useDispatch} from "react-redux"
import {incNumber,decNumber} from "./action/action"

function App() {
  const myState = useSelector(state => state.changeTheNumber)
  const dispatchAction = useDispatch();
  return (
    <div>
      hello, world
      <Home/>
      <button name= "button" onClick={()=>{dispatchAction(decNumber())}}>+</button>
      <input name = "quantity" type="text" className='quantity' value = {myState}/>
      <button name= "button" onClick={()=>{dispatchAction(incNumber(5))}}>-</button>
    </div>
  );
}

export default App;
