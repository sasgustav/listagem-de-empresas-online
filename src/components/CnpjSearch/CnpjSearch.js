// src/components/CnpjSearch.js

import React, { useState } from 'react';

const CnpjSearch = () => {
  const [cnpj, setCnpj] = useState('');
  const [empresa, setEmpresa] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(`/api/api-cnpj-empresa/v2/empresa/${cnpj}`);
      const data = await response.json();

      if (response.ok) {
        setEmpresa(data);
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Erro ao buscar dados da empresa.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={cnpj} onChange={(e) => setCnpj(e.target.value)} placeholder="Digite o CNPJ" />
        <button type="submit">Buscar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {empresa && (
        <div>
          <h2>{empresa.nome}</h2>
          <p>CNPJ: {empresa.cnpj}</p>
          {/* ... outros dados da empresa ... */}
        </div>
      )}
    </div>
  );
};

export default CnpjSearch;
