import Input from './components/Input';
import Output from './components/Output';
import { DDDProvider } from './providers/DDDProvider';
import { ThemeProvider } from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme'; // ← ESSA LINHA ESTAVA FALTANDO!
import './index.css';

function App() {
  return (
    <ThemeProvider>
      <DDDProvider>
        <div className="app-container">
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
            <ToggleTheme />
          </div>
          <h1 className="app-title">📞 DDD Explorer</h1>
          <p className="app-subtitle">Descubra todas as cidades de um DDD</p>
          <Input />
          <Output />
        </div>
      </DDDProvider>
    </ThemeProvider>
  );
}

export default App;