import { useState, useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { db, auth } from '../firebase';
import { Link, useNavigate } from 'react-router-dom';

export function Admin() {
  const [wod, setWod] = useState('');
  const [dieta, setDieta] = useState('');
  const [salvando, setSalvando] = useState(false);

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isAutenticado, setIsAutenticado] = useState(false);
  const [carregandoAuth, setCarregandoAuth] = useState(true);

  const navigate = useNavigate();

  // O E-MAIL OFICIAL DA ELIZANE (A Chave Mestra)
  const EMAIL_ADMIN = 'elizanepersonal.admin@teste.com';

  useEffect(() => {
    const verificarAcesso = onAuthStateChanged(auth, (user) => {
      // Aqui está a MÁGICA: Só libera se estiver logado E o e-mail for o da Elizane!
      if (user && user.email === EMAIL_ADMIN) {
        setIsAutenticado(true);
      } else {
        setIsAutenticado(false);
      }
      setCarregandoAuth(false);
    });
    return () => verificarAcesso();
  }, []);

  const handleLoginAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trava de segurança antes mesmo de ir no Firebase
    if (email !== EMAIL_ADMIN) {
      alert('Acesso negado! Este e-mail não tem privilégios de administrador.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      setIsAutenticado(true); 
    } catch (error) {
      alert('Acesso negado! E-mail ou senha incorretos.');
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setIsAutenticado(false);
    navigate('/acesso');
  };

  const handleSalvar = async (e: React.FormEvent) => {
    e.preventDefault();
    setSalvando(true);
    try {
      const docRef = doc(db, 'dados_painel', 'hoje');
      await setDoc(docRef, { wod, dieta });
      alert('Treino e Dieta atualizados com sucesso para todos os alunos!');
      setWod('');
      setDieta('');
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert('Erro ao atualizar os dados.');
    } finally {
      setSalvando(false);
    }
  };

  if (carregandoAuth) {
    return <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>Verificando segurança...</div>;
  }

  // TELA 1: LOGIN RESTRITO
  if (!isAutenticado) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f4f6f9', fontFamily: 'sans-serif' }}>
        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
          
          <h2 style={{ color: '#2b3945', marginTop: 0, textAlign: 'center' }}>Acesso Restrito</h2>
          <p style={{ color: '#666', marginBottom: '20px', textAlign: 'center', fontSize: '14px' }}>Área exclusiva do Personal Trainer.</p>

          <form onSubmit={handleLoginAdmin} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input
              type="email"
              placeholder="Seu e-mail de acesso"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
              required
            />
            <input
              type="password"
              placeholder="Sua senha secreta"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
              required
            />
            <button
              type="submit"
              style={{ padding: '15px', backgroundColor: '#2b3945', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', marginTop: '10px' }}
            >
              Destravar Painel
            </button>
          </form>

          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link to="/acesso" style={{ color: '#1CA3EE', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
              ← Voltar para seleção
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // TELA 2: PAINEL LIBERADO
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f4f6f9', fontFamily: 'sans-serif' }}>
      <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', width: '100%', maxWidth: '500px' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#1CA3EE', margin: 0 }}>Painel da Elizane</h2>
          <button onClick={handleLogout} style={{ backgroundColor: 'transparent', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>
            Sair [x]
          </button>
        </div>
        
        <p style={{ color: '#666', marginBottom: '20px' }}>Atualize o treino e a dieta do dia.</p>

        <form onSubmit={handleSalvar} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontWeight: 'bold', color: '#333' }}>🏋️‍♂️ Treino do Dia (WOD):</label>
            <textarea
              rows={4}
              placeholder="Digite o treino de hoje..."
              value={wod}
              onChange={(e) => setWod(e.target.value)}
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', resize: 'vertical' }}
              required
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <label style={{ fontWeight: 'bold', color: '#333' }}>🍎 Planejamento Nutricional:</label>
            <textarea
              rows={4}
              placeholder="Digite a meta de dieta de hoje..."
              value={dieta}
              onChange={(e) => setDieta(e.target.value)}
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px', resize: 'vertical' }}
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={salvando}
            style={{ 
              padding: '15px', 
              backgroundColor: salvando ? '#9ca3af' : '#1CA3EE', 
              color: 'white', 
              border: 'none', 
              borderRadius: '5px', 
              cursor: salvando ? 'not-allowed' : 'pointer', 
              fontWeight: 'bold', 
              fontSize: '16px', 
              marginTop: '10px' 
            }}
          >
            {salvando ? 'Salvando...' : 'Atualizar Dados'}
          </button>
        </form>

      </div>
    </div>
  );
}