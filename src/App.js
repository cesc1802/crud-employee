import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { EditEmployee } from "./components/EditEmployee";
import { AddEmployee } from "./components/AddEmployee";
import { Home } from "./components/Home";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exac />
          <Route path="/add" component={AddEmployee} exac />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
