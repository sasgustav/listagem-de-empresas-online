import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './CnpjSearch.css';

const CnpjSearch = () => {
  const [cnpj, setCnpj] = useState('');
  const [empresa, setEmpresa] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Limpa o erro anterior

    const cleanedCnpj = cnpj.replace(/\D/g, ''); // Remove caracteres não numéricos do CNPJ

    try {
      const response = await fetch(`/api/api-cnpj-empresa/v2/empresa/${cleanedCnpj}`);
      const data = await response.json();

      if (response.ok) {
        setEmpresa(data);
      } else {
        setError(data.status === 'ERROR' ? 'CNPJ não encontrado ou inválido.' : 'Erro na consulta.');
      }
    } catch (error) {
      setError('Erro ao buscar dados da empresa.');
    }
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
          placeholder="Digite o CNPJ"
        />
        <button type="submit" className="search-button">
          <FaSearch className="search-icon" />
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {empresa && (
        <div className="result-container">
          <h2>{empresa.nome}</h2>
          <p>CNPJ: {empresa.cnpj}</p>
          <p>Razão Social: {empresa.razao_social}</p>
          {/* Adicione mais campos de dados da empresa conforme necessário */}
        </div>
      )}
    </div>
  );
};

export default CnpjSearch;
