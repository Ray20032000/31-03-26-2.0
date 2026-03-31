import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import { useNavigate} from "react-router-dom";

function Erro404() {


    return (
        <div>
            <Header />
                <h1>
                    Ops! <br />
                    Página não encontrada
                </h1>

                <h3>
                    Erro 404
                </h3>

                <button onClick={useNavigate("/home")} >Voltar para Home</button>


            <Footer />
        </div>
)
}

