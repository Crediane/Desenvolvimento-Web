import "../styles/Utility.css"
import "../styles/Header.css"
import "../styles/Hero.css"
import "../styles/Solution.css"
import "../styles/Testimonials.css"
import "../styles/Pricing.css"
import "../styles/Contact.css"
import "../styles/Footer.css"

import Logo from "../assets/Logo.svg"
import { useState, useEffect } from "react"
import Menu from "../assets/menu.svg"
import Close from "../assets/close.svg"
import Button from "../components/Button"
import Rectangle13 from "../assets/images/Rectangle13.png"
import Rectangle14 from "../assets/images/Rectangle14.png"
import Card from "../components/Card"
import ProfileImageOne from "../assets/images/ProfileImageOne.jpg"
import ProfileImageTwo from "../assets/images/ProfileImageTwo.jpg"
import ProfileImageThree from "../assets/images/ProfileImageThree.jpg"
import ProfileImageFour from "../assets/images/ProfileImageFour.jpg"
import ProfileImageFive from "../assets/images/ProfileImageFive.jpeg"
import Check from "../assets/images/check.svg"
import Star from "../assets/images/Star.svg"
import RedesSociais from "../assets/images/RedesSociais.svg"


export function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className='container py-sm'>
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo" width={280} height={120} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>

                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper menu-icon">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={Rectangle14} alt="Retangulo um tela inicial" />
                </span>
                
                <img src={Rectangle13} alt="Retangulo dois tela inicial" className="hero-bg-img" />
                
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Você merece cuidar da sua saúde.</h1>
                    <p>Aqui, cada aluna é tratada com atenção e carinho. Nosso objetivo é fazer você se sentir confiante, saudável e feliz ao se olhar no espelho!</p>

                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section id='solution' className='container'>
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2 className='solution-h2'>
                                Sob medida para você!
                            </h2>
                        </span>
                    </span>
                    <p>
                        Estamos a disposição!!! <strong>Elizane Personal </strong>
                        já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>
                <section className="even-columns">
                    <Card titulo='Produto Vencedor' paragrafo='Nossos clientes tem o diferencial de participarem de desafios regulares, para que, 
                    além da atividade física, tenham um estilo de vida melhor incluindo a alimentação!' />
                    <Card titulo='Produto Vencedor' paragrafo='Nosso acompanhamento também inclui convênios com clínicas de nutrição e estética, assim,
                    você pode usufruir de vários benefícios com preços mais acessíveis!' />
                    <Card titulo='Produto Vencedor' paragrafo='Nosso objetivo aqui é lhe atender da melhor maneira possível, exercícios adaptados para 
                    qualquer tipo de necessidade. Somos especialistas em dar o nosso melhor para o seu melhor!' />
                </section>
            </section>

            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece.
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Treinar melhora a saúde mental e física!
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={ProfileImageOne} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Elizane é atenciosa e monta aquele treino para lembrar no outro dia, recomendo.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                            </span>
                            <span className="names">
                                <p>Luisa Lopes</p>
                                <p>CEO</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={ProfileImageTwo} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    A Elizane é sensacional, já estou visualizando os resultados em pouco tempo de acompanhamento.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                            </span>
                            <span className="names">
                                <p>Luna Oliveira</p>
                                <p>ESTUDANTE</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={ProfileImageThree} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    A minha melhor escolha, Elizane Personal. Recomendo.
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                            </span>
                            <span className="names">
                                <p>Ana Clara</p>
                                <p>EMPRESÁRIA</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={ProfileImageFour} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Elizane é a melhor da região. 
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                            </span>
                            <span className="names">
                                <p>Antonella</p>
                                <p>SECRETÁRIA</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={ProfileImageFive} alt="Imagem perfil cliente" />
                            <span className="testimony">
                                <p>
                                    Elizane além do treino personalizado, incentiva a alimentação saudável, estou amando!!!
                                </p>
                            </span>
                            <span className="rating">
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                                <img src={Star} alt="ícone estrela" width={22} height={20} />
                            </span>
                            <span className="names">
                                <p>Maria Eduarda</p>
                                <p>PROFESSORA</p>
                            </span>
                        </div>
                    </div>
                </section>
            </section>

            <section id="pricing" className="container">
                <header>
                    <p className="desktop-only">Planos e preços</p>
                    <h2>Nossos planos</h2>
                </header>

                <section className="even-columns gap-1.5">
                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Básico</h3>
                            <p>Você tem direito a uma aula experimental.</p>
                        </span>
                        <h2>Grátis</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Não paga nada.</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Treino Personalizado.</p>
                            </li>
                        </ul>
                    </div>

                    <div className="pricing-card premium">
                        <span className="bonus">
                            <p>1º MÊS COM DESCONTO</p>
                        </span>
                        <span className="plan">
                            <h3>Premium</h3>
                            <p>Você tem direito a uma aula experimental.</p>
                        </span>
                        <span className="price">
                            <h2>R$ 89,90</h2>
                            <p>/mês</p>
                        </span>
                        <Button text="Pedir agora" key="premium" />
                        <span className="hr" />
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Avaliação física uma vez ao mês.</p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Reagendamento online. </p>
                        </span>
                        <span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Convênio com nutricionista.</p>
                        </span>
                    </div>

                    <div className="pricing-card">
                        <span className="plan">
                            <h3>Empresarial</h3>
                            <p>Você tem direito a uma aula experimental.</p>
                        </span>
                        <h2>R$69,90</h2>
                        <Button text="Pedir agora" secondary key="free" />
                        <span className="hr" /><span className="features">
                            <img src={Check} alt="ícone check" width={24} height={24} />
                            <p>Treine com amigos.</p>
                        </span>
                        <ul className="features">
                            <li>
                                <img src={Check} alt="ícone check" width={24} height={24} />
                                <p>Mais incentivo no seu treino.</p>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>

            <section id="contact" className="container">
                <header>
                    <p>Envie sua dúvida</p>
                    <h2>Entre em contato</h2>
                    <p>
                        Entre em contato, estamos dispostos a tirar qualquer dúvida,
                        seja um orçamento, uma dúvida técnica.
                        Estamos à disposição para responder!
                    </p>
                </header>

                <form>
                    <input
                        type="email"
                        placeholder="Seu melhor Email"
                    />
                    <textarea
                        placeholder="Motivo do contato. Ex: Poderia me enviar um orçamento?"
                    />

                    <div className="btn-wrapper">
                        <Button text="Enviar" />
                    </div>
                </form>
            </section>

            <footer id="footer">
                <div className="container footer-content">

                    <div className="logo-column">
                        <img src={Logo} alt="Logo" width={280} height={120} />
                        <div className="social-links">
                            <a href="#"><img src={RedesSociais} alt="Redes Sociais" height={24} /></a>
                            
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="links-column">
                            <h3>Empresa</h3>
                            <ul>
                                <li><a href="#">Sobre nós</a></li>
                                <li><a href="#">Faça parte do time</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="links-column">
                            <h3>Funcionalidades</h3>
                            <ul>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Análise de dados</a></li>
                                <li><a href="#">Boot discord</a></li>
                            </ul>
                        </div>
                        <div className="links-column">
                            <h3>Recursos</h3>
                            <ul>
                                <li><a href="#">iOS & Android</a></li>
                                <li><a href="#">Teste a Demo</a></li>
                                <li><a href="#">Clientes</a></li>
                                <li><a href="#">API</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bar">
                    <p>Feito para te ajudar a ter uma vida mais saudável ♥ ©2025</p>
                </div>
            </footer>
        </>
    )
}