import React, { useState, useEffect, FormEvent } from 'react';
import apiPaises from '../../services/apiPaises';

import { Title, Repositories, Form, Header, Error } from './styles';

interface RepositoryPaises {
  data:{
  country: string;
  cases: string;
  deaths: string;
  recovered: string;
  }
}

const paises: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<RepositoryPaises[]>(() => {
    const storageRepository = localStorage.getItem(
      '@ApiCovidMundo:repositories',
    );

      if(storageRepository){
        return JSON.parse(storageRepository);
      }
      return [];
  });

useEffect(() =>{
  localStorage.setItem(
    '@ApiCovidMundo:repositories',
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
      const response = await apiPaises.get<RepositoryPaises>(`${newRepo}`);
      const repository = response.data;
      console.log(repository);

      if(!repository.data.hasOwnProperty("country")){
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
        <h1>Covid-19 Mundo</h1>
    </Header>

      <Title>Relatorio Covid-19 Mundo</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input value={newRepo} onChange={e => setNewRepo(e.target.value)}
          placeholder="Insira o pais. Ex: Finland" />
        <button type="submit"> Pesquisar </button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      
      <Repositories>
        {repositories.map(repository => {
          return (
          <a key={repository.data.country} href={`https://www.google.com/search?q=relatorio+coronavirus+${repository.data.country}&oq=relatorio+coronavirus+&aqs=chrome.1.69i57j0l2j0i22i30.8415j0j7&sourceid=chrome&ie=UTF-8`}>
            <div>
              <strong>{repository.data.country} </strong>
              <p>Casos: {repository.data.cases}</p>
              <p>Mortes: {repository.data.deaths}</p>
              <p>Recuperados: {repository.data.recovered}</p>
            </div>
          </a>
          );
        })}
      </Repositories>
    </>
  )
};

export default paises;
