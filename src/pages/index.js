import React from 'react';
import Layout from './layout';
import Hero from '../components/Hero/Hero';
import SearchBar from '../components/SearchBar/SearchBar';
import SubmitLinkForm from '../components/SubmitLinkForm/SubmitLinkForm';
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo';
import Section from '../components/Section/Section';
import CnpjSearch from '../components/CnpjSearch/CnpjSearch';

const IndexPage = () => {
  const sections = [
    {
      id: 'saude',
      title: 'Saúde',
      description: 'Encontre informações e serviços de saúde pública, hospitais, clínicas, informações sobre doenças, prevenção e muito mais.',
      links: [
        { name: 'Ministério da Saúde', url: 'https://www.gov.br/saude/pt-br', description: 'Portal oficial do Ministério da Saúde do Brasil.' },
        { name: 'SUS - Sistema Único de Saúde', url: 'http://portalsaude.saude.gov.br/', description: 'Informações sobre o Sistema Único de Saúde (SUS).' },
        { name: 'ANVISA - Agência Nacional de Vigilância Sanitária', url: 'https://www.gov.br/anvisa/pt-br', description: 'Agência reguladora de medicamentos, alimentos e produtos de saúde.' },
        { name: 'Conselho Federal de Medicina (CFM)', url: 'https://portal.cfm.org.br/', description: 'Órgão regulador da medicina no Brasil.' },
        { name: 'Hospitais e Clínicas', url: '#', description: 'Lista de hospitais e clínicas em sua região.' },
        { name: 'Saúde Mental', url: '#', description: 'Informações e recursos sobre saúde mental e bem-estar.' },
      ]
    },
    {
      id: 'educacao',
      title: 'Educação',
      description: 'Explore recursos educacionais, escolas, universidades, cursos online, materiais didáticos, informações sobre bolsas de estudo e muito mais.',
      links: [
        { name: 'Ministério da Educação (MEC)', url: 'https://www.gov.br/mec/pt-br', description: 'Portal oficial do Ministério da Educação do Brasil.' },
        { name: 'INEP - Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira', url: 'https://www.gov.br/inep/pt-br', description: 'Informações sobre o Exame Nacional do Ensino Médio (ENEM) e outros exames.' },
        { name: 'CAPES - Coordenação de Aperfeiçoamento de Pessoal de Nível Superior', url: 'https://www.gov.br/capes/pt-br', description: 'Informações sobre pós-graduação e bolsas de estudo.' },
        { name: 'Plataforma Freire', url: 'https://plataforma.freire.mec.gov.br/', description: 'Plataforma de cursos online gratuitos do MEC.' },
        { name: 'Escolas Públicas', url: '#', description: 'Lista de escolas públicas em sua região.' },
        { name: 'Universidades', url: '#', description: 'Lista de universidades públicas e privadas.' },
      ]
    },
    {
      id: 'parceiros',
      title: 'Parceiros',
      description: 'Conheça nossos parceiros que contribuem para um futuro melhor.',
      links: [
        { name: 'SmartSeller', url: 'https://smartseller.com.br/', description: 'Plataforma de gestão para e-commerce.' },
        { name: 'Dra. Gabriella Figueiredo', url: 'https://www.dragabriellafigueiredo.com.br/', description: 'Especialista em dermatologia e estética.' },
        { name: 'Prontuário Fácil', url: 'https://prontuariofacil.com.br/', description: 'Software de gestão para clínicas e consultórios.' },
      ]
    }
  ];

  return (
    <Layout>
      <Hero />
      <SearchBar />
      <CnpjSearch />
      {sections.map(section => (
        <Section key={section.id} title={section.title} description={section.description} links={section.links} />
      ))}
    </Layout>
  );
};

export default IndexPage;
