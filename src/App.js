import Navigation from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import CookieMsg from "./Components/CookieMsg/CookieMsg";
import Home from "./Components/Home/Home";
import Games from "./Components/Games/Games";
import HayDay from "./Components/HayDay/HayDay";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/games/hayday" component={HayDay} />
        </Switch>
      </BrowserRouter>
      <Footer />
      <CookieMsg />
    </>
  );
}

export default App;
