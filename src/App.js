import "./App.css";
import logo from "./searching.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          Dictionary App
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Aparna Gopalakrishnan</footer>
      </div>
    </div>
  );
}

export default App;
