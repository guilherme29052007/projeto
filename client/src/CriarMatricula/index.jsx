import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateMatricula() {
  const [Modelo, setModelo] = useState('');
  const [Preco, setPreco] = useState('');
  const [Tipo, setTipo] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novaMatricula = { Modelo, Preco, Tipo };

    try {
      const response = await fetch('http://localhost:5000/matriculas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaMatricula),
      });
      if (response.ok) {
        alert('Matrícula criada com sucesso!');
        setModelo('');
        setPreco('');
        setTipo('');
        navigate("/matriculas");
      } else {
        alert('Erro ao criar matrícula.');
      }
    } catch (error) {
      console.error('Erro ao criar matrícula:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Cadastrar Produto</h2>
      <input
        type="text"
        placeholder="Nome do Modelo"
        value={Modelo}
        onChange={(e) => setModelo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Preço"
        value={Preco}
        onChange={(e) => setPreco(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tipo"
        value={Tipo}
        onChange={(e) => setTipo(e.target.value)}
        required
      />
      <button type="submit">Cadastrar Produto</button>
    </form>
    </div>
  );
}
