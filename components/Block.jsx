import styles from '../styles/Block.module.css'

export default function Block( {content} ) {
    return (
        <div className={styles.inputGroup}>
            <label htmlFor="username"> {content} </label>
            <input type="text" id="username" name="username" required />
        </div>
    );
}
