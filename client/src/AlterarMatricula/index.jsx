import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateMatricula() {
  const [id, setId] = useState('');
  const [Modelo, setModelo] = useState('');
  const [Preco, setPreco] = useState('');
  const [Tipo, setTipo] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { Modelo, Preco, Tipo };

    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('Matrícula atualizada com sucesso!');
        navigate("/matriculas");
      } else {
        alert('Erro ao atualizar matrícula.');
      }
    } catch (error) {
      console.error('Erro ao atualizar matrícula:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar Produto</h2>
      <input
        type="text"
        placeholder="ID do Produto"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do Produto"
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
      <button type="submit">Atualizar Matrícula</button>
    </form>
    </div>
  );
}
