import styles from "../styles/Logada.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import Carrossel from "../components/Carrossel.jsx";

function AdminLogado() {
    return (
        <div>
            <Header />

            <h1>Olá, [nome]</h1>

            <img className={styles.sair} src="/logout.png" alt="Sair" />

            <button type="button">Editar</button>

            <div>
                <h3>Editar Filme</h3>
            </div>

            <section className={styles.section}>
                <Carrossel id={1}/>


            </section>
            <Footer />
        </div>
    );
}

export default AdminLogado;