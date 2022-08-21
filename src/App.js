import logo from "./logo.png";
import logo2 from "./logo2.jpg";
import logo3 from "./logo3.jpg";
import logo4 from "./logo4.jpg";
import logo5 from "./logo5.jpg";

import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row">
            <div className="col">
              <img src={logo} className="App-logo img-fluid logo1" alt="logo" />
              <img
                src={logo2}
                className="App-logo img-fluid logo2"
                alt="logo2"
              />
              <img
                src={logo3}
                className="App-logo img-fluid logo3"
                alt="logo3"
              />
              <img
                src={logo4}
                className="App-logo img-fluid logo4"
                alt="logo4"
              />{" "}
              <img
                src={logo5}
                className="App-logo img-fluid logo5"
                alt="logo5"
              />
            </div>
          </div>
        </header>
        <main>
          <Dictionary defaultKeyword="science" />
        </main>
        <footer className="text-center">Coded by Anna Koval</footer>
      </div>
    </div>
  );
}
