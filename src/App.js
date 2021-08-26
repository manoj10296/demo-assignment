import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import SignIn from "./components/Auth/Signin";
import Console from "./components/Console";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/console" component={Console} />
        <Redirect to="/signin" from="/" />
      </Switch>
    </div>
  );
}

export default App;
