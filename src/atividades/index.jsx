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

      titulo: 'Componentes',
      subtitulo: 'Assuntos',
      assunto: '- Objetos e Listas de Objetos\n- Componentes',
      status: 'Em andamento',
      data: '26/agosto',
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
              trabalho={c.entregaTrab}
            />

          )

        }

        <Card
          status={'Em andamento'}
          titulo={'Renderização e Efeito'}
          subtitulo={'Assuntos'}
          assuntos={'- Componentes de Renderização'}
          data={'26/setembro'}
          temData={true}
          entregaTrab={false} />

        <Card
          titulo={'Consumindo APIs - Parte 1'}
          subtitulo={'Assuntos'}
          assuntos={'- Componentes de Renderização'}
          data={'9/setembro'}
          temData={true}
          entregaTrab={true} />

      </div>

      <div className='cards'>

        <Card
          status={'Evento'}
          titulo={'Prova Prática e Teórica'}
          subtitulo={'Assuntos'}
          assuntos={` - Criando um projeto React
 - Estilização com SCSS
 - Navegação entre telas
 - Variáveis de estado 
 - Renderização de lista 
 - Componentes`}
          data={'16/setembro'}
          temData={true}
          entregaTrab={false} />

        <Card
          status={'ND'}
          temData={false}
          titulo={'Fim do\n terceiro bimestre'}
        />

      </div>

    </div>

  );

}


