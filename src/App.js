import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateAccount from './pags/CreateAccount';
import Login from './pags/Login';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
      <div className="form-img hide-mobile"></div>
    </main>
  );
}

export default App;
