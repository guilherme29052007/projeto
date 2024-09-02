import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadMatriculas() {
  const [matriculas, setMatriculas] = useState([]);


  useEffect(() => {
    const fetchMatriculas = async () => {
      try {
        const response = await fetch('http://localhost:5000/matriculas');
        const data = await response.json();
        setMatriculas(data);
      } catch (error) {
        console.error('Erro ao buscar as matrículas:', error);
      }
    };

    fetchMatriculas();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/matriculas/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setMatriculas(matriculas.filter((matricula) => matricula._id !== id));
        alert('Matrícula excluída com sucesso!');
      } else {
        alert('Erro ao excluir matrícula.');
      }
    } catch (error) {
      console.error('Erro ao excluir matrícula:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de Matrículas</h2>
      <table  className="table-container" border="1">
        <thead>
          <tr>
            <th>Código Matrícula</th>
            <th>Nome do Modelo</th>
            <th>Preço</th>
            <th>Tipo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {matriculas.map((estoque) => (
            <tr key={estoque._id}>
              <td>{estoque._id}</td>
              <td>{estoque.Modelo}</td>
              <td>{estoque.Preco}</td>
              <td>{estoque.Tipo}</td>
              <td>
                <button onClick={() => handleDelete(estoque._id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
