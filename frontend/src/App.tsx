import * as React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Home} from "./views/Home";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {Users} from "./views/Users";
import {Products} from "./views/Products";
import {Reviews} from "./views/Reviews";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <Navbar/>
          <Router>
              <div>
                  <Route path={"/"} exact={true} component={Home} />

                  <Route path={"/users"} component={Users} />
                  <Route path={"/users/:id"} component={Users} />

                  <Route path={"/products"} component={Products} />
                  <Route path={"/products/:id"} component={Products} />

                  <Route path={"/reviews"} component={Reviews} />
                  <Route path={"/reviews/:id"} component={Reviews} />
              </div>
          </Router>
          <Footer/>
      </div>
    );
  }
}

export default App;
