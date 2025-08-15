import React, { useState } from "react";
import styles from "../styles/AppLayout.module.css";

export default function SobreMim() {
  const [language, setLanguage] = useState("pt");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "pt" ? "en" : "pt"));
  };

  const phrase = {
    pt: "Olá 👋, sou o Tiago, tenho 18 anos, moro em Belo Horizonte - MG e estou estudando programação. Atualmente sou aluno do curso de Engenharia de Software na PUC Minas, no quarto período. Tenho grande interesse em desenvolvimento de software, criação de sites e soluções que unem tecnologia e criatividade.",
    en: "Hello 👋, I am Tiago, 18 years old, I live in Belo Horizonte - MG and I am studying programming. I am currently a student of Software Engineering at PUC Minas, in the fourth semester. I have a great interest in software development, website creation and solutions that combine technology and creativity.",
  };

  return (
    <section>
      <h1>Sobre Mim</h1>
      <div className={styles.aboutMeButtonsContainer}>
        <button onClick={() => setLanguage("pt")}>Ver em Português</button>
        <button onClick={() => setLanguage("en")}>View in English</button>
      </div>
      <p>{phrase[language]}</p>
    </section>
  );
}
