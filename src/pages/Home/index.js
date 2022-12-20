import Savings from '../../assets/images/savings.png' ;

import './style.css';

const Home = () => {
    return (
        <main id='main--home'>
            <div className="titles--home">
                <h1>Bem-vindo ao <span>Costs</span></h1>
                <p>Comece a gerenciar seus projetos agora mesmo!</p>
            </div>

            <div className="button--home">
                <button className="button">Criar projeto</button>
            </div>
            
            <div className="image--home">
                <img src={Savings} alt="savings" className='savings'/>
            </div>
        </main>
    )
}

export default Home;