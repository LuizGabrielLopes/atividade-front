"use client";

import styles from "../registro/registro.module.css";
import Block from "../../components/Block";
import { useState } from "react";

export default function Registro() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [match, setMatch] = useState(null);
  const [error, setError] = useState(null);

  const handleCheck = () => {
    if (input1 !== input2) {
      setMatch(false);
      setError("As senhas não conferem");
    } else if (input1.length < 6) {
      setMatch(false);
      setError("A senha deve ter no mínimo 6 caracteres");
    } else if (input1.length === 0) {
      setMatch(false);
      setError("Preencha o input 1");
    } else if (input2.length === 0) {
      setMatch(false);
      setError("Preencha o input 2");
    } else {
      setMatch(true);
      setError("Sucesso");
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Faça seu cadastro abaixo:</h1>
        <form className={styles.form}>
          <Block content={"Nome"}></Block>
          <Block content={"CPF"}></Block>
          <Block content={"E-mail"}></Block>
          <div>
      <input
        className={styles.verification}
        type="password" 
        placeholder="Digite a senha"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        className={styles.verification}
        type="password" 
        placeholder="Repita a senha" 
        value={input2} 
        onChange={(e) => setInput2(e.target.value)}
      />
      <div className={styles.buttons}  >
      <button className={styles.button} onClick={handleCheck}>Verificar</button>{" "}
      {}
      {match !== null && <p>{error}</p>}{" "}
      {}
      <button onClick={() => window.location.href='/profile'} className={styles.button}>Terminar o registro</button></div>
    </div>
        </form>
      </main>
    </div>
  );
}
