import './index.scss';
import Cabecalho from '../components/header';
import Footer from '../components/footer';

export default function PaginaErro() {

    return (

        <div className='pagina-erro'>

            <Cabecalho />

            <h1>Conteúdos</h1>

            <img className='err' src="/assets/images/image.png" alt="" />

        </div>

    );

}