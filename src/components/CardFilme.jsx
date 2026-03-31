import styles from "../styles/CardFilme.module.css";

function CardFilme({ titulo, imagem}) {
    return (
        <div className={styles.card}>
            <img className={styles.cardImagem} src={imagem} alt={titulo} />
            <h5>{titulo}</h5>
        </div>
    );
}

export default CardFilme;