import React from 'react';
import './estilo.css';

export default function SecaoContato() {
    return (
        <section id='contato' className='secao-contato'>
            <div className='limitar-secao'>
                <h3>Fale Conosco</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
            </div>

            <div className='contato-container'>
                <div className='contato-conteudo'>
                    <h4>Contato</h4>
                    <div>
                        <img src='assets/local.png' title='Ícone local' alt='Pino de localização'/>
                        <span>Nova Iguaçu - RJ</span>
                    </div>

                    <div>
                        <img src='assets/telefone.png' title='Ícone telefone' alt='Ícone de telefone'/>
                        <span>(21) 99999-9999</span>
                    </div>

                    <div>
                        <img src='assets/email.png' title='Ícone email' alt='Ícone de email'/>
                        <span>contato@oticasvida.com</span>
                    </div>
                </div>

                <div className='contato-conteudo'>
                    <h4>Nossas Redes Sociais</h4>
                    <div>
                        <img src='assets/fb.png' title='Ícone Facebook' alt='Logo do facebook'/>
                        <span>/OticaVida</span>
                    </div>

                    <div>
                        <img src='assets/ig.png' title='Ícone Instagram' alt='Logo do instagram'/>
                        <span>@oticasvidarj</span>
                    </div>

                    <div>
                        <img src='assets/tt.png' title='Ícone Twitter' alt='Logo do twitter'/>
                        <span>@oticasvidarj</span>
                    </div>
                </div>
            </div>
        </section>
    )
}