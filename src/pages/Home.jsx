import styles from "../styles/Home.module.css";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import CardFilme from "../components/CardFilme.jsx";
import Carrossel from "../components/Carrossel.jsx";


function Home() {
    const location = useLocation();




    return (
        <div className={styles.container}>
            <Header/>


            {location.state?.mensagem && (
                <div className={styles.alert}>{location.state.mensagem}</div>
            )}


            <section>
                    <img className={styles.banner} src="/Banner.png" alt="Banner" />
            </section>


            <section className={styles.section}>
                <h2>Em cartaz</h2>
                <Carrossel id={1}/>
            </section>

            <section className={styles.section}>
                <h2>Em breve</h2>
                <Carrossel id={2}/>
            </section>

            <section className={styles.section}>
                <h2>Mais assistidos</h2>
                <Carrossel id={3}/>
            </section>

            <section className={styles.section}>
                <h2>Recomendado pra você</h2>
                <Carrossel id={4}/>
            </section>

            <Footer/>
        </div>
    );
}



export default Home;