import styles from './Frase.module.css'

function Frase() {

    return (
        <div className={styles.fraseContainer}>
            <h2 className={styles.fraseContent}>
                Este componente é uma frase!
            </h2>
        </div>
    )
}

export default Frase;