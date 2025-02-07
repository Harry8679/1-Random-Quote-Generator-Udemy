import './App.css';
import Quotable from './Quotable';
import QuoteGenerator from './QuoteGeneral';

function App() {
  return (
    <div className="App">
      <QuoteGenerator />
      <hr />
      <Quotable />
    </div>
  );
}

export default App;
