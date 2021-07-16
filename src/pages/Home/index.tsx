import { error } from 'console';
import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../services/api';

import { Title, Repositories, Form, Header, Error } from './styles';

interface Repository {
  uf: string;
  state: string;
  cases: string;
  deaths: string;
  suspects: string;
  refuses: string;
}

const Home: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepository = localStorage.getItem(
      '@ApiCovidBrasil:repositories',
    );

      if(storageRepository){
        return JSON.parse(storageRepository);
      }
      return [];
  });

useEffect(() =>{
  localStorage.setItem(
    '@ApiCovidBrasil:repositories',
    JSON.stringify(repositories)
  )
}, [repositories]);


  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(!newRepo){
      setInputError("Informe um usuário/repositório para pesquisar.")
      return;
  }

   try {

      const response = await api.get<Repository>(`${newRepo}`);
      const repository = response.data;
      console.log(repository.hasOwnProperty('error'));
      
      if(repository.hasOwnProperty('error')){
        setInputError("Repósitorio não encontrado ou inexistente");
        return;
      }
  
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
  
    } catch (err) {
      setInputError("Repósitorio não encontrado ou inexistente");
    }

  }
  return (
    <>
    <Header>
        <img src="https://image.flaticon.com/icons/png/128/2913/2913584.png" />
        <h1>Covid-19 Brasil</h1>
    </Header>

      <Title>Relatorio Covid-19 Brasil</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input value={newRepo} onChange={e => setNewRepo(e.target.value)}
          placeholder="Insira a UF. Ex: SC" />
        <button type="submit"> Pesquisar </button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => {
          return (
          <a key={repository.state} href={`https://www.google.com/search?q=relatorio+coronavirus+${repository.uf}&oq=relatorio+coronavirus+&aqs=chrome.1.69i57j0l2j0i22i30.8415j0j7&sourceid=chrome&ie=UTF-8`}>
            <div>
              <strong>{repository.state} - {repository.uf}</strong>
              <p>Casos: {repository.cases}</p>
              <p>Mortes:  {repository.deaths}</p>
              <p>Suspeitos:  {repository.suspects}</p>
              <p>Resultados negativos:  {repository.refuses}</p>
            </div>
          </a>
          );
        })}
      </Repositories>
    </>
  )
};

export default Home;
