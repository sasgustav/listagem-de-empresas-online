// src/api/api-cnpj-empresa.js

const fetch = require('node-fetch'); // Importe o módulo 'node-fetch'

exports.handler = async (event, context) => {
  try {
    const cnpj = event.path.split('/').pop(); // Obtém o CNPJ da URL

    const response = await fetch(`https://receitaws.com.br/v1/cnpj/${cnpj}`); // Substitui pela URL da API da Receita

    if (!response.ok) {
      throw new Error(`Erro na consulta do CNPJ: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.status === 'ERROR') {
      throw new Error(`CNPJ não encontrado ou inválido.`);
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
