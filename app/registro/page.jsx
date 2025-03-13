import styles from "../registro/registro.module.css";
import Block from "../../components/Block";

export default function Regristro() {
return (
    <div className={styles.page}>
    <main className={styles.main}>
        <h1>Faça seu cadastro abaixo:</h1>
        <form className={styles.form}>

        <Block content={ "Nome" }></Block>

        <Block content={ "CPF" }></Block>

        <Block content={ "E-mail" }></Block>

        <Block content={ "Senha" }></Block>

        </form>
        <div className={styles.registro}>
            <button className={styles.button}>Terminar o registro</button>
        </div>
    </main>
    </div>
);
}
