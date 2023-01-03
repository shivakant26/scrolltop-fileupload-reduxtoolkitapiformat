import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About/about';
const Home = React.lazy(() => import("./Pages/Home/home"));

function App() {
  return (
    <div className="App">
      <Router>
      <React.Suspense fallback={<p>Loading page...</p>}>
        <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/about' element={<About/>}/>
        </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
