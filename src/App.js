import Navigation from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import CookieMsg from "./Components/CookieMsg/CookieMsg";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <div style={{ height: 2000 }}></div>
      <Footer />
      <CookieMsg />
    </>
  );
}

export default App;
