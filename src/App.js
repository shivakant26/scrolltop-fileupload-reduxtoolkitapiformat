import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './Pages/PageNotFound/pageNotFound';
import InfoForm from './Pages/Form/form';
import Record from './Pages/Record/record';
const Home = React.lazy(() => import("./Pages/Home/home"));

function App() {
  return (
    <div className="App">
      <Router>
      <React.Suspense fallback={<p>Loading page...</p>}>
        <Routes>
            <Route path='/' element={<Home />}  />
            <Route path='/form' element={<InfoForm />}/>
            <Route path='/record' element={<Record />}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
