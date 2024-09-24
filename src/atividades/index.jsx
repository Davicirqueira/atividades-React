import './index.scss';
import './styles.scss'
import { useState } from 'react';
import Cabecalho from '../components/header';
import Card from '../components/card';
import axios from 'axios';
import PaginaErro from '../paginaErro';

export default function Atividade() {

  const [cards, setCards] = useState([])
  const [err, setErr] = useState(true)

  async function listarCards(){

    try {
      
      const dados = await axios.get('http://localhost:4000/cards')

      setCards(dados.data)
      setErr(!err)

    } 
    catch(error) {
    
      alert(error)

    }

  }
  // let cards = [

  //   {

  //     titulo: 'Componentes',
  //     subtitulo: 'Assuntos',
  //     assunto: '- Objetos e Listas de Objetos\n- Componentes',
  //     status: 'Completo',
  //     data: '26/agosto',
  //     temData: true,
  //     entregaTrab: false

  //   },

  //   {

  //     titulo: 'Renerização e Efeito',
  //     subtitulo: 'Assuntos',
  //     assunto: 'Componentes na renderização',
  //     status: 'Em andamento',
  //     data: '2/setembro',
  //     temData: true,
  //     entregaTrab: false

  //   },

  //   {

  //     titulo: 'Consumindo APIs - Parte 1',
  //     subtitulo: 'Assuntos',
  //     assunto: 'Componentes na renderização',
  //     data: '9/setembro',
  //     temData: true,
  //     entregaTrab: true

  //   },
    
  //   {

  //     titulo: 'Prova Teórica e Prática',
  //     subtitulo: 'Assuntos',
  //     assunto: '- Criando um projeto React\n- Estilização com SCSS\n- Navegação entre telas\n- Variáveis de estado\n- Renderização de lista\n- Componentes',
  //     status: 'Evento',
  //     data: '16/setembro',
  //     temData: true,
  //     entregaTrab: false

  //   }

  // ]

  return (
    <div className="pagina-atividade">

      <Cabecalho />

      <button onClick={listarCards}> {err == true ? 'Atualizar' : 'Voltar'} </button>

      <h1>Conteúdos</h1>

      {err == true &&

      <PaginaErro/>

      }

      <div className='cards'>

        {err == false &&

          cards.map(c => 

            <Card
              titulo={c.titulo}
              subtitulo={c.subtitulo}
              assuntos={c.assuntos}
              data={c.data}
              status={c.status}
              entregaTrab={c.entregaTrab}
            />

          )

        }

      </div>

      <footer> &bnsp; </footer>

    </div>

  );

}


