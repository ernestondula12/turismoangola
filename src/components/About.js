import React from "react";
import Title from "./Title";
import aboutImage from '../images/kalandula2.jpg'

const About = () => {

    return(
        <section className="section" id="about">
            <Title title="sobre" subtitle="nós" />
            <div className="section-center about-center">
                <div className="about-img">
                    <img 
                        src={aboutImage}
                        className="about-photo"
                        alt="imagem das quedas de kalandula"
                    />
                </div>
                <article className="about-info">
                    <h3>explore a diferença</h3>
                    <p>
                        Cada lugar visitado, cada pessoa encontrada e cada experiência vivida 
                        trazem aprendizados únicos que ampliam nosso olhar sobre o mundo.
                    </p>
                    <p>
                        Seja em uma viagem para um destino exótico ou em um simples passeio por um bairro desconhecido, 
                        perceber as diferenças nos faz crescer e evoluir. 
                    </p>
                    <a href="#" className="btn">ler mais</a>
                </article>
            </div>
        </section>
    )

}

export default About;