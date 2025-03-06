import styles from "../styles/page.module.css";

export default function Home() {
return (
    <div className={styles.page}>
    <main className={styles.main}>
        <h1>Faça seu cadastro abaixo:</h1>
        <form className={styles.form}>
        <div className={styles.inputGroup}>
            <label htmlFor="username">Nome</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div className={styles.inputGroup}>
            <label htmlFor="username">CPF</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div className={styles.inputGroup}>
            <label htmlFor="username">E-mail</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" required />
        </div>
        </form>
        <div className={styles.registro}>
            <button className={styles.button}>Terminar o registro</button>
        </div>
    </main>
    </div>
);
}
