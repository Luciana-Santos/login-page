import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Titulo from './components/Titulo';
import CreateAccount from './pags/CreateAccount';
import Login from './pags/Login';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
