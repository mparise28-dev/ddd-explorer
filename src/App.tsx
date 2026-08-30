import Input from './components/Input';
import Output from './components/Output';
import { DDDProvider } from './providers/DDDProvider';
import './index.css';

function App() {
  return (
    <DDDProvider>
      <div className="app-container">
        <h1 className="app-title">📞 DDD Explorer</h1>
        <p className="app-subtitle">Descubra todas as cidades de um DDD</p>
        <Input />
        <Output />
      </div>
    </DDDProvider>
  );
}

export default App;