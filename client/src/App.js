import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import AllUser from "./pages/AllUser";
import { AddUser } from "./pages/AddUser";
import { EditUser } from "./pages/EditUser";
import { UserDetails } from "./pages/UserDetails";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" component={AllUser} exact />
          <Route path="/adduser" component={AddUser} />
          <Route path="/edituser/:id" component={EditUser} />
          <Route path="/userdetails/:id" component={UserDetails} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
