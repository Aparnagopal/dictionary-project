import "./App.css";
import logo from "./searching.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultkeyword="World" />
        </main>
        <footer className="App-footer">
          Coded by Aparna Gopalakrishnan and is{" "}
          <a
            href="https://github.com/Aparnagopal/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
            alt="GitHub Source"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
