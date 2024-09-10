import './index.scss';
import './styles.scss'
import Cabecalho from '../components/header';
import Card from '../components/card';


export default function Atividade() {

  let cards = [

    {

      titulo: 'Componentes',
      subtitulo: 'Assuntos',
      assunto: '- Objetos e Listas de Objetos\n- Componentes',
      status: 'Completo',
      data: '26/agosto',
      temData: true,
      entregaTrab: false

    },

    {

      titulo: 'Renerização e Efeito',
      subtitulo: 'Assuntos',
      assunto: 'Componentes na renderização',
      status: 'Em andamento',
      data: '2/setembro',
      temData: true,
      entregaTrab: false

    },

    {

      titulo: 'Consumindo APIs - Parte 1',
      subtitulo: 'Assuntos',
      assunto: 'Componentes na renderização',
      data: '9/setembro',
      temData: true,
      entregaTrab: true

    },
    
    {

      titulo: 'Prova Teórica e Prática',
      subtitulo: 'Assuntos',
      assunto: '- Criando um projeto React\n- Estilização com SCSS\n- Navegação entre telas\n- Variáveis de estado\n- Renderização de lista\n- Componentes',
      status: 'Evento',
      data: '16/setembro',
      temData: true,
      entregaTrab: false

    }

  ]



  return (
    <div className="pagina-atividade">

      <Cabecalho />

      <h1>Conteúdos</h1>

      <div className='cards'>

        {
          cards.map(c => 

            <Card
              titulo={c.titulo}
              subtitulo={c.subtitulo}
              assunto={c.assunto}
              status={c.status}
              data={c.data}
              temData={c.temData}
              entregaTrab={c.entregaTrab}
            />

          )

        }

      </div>

      <footer> &bnsp; </footer>

    </div>

  );

}


