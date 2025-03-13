"use client";

import { useRouter } from "next/navigation";
import styles from "../login/login.module.css";
import Block from "../../components/Block";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Login</h1>
        <form className={styles.form}>
          <Block content={"E-mail"}></Block>
          <Block content={"Senha"}></Block>
        </form>
        <div className={styles.botao}>
          <button type="submit" className={styles.button}>
            Login
          </button>
          <div className={styles.registro}>
            <button className={styles.button} onClick={() => window.location.href='/registro'}>Registrar-se</button>
          </div>
        </div>
      </main>
    </div>
  );
}
