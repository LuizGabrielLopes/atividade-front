"use client";

import styles from "../profile/profile.module.css";

export default function Profile() {
return (
    <div className={styles.page}>
    <main className={styles.main}>
        <h1>Perfil do Usuário</h1>
        <div className={styles.profileInfo}>
        <p><strong>Nome:</strong> Luiz Gabriel Lopes Carvalho</p>
        <p><strong>E-mail:</strong> luiz.gabriellopesc@gmail.com</p>
        <p><strong>Turma:</strong> 2TDS1</p>
        <p><strong>Curso:</strong> Desenvolvimento de Sistemas</p>
        </div>
        
        <ul className={styles.ul}>
                <h2 className={styles.habilidades}>Tecnologias que sei usar :</h2>
                <h3 className={styles.titleHab}>Front-End</h3>
                <div className={styles.div}>
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png" alt="Logo do HTML5" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png" alt="Logo do CSS" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png" alt="Logo do React" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png" alt="Logo do Next.js" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="Logo do JavaScript" />
                </div>
                <h3 className={styles.hab}>Back-End</h3>
                <div className={styles.div}>
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png" alt="Logo do JavaScript" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png" alt="Logo do Node.js" />
                <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png" alt="Logo do Express.js" />
                </div>
                <h3 className={styles.hab}>Banco de Dados</h3>
                <div className={styles.div}>
            <img className={styles.img}src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png" alt="Logo do PostgreSQL" />
            <img className={styles.img} src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png" alt="Logo do MySQL" />
                </div>  
                </ul>
    </main>
    </div>
);
}