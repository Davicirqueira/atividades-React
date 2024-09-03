import './index.scss'

export default function Card({ corPrimaria, corSegundaria, titulo, subtitulo, texto, data, temData, trabalho}) {

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
        
        {
           temData && <p className='tag'>{data}</p>
        }
        
        {
            trabalho && <p className='tag'>Entrega Trab.</p>
        }

      </div>
  
    )
  
  }