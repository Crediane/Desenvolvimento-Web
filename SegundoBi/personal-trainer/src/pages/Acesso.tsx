import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
// Vamos reutilizar aquela imagem bonita que você já tem na tela inicial!
import BgImage from '../assets/images/Rectangle13.png'; 

export function Acesso() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', width: '100%', margin: 0, padding: 0 }}>
      
      {/* Lado Esquerdo - Imagem de Fundo (some no celular usando a sua classe) */}
      <div 
        className="desktop-only" 
        style={{ 
          flex: 1, 
          backgroundImage: `url(${BgImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          borderRight: '1px solid #eee'
        }} 
      />

      {/* Lado Direito - Botões de Acesso */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', padding: '20px' }}>
        
        {/* A sua logo brilhando aqui */}
        <img src={Logo} alt="Logo Elizane Personal" style={{ width: '280px', marginBottom: '5px' }} />
        <p style={{ color: '#333', marginBottom: '50px', fontWeight: 'bold', fontSize: '18px' }}>O seu app</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '350px' }}>
          
          <Link 
            to="/login"
            style={{
              padding: '15px',
              backgroundColor: '#1CA3EE',
              color: 'white',
              textAlign: 'center',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            Sou aluno
          </Link>

          <Link 
            to="/admin" 
            style={{
              padding: '15px',
              backgroundColor: '#2b3945', // Cor chumbo/escura elegante parecida com a referência
              color: 'white',
              textAlign: 'center',
              textDecoration: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            Sou personal trainer
          </Link>
          
          {/* Botão de voltar para a Home caso a pessoa clique sem querer */}
          <Link 
            to="/" 
            style={{
              marginTop: '20px',
              color: '#94a3b8',
              textAlign: 'center',
              textDecoration: 'none',
              fontSize: '14px'
            }}
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>
  );
}