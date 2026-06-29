import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { signOut, onAuthStateChanged } from 'firebase/auth'; // Adicionamos o onAuthStateChanged aqui
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase';

export default function Dashboard() {
  const [wod, setWod] = useState('Carregando treino...');
  const [dieta, setDieta] = useState('Carregando planejamento...');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Essa é a nossa TRAVA DE SEGURANÇA
    const verificarAcesso = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Se tem usuário logado, busca os dados no banco
        buscarDadosDoBanco();
      } else {
        // Se NÃO tem usuário, chuta de volta pro login
        navigate('/login');
      }
    });

    const buscarDadosDoBanco = async () => {
      try {
        const docRef = doc(db, 'dados_painel', 'hoje');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setWod(docSnap.data().wod);
          setDieta(docSnap.data().dieta);
        } else {
          setWod('Nenhum WOD cadastrado para hoje.');
          setDieta('Nenhum plano nutricional encontrado.');
        }
      } catch (error) {
        console.error("Erro ao buscar dados do Firestore:", error);
        setWod('Erro ao carregar o treino.');
        setDieta('Erro ao carregar a dieta.');
      } finally {
        setLoading(false);
      }
    };

    // Limpa a verificação quando a pessoa sai da página
    return () => verificarAcesso();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); 
    } catch (error) {
      console.error("Erro ao sair da conta:", error);
      alert("Erro ao tentar sair.");
    }
  };

  return (
    <div style={{ padding: '40px 20px', fontFamily: 'sans-serif', backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', backgroundColor: 'white', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
        
        <h1 style={{ color: '#1CA3EE', marginBottom: '5px', marginTop: 0 }}>Área do Aluno</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>Confira sua rotina e metas para o dia de hoje.</p>

        {loading ? (
          <p style={{ color: '#888', fontStyle: 'italic' }}>Verificando acesso e buscando informações...</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            
            <div style={{ borderLeft: '5px solid #1CA3EE', padding: '15px 20px', backgroundColor: '#f8fafc', borderRadius: '0 8px 8px 0' }}>
              <h3 style={{ color: '#333', marginTop: 0, marginBottom: '10px' }}>🏋️‍♂️ Treino do Dia (WOD)</h3>
              <p style={{ whiteSpace: 'pre-line', color: '#444', lineHeight: '1.6', margin: 0 }}>{wod}</p>
            </div>

            <div style={{ borderLeft: '5px solid #10B981', padding: '15px 20px', backgroundColor: '#f8fafc', borderRadius: '0 8px 8px 0' }}>
              <h3 style={{ color: '#333', marginTop: 0, marginBottom: '10px' }}>🍎 Planejamento Nutricional</h3>
              <p style={{ whiteSpace: 'pre-line', color: '#444', lineHeight: '1.6', margin: 0 }}>{dieta}</p>
            </div>

            <button 
              onClick={handleLogout}
              style={{ 
                marginTop: '15px', 
                padding: '12px', 
                backgroundColor: '#ef4444', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                fontWeight: 'bold',
                alignSelf: 'flex-start'
              }}
            >
              Sair da Conta
            </button>

          </div>
        )}
      </div>
    </div>
  );
}