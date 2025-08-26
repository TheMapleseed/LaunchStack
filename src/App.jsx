import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StackProvider } from './context/StackContext';
import Header from './components/Header';
import StackSelector from './components/StackSelector';
import Results from './components/Results';
import FrameworkDocs from './components/FrameworkDocs';
import './index.css';

function App() {
  return (
    <StackProvider>
      <Router>
        <div className="App min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<StackSelector />} />
              <Route path="/results" element={<Results />} />
              <Route path="/docs" element={<FrameworkDocs />} />
            </Routes>
          </main>
        </div>
      </Router>
    </StackProvider>
  );
}

export default App;
