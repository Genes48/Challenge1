import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import ABM from "./components/ABM"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route path="/abm" component = {ABM}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
