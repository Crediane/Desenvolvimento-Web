import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

export function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que a página recarregue
    try {
      // Ferramenta do Firebase que cria o usuário
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("Conta criada com sucesso!");
      navigate('/dashboard'); // Manda o aluno direto para a área logada
    } catch (error: any) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao criar conta: " + error.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f4f6f9', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', textAlign: 'center', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ color: '#1CA3EE', marginTop: 0 }}>Novo Aluno</h2>
        <p style={{ color: '#666', marginBottom: '20px' }}>Crie sua conta para acessar os treinos.</p>

        <form onSubmit={handleCadastro} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
            required
          />
          <input
            type="password"
            placeholder="Sua senha (mín. 6 caracteres)"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
            required
          />
          <button 
            type="submit" 
            style={{ padding: '12px', backgroundColor: '#1CA3EE', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', marginTop: '10px' }}
          >
            Cadastrar
          </button>
        </form>

        <p style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
          Já tem uma conta? <Link to="/login" style={{ color: '#1CA3EE', textDecoration: 'none', fontWeight: 'bold' }}>Faça login</Link>
        </p>
      </div>
    </div>
  );
}