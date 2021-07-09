import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Title, Form, Header } from './styles';

const Start: React.FC = () => {
  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

  }
  return (
    <>
    <Header>
        <img src="https://image.flaticon.com/icons/png/128/2913/2913584.png" />
        <h1>Covid-19 Brasil</h1>
    </Header>
      <Title>Relatorio Covid-19</Title>
      <Form>
          <Link to="/brazil/uf">
        <button type="submit"> Pesquisar por estado brasileiro </button>
        </Link>
        <Link to="/countries">
        <button type="submit"> Pesquisar por países </button>
        </Link>
      </Form>
    </>
  )
};

export default Start;
