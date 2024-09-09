import './index.scss';
import './styles.scss'
import Cabecalho from '../components/header';
import Card from '../components/card';
import Footer from '../components/footer'

//const itens = {

// corPrimaria = '#A3E5BA'
// corSegundaria = '#EFFBE2'
// titulo = 'Componentes'
// subtitulo = 'Assuntos'
// texto = '- Objetos e Listas de Objetos\n- Componentes'
// data = '26/agosto'

//}

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
          temData={true}
          trabalho={false}
        />

        <Card
          corPrimaria={'#DCA3E5'}
          corSegundaria={'#EDE2FB'}
          titulo={'Renderização e Efeito'}
          subtitulo={'Assuntos'}
          texto={'- Componentes de Renderização'}
          data={'26/setembro'}
          temData={true}
          trabalho={false} />

        <Card
          corPrimaria={'#C3C3C3'}
          corSegundaria={'#F2F2F2'}
          titulo={'Consumindo APIs - Parte 1'}
          subtitulo={'Assuntos'}
          texto={'- Componentes de Renderização'}
          data={'9/setembro'}
          temData={true}
          trabalho={true} />

      </div>

      <div className='cards'>

        <Card
          corPrimaria={'#F6E448'}
          corSegundaria={'#FAF4C1'}
          titulo={'Prova Prática e Teórica'}
          subtitulo={'Assuntos'}
          texto={` - Criando um projeto React
 - Estilização com SCSS
 - Navegação entre telas
 - Variáveis de estado 
 - Renderização de lista 
 - Componentes`}
          data={'16/setembro'}
          temData={true}
          trabalho={false} />

        <Card
          temData={false}
          titulo={'Fim do\n terceiro bimestre'}
        />

      </div>

      <Footer/>

    </div>

  );

}


