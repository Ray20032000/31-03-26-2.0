import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Cadastro.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";

function Cadastro() {
    const navigate = useNavigate();

    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");

    function handleCadastro(e) {
        e.preventDefault();


        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


        const emailNormalizado = email.trim().toLowerCase();
        const senhaNormalizada = String(senha).trim();


        const usuarioExiste = usuarios.find(
            (u) => String(u.email).trim().toLowerCase() === emailNormalizado
        );

        if (usuarioExiste) {
            alert("Email já cadastrado");
            return;
        }


        const novoUsuario = {
            cpf: cpf.trim(),
            email: emailNormalizado,
            telefone: telefone.trim(),
            senha: senhaNormalizada,
        };

        usuarios.push(novoUsuario);


        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");

        navigate("/login");
    }

    return (
        <div className={styles.page}>

            <Header/>

            <main className={styles.content}>
                <h1 className={styles.title}>LUMINAFLIX</h1>

                <form className={styles.form} onSubmit={handleCadastro}>
                    <label>CPF</label>
                    <input
                        type="text"
                        placeholder="Digite seu CPF"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        required
                    />

                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Telefone</label>
                    <input
                        type="text"
                        placeholder="Digite seu telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder="Digite a senha"
                        maxLength={8}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <button type="submit">Cadastrar</button>
                </form>
            </main>

            <Footer/>

        </div>
    );
}

export default Cadastro;