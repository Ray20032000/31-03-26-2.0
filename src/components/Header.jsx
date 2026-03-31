import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

function Header(){
    return(
            <header className={styles.header}>

                <img className={styles.logo} src="/logo.png" alt="Logo" />

                <nav className={styles.menu}>
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/cadastro">Cadastro</Link>
                </nav>

            </header>

    )
}

export default Header;