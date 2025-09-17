import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Article from './components/Article';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  const postData = {
    titulo: "Descobrindo cidades turísticas",
    data: "06 de agosto de 2025",
    texto: "Foz do Iguaçu abriga uma das Sete Maravilhas Naturais do Mundo: as Cataratas do Iguaçu.",
    imgSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/ed/a5/17/foz-do-iguacu.jpg?w=500&h=500&s=1",
    imgAlt: "Vista das Cataratas do Iguaçu",
    imgCaption: "Cataratas do Iguaçu."
  };

  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <main>
        <Article
          titulo={postData.titulo}
          data={postData.data}
          texto={postData.texto}
          imgSrc={postData.imgSrc}
          imgAlt={postData.imgAlt}
          imgCaption={postData.imgCaption}
        />
      </main>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;