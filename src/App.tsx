import Calculator from './components/Calculator';
import './App.css';

function App() {
  const handleTestClick = () => {
    // Open test report in a new tab
    window.open('/playwright-report/index.html', '_blank');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Calculator</h1>
        <button className="test-button" onClick={handleTestClick} data-testid="test-button">
          🧪 View Test Report
        </button>
      </header>
      <main>
        <Calculator />
      </main>
      <footer>
        <p>QA Automation Demo Project</p>
        <p className="test-info">This is a QA testing demonstration project with intentional test failures.</p>
      </footer>
    </div>
  );
}

export default App; 