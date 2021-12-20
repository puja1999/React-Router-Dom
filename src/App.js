import { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import "./App.css";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <BrowserRouter basename="/calendar">
        <div className="App">
          <h1>React Router Dom</h1>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                 <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              
            </ul>
          </nav>
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{ backgroundColor: isLogin ? "red" : "green" }}
          >
            {isLogin ? "Logout" : "Login"}
          </button>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/contact">
              {isLogin ? <Contact /> : <Redirect to="/" />}
            </Route> */}
            <Route path="/contact">
              <Contact isLogin={isLogin} />
              </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/service">
              <Service/>
              </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
