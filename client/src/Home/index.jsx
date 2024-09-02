import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <h2>Estoque Nike</h2>
            <div className="card-container">
                <Link to="/matricula/cadastrar" className="card">
                    <div>Cadastrar Produto</div>
                </Link>
                <Link to="/matriculas" className="card">
                    <div>Lista de Produtos</div>
                </Link>
                <Link to="/matriculas/alterar" className="card">
                    <div>Editar Produto</div>
                </Link>
            </div>
        </div>
    );
}
