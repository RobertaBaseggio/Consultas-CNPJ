import React, { useState, FormEvent } from 'react';
import { FiChevronRight} from 'react-icons/fi';
import api from '../services/api';

import { Title, Repositories, Form } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Home: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');

  }
  return (
    <>
      <Title>Explore CNPJ's</Title>

      <Form onSubmit={handleAddRepository}>
        <input value={newRepo} onChange={e => setNewRepo(e.target.value)}
          placeholder="Insira o CNPJ" />
        <button type="submit"> Pesquisar </button>
      </Form>

      <Repositories>
        <div>
        <a  href="#">
          <div>
            <strong>GOOGLE BRASIL INTERNET LTDA</strong>
            <p>Portais, provedores de conteúdo e outros serviços de informação na internet</p>
            <p>googlebrasil@google.com</p>
            <p>SP - São Paulo - 06.990.590/0001-23</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        <a  href="#">
          <div>
            <strong>GOOGLE BRASIL INTERNET LTDA</strong>
            <p>Portais, provedores de conteúdo e outros serviços de informação na internet</p>
            <p>googlebrasil@google.com</p>
            <p>SP - São Paulo - 06.990.590/0001-23</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
        </div >
      </Repositories>
    </>
  )
};

export default Home;
