import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Login</h1>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Nome</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
          </div>
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
