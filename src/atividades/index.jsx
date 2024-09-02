import './index.scss';
import './styles.scss'
import Cabecalho from '../components/header';

const itens = {

  // corPrimaria = '#A3E5BA'
  // corSegundaria = '#EFFBE2'
  // titulo = 'Componentes'
  // subtitulo = 'Assuntos'
  // texto = '- Objetos e Listas de Objetos\n- Componentes'
  // data = '26/agosto'

}

export default function Atividade() {

  return (
    <div className="pagina-atividade">

      <Cabecalho />

      <h1>Conteúdos</h1>

      <div className='cards'>

        <Card
          corPrimaria={'#A3E5BA'}
          corSegundaria={'#EFFBE2'}
          titulo={'Componentes'}
          subtitulo={'Assuntos'}
          texto={'- Objetos e Listas de Objetos\n- Componentes'}
          data={'26/agosto'}
        />

        <Card
          corPrimaria={'#DCA3E5'}
          corSegundaria={'#EDE2FB'}
          titulo={'Renderização e Efeito'}
          subtitulo={'Assuntos'}
          texto={'- Componentes de Renderização'}
          data={'26/agosto'} />

        <Card
          corPrimaria={'#DCA3E5'}
          corSegundaria={'#EDE2FB'}
          titulo={'Renderização e Efeito'}
          subtitulo={'Assuntos'}
          texto={'- Componentes de Renderização'}
          data={'26/agosto'} />

      </div>

    </div>

  );

}

function Card({ corPrimaria, corSegundaria, titulo, subtitulo, texto, data }) {

  // corPrimaria = '#A3E5BA'
  // corSegundaria = '#EFFBE2'
  // titulo = 'Componentes'
  // subtitulo = 'Assuntos'
  // texto = '- Objetos e Listas de Objetos\n- Componentes'
  // data = '26/agosto'

  return (

    <div className='card' style={{ backgroundColor: corSegundaria }}>
      <div className='card-cabecalho' style={{ backgroundColor: corPrimaria }}>
        <h2>{titulo}</h2>
      </div>
      <div className='card-conteudo'>
        <h3>{subtitulo}</h3>
        <pre>
          {texto}
        </pre>
      </div>
      <p className='tag'>{data}</p>
    </div>

  )

}

