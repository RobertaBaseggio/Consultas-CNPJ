import React, { useState, FormEvent } from 'react';
import apiPaises from '../../services/apiPaises';

import { Title, Repositories, Form, Header } from './styles';

interface RepositoryPaises {
  data:{
  country: string;
  cases: string;
  deaths: string;
  suspects: string;
  recovered: string;
  }
}

const paises: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<RepositoryPaises[]>([]);
  let uf: string;

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const response = await apiPaises.get<RepositoryPaises>(`${newRepo}`);
    const repository = response.data;
    uf = newRepo;

    setRepositories([...repositories, repository]);
    setNewRepo('');

  }
  return (
    <>
    <Header>
        <img src="https://image.flaticon.com/icons/png/128/2913/2913584.png" />
        <h1>Covid-19 Brasil</h1>
    </Header>

      <Title>Relatorio Covid-19 Mundo</Title>

      <Form onSubmit={handleAddRepository}>
        <input value={newRepo} onChange={e => setNewRepo(e.target.value)}
          placeholder="Insira o pais. Ex: Finland" />
        <button type="submit"> Pesquisar </button>
      </Form>
      <Repositories>
        {repositories.map(repository => {
          return (
          <a key={repository.data.country} href="https://www.google.com/search?q=relatorio+coronavirus+brasil&oq=relatorio+coronavirus+&aqs=chrome.1.69i57j0l2j0i22i30.8415j0j7&sourceid=chrome&ie=UTF-8">
            <div>
              <strong>{repository.data.country} </strong>
              <p>Casos: {repository.data.cases}</p>
              <p>Mortes:  {repository.data.deaths}</p>
              <p>Suspeitos:  {repository.data.suspects}</p>
              <p>Recuperados:  {repository.data.recovered}</p>
            </div>
          </a>
          );
        })}
      </Repositories>
    </>
  )
};

export default paises;
