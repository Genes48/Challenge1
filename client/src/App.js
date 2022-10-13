import './App.css';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import ABM from "./components/ABM";
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route path="/abm" component = {ABM}/>
        <Route path="/form/:id" component = {Form}/>
        <Route exact path="/form" component = {Form}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
