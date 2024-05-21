import React, { useState } from 'react';
import './SubmitLinkForm.css';

const SubmitLinkForm = () => {
  const [formData, setFormData] = useState({
    siteName: '',
    siteUrl: '',
    description: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar os dados do formulário
    console.log(formData); // Exemplo: exibe os dados no console
  };

  return (
    <form className="submit-link-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Submeter um Link</h2>
      <div className="form-group">
        <label htmlFor="siteName">Nome do Site:</label>
        <input type="text" id="siteName" name="siteName" value={formData.siteName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="siteUrl">URL do Site:</label>
        <input type="url" id="siteUrl" name="siteUrl" value={formData.siteUrl} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descrição:</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="category">Categoria:</label>
        <select id="category" name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Selecione</option>
          <option value="saude">Saúde</option>
          <option value="educacao">Educação</option>
          {/* ... outras categorias */}
        </select>
      </div>
      <button type="submit" className="submit-button">Enviar</button>
    </form>
  );
};

export default SubmitLinkForm;
