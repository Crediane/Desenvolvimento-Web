import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Importa a nossa conexão
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Tenta fazer o login no Firebase
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login realizado com sucesso!');
      navigate('/dashboard'); // Se der certo, manda para a Área do Aluno
      } catch (error: any) {
      console.error("Erro detalhado:", error);
      alert("O Firebase disse: " + error.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#000' }}>Acesso do Aluno</h2>
      <p style={{ color: '#666', marginBottom: '20px' }}>Entre para ver seus treinos e evolução.</p>
      
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '15px', width: '300px' }}>
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <input
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '12px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <button 
          type="submit" 
          style={{ padding: '12px', backgroundColor: '#1CA3EE', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Entrar
        </button>
      </form>
      
      <button 
        onClick={() => navigate('/')} 
        style={{ marginTop: '20px', background: 'none', border: 'none', color: '#1CA3EE', cursor: 'pointer', textDecoration: 'underline' }}
      >
        Voltar para a página inicial
      </button>
    </div>
  );
}