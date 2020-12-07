import './App.css';
import "@clayui/css/lib/css/atlas.css";
import Navbar from './components/navbar';
import CardRepo from './components/cardRepo';

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="sheet">
          <div className="sheet-header">
            <h2 className="sheet-title">Clay</h2>
            <div className="sheet-text">Experiment Clay components!</div>
            <CardRepo />
          </div>
          <div className="sheet-section">{/** Add components here */}</div>
        </div>
      </div>
    </>
  );
}

export default App;
