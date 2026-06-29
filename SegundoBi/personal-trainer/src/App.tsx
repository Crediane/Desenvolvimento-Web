import './styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { Cadastro } from './pages/Cadastro';
import { Admin } from './pages/Admin';
import { Acesso } from './pages/Acesso';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota da Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Nova rota do Portal de Acesso */}
        <Route path="/acesso" element={<Acesso />} /> 
        
        {/* Rota da tela de Login de Alunos */}
        <Route path="/login" element={<Login />} />
        
        {/* Rota da tela de Cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />
        
        {/* Rota da Área do Aluno */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Rota do Painel da Elizane */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}