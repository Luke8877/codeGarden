import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>CodeGarden</h1>
      <p>Am I getting it yet</p>
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times!
      </button>
    </div>
  );
}

export default App;
