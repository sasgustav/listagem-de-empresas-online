import React from 'react';
import './AdditionalInfo.css';

const AdditionalInfo = () => {
  return (
    <section className="additional-info">
      <h2 className="info-title">Informações Adicionais</h2>
      <div className="info-content">
        {/* Adicione aqui o conteúdo adicional que você deseja exibir */}
        <p>
          Fique por dentro das últimas notícias, eventos e dicas sobre cidadania.
        </p>
        <ul>
          <li>Notícia 1</li>
          <li>Notícia 2</li>
          <li>Dica 1</li>
          <li>Evento 1</li>
        </ul>
      </div>
    </section>
  );
};

export default AdditionalInfo;
