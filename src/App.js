import logo from './logo.svg';
import './App.css';
import Sum from './Components/Sum/Sum';
import HeadLine from './Components/HeadLine/HeadLine';

function App() {
  return (
    <div className="App">
      <Sum />
      <section className="main">
          <HeadLine header="Posts" desc="Click the button to render posts!" />    
        </section>
    </div>
  );
}

export default App;
