import {Link} from 'react-router-dom';
import Money from '../../assets/images/money.png';

import './style.css';

const Header = () => {
    return (
        <header>
            <div className='icon--header'>
                <img src={Money} alt='money' className='money--icon'/>
            </div>

            <ul className='menu'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/projects'>Projetos</Link></li>
                <li><Link to='/company'>Empresa</Link></li>
                <li><Link to='/contact'>Contato</Link></li>
            </ul>
        </header>
    )
}

export default Header;