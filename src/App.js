import './App.css';
import Header_JS from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home';
import Footer_js from './components/footer';
import AboutUs from './components/about';
import VideoPage from './pages/Videopage';
function App() {
  return (
    <div className="App">
      <Router>
        <Header_JS></Header_JS>
        <main className="content">
          <Routes>
            <Route path="/homepage" element={<Homepage></Homepage>}></Route>
            <Route path="/" element={<Homepage></Homepage>}></Route>
          </Routes>
        </main>
        <Footer_js></Footer_js>
      </Router>
    </div>
  );
}

export default App;
