import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Example from './Pages/Example/Example';

function App() {
  return (
    <div className='App h-100'>
      <div className='container-fluid p-0 h-100'>
        <BrowserRouter>
          <div className="h-100">
            <Header />
            <Menu />
            <div className='d-flex flex-wrap'>
              <Routes>
                <Route path="/dashboard" element={<Example />} />
                <Route path="/curso" element={<Example />} />
                <Route path="/" element={<Example />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
