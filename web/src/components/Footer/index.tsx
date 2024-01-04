import React from "react";

import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <div>
        <p>Construído por Matheus Ramos de Pierro</p>
      </div>
      <div>
        <h3>Redes Sociais</h3>
        {/* Adicione links para suas redes sociais */}
        <a
          href="https://www.facebook.com/seufacebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://twitter.com/seutwitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/seulinkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div>
        <h3>Contato</h3>
        {/* Adicione informações de contato */}
        <p>Email: seuemail@example.com</p>
        <p>Telefone: (123) 456-7890</p>
      </div>
      <div>
        <p>
          &copy; {new Date().getFullYear()} Seu Nome. Todos os direitos
          reservados.
        </p>
      </div>
    </Container>
  );
}
