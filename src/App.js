import './App.css';
import Header_JS from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer_js from './components/footer';
import Homepage1 from './pages/homepage';
function App() {
  return (
    <div className="App">
      <Router>
        <Header_JS></Header_JS>
        <main className="content">
          <Routes>
            <Route path="/" element={<Homepage1></Homepage1>}></Route>
          </Routes>
        </main>
        <Footer_js></Footer_js>
      </Router>
    </div>
  );
}

export default App;
