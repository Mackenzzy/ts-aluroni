import styles from './Prato.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom'
import cardapio from 'data/cardapio.json';
import NotFound from 'pages/NotFound';
import TagsPrato from 'components/TagsPrato';
import Cabecalho from 'components/Cabecalho';


export default function Prato() {
    const { id } = useParams();
    const prato = cardapio.find(item => item.id === Number(id));


    const voltar = useNavigate();
    const fazVoltar = () => {
        voltar(-1);
    };

    if (!prato) {
        return <NotFound />
    }

    return (
        <Routes>
            <Route path='*' element={<Cabecalho />}>
                <Route index element={
                    <>
                        <button
                            className={styles.voltar}
                            onClick={fazVoltar}
                        >
                            {'<Voltar'}
                        </button>
                        <section className={styles.container}>
                            <h1 className={styles.titulo}>{prato.title}</h1>
                            <div className={styles.imagem}>
                                <img src={prato.photo} alt={prato.title} />
                            </div>
                            <div className={styles.conteudo}>
                                <p className={styles.conteudo__descricao}></p>
                                <TagsPrato
                                    {...prato}
                                />
                            </div>
                        </section>
                    </>
                } />
            </Route>

        </Routes>
    );

}